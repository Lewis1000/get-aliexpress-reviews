const express = require('express');
const puppeteer = require('puppeteer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.use(express.static(__dirname + '/views'));
// app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.render('index');
});

app.get('/dev', (req, res) => {
    const fetchReviews = [{
        name: "userName",
        location: "userLocation",
        star: "userStar",
        review: "userReview",
        time: "userTime"
    }];
    res.render('results', {fetchReviews});
});

app.post('/reviews', (req, res) => {
    const productUrl = req.body.producturl;
    
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
    
        // Returns fetchReviews Data
        // res.render('results', {fetchReviews});
    })();
});

app.listen(port, () => {
    console.log('Server started...');
    console.log(`Listening on port ${port}`);
});