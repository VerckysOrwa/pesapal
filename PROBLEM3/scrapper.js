const puppeteer = require('puppeteer');

(async () => {
        
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage();
    await page.goto(
      "https://pesapal.freshteam.com/jobs/-z8xM8RCgTx7/junior-developer?ft_source=LinkedIn_1000080706&ft_medium=Job%20Boards_1000074720"
    );

    const words = await page.evaluate(() => {
        const paragraphs = document.querySelector("body")
        const results = paragraphs.innerText
        const finalResults = [...new Set(results)]
        return (
            finalResults.join('')
        )
    })
    console.log("The unique words are as follows:", '\n', words);
    
    await browser.close();
    })();