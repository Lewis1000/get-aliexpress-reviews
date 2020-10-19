const puppeteer = require('puppeteer');
const fs = require('fs');

// Product URL
const productUrl = 'https://www.aliexpress.com/item/33006043496.html?spm=a2g0o.productlist.0.0.40265f256ExPEv&algo_pvid=3c88fa2f-0937-4aa4-b1f3-4776b412df5b&algo_expid=3c88fa2f-0937-4aa4-b1f3-4776b412df5b-3&btsid=0b8b034e15994107563834577ed541&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(productUrl);

    const getPageData = await page.evaluate(() => {
        const pageData = window.runParams.data;
        // Product ID & Seller / Company Information
        const productId = pageData.feedbackModule.productId;
        const sellerId = pageData.feedbackModule.sellerAdminSeq;
        const companyId = pageData.feedbackModule.companyId;
        return { productId, sellerId, companyId };
    });

    const productId = getPageData.productId;
    const sellerId = getPageData.sellerId;
    const companyId = getPageData.companyId;
    // Use ?page=${number} at end of URL to access pages max = 100;
    await page.goto(`https://feedback.aliexpress.com/display/productEvaluation.htm?v=2&productId=${productId}&ownerMemberId=${sellerId}&companyId=${companyId}`);

    const fetchReviews = await page.evaluate(() => {
        // Fetching Review Containers / Review Total
        const feedbackItems = document.querySelectorAll('.feedback-item');
        const feedbackInfo = [];
        // Fetching Information forEach Review Container
        feedbackItems.forEach(element => {
            const userName = element.querySelector('.user-name').textContent.trim();
            const userLocation = element.querySelector('.user-country').textContent.trim();
            const userStar = parseInt(element.querySelector('.star-view > span').getAttribute('style').split('width:')[1])/20;
            const userReview = element.querySelector('.buyer-feedback > span:first-child').textContent.trim();
            const userTime = element.querySelector('.buyer-feedback > span:last-child').textContent.trim();
            // Creating User Json Response
            const userJson = {
                name: userName,
                location: userLocation,
                star: userStar,
                review: userReview,
                time: userTime
            };
            // Pushing User Json to Feedback Array
            feedbackInfo.push(userJson);
        });
        return feedbackInfo;
    });

    // Writes fetchReviews Data to Local Json File
    fs.writeFile('./product_reviews/example.json', JSON.stringify(fetchReviews), (err) => {
        if (err) throw err;
        console.log('Saved...');
    });
    
})();