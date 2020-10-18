const puppeteer = require('puppeteer');

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

    console.log(getPageData);
})();