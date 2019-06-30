// Initialize the eyes SDK
const { Eyes, Target } = require('@applitools/eyes.webdriverio')

const eyes = new Eyes()

// set your private API key.
eyes.setApiKey(process.env.APPLITOOLS_API_KEY)

describe('Check Points Example', function () {

    it('Full Page Screenshot', async function () {
 
        // command to take full page screen shot
        eyes.setForceFullPageScreenshot(true); 

        // Navigate to the required url
        browser.url('https://www.wikipedia.org/')
        
        try {

            // Set chrome to fullscreen
            browser.windowHandleFullscreen();

            // Get the current size of the screen
            const viewportSize = browser.getViewportSize()

            // Start the test and set the browser's viewport size to 
            await eyes.open(browser, 'Full Page Screen Shot', 'Full Page Test Example', viewportSize);

            // Visual checkpoint #1.
            await eyes.check('Main Page', Target.window());

            // End the test.
            await eyes.close();

        } finally {

            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();
        }
    })

    it('Check Element By Selector', async function () {
        // Navigate the browser to the "hello world!" web-site.
        browser.url('https://www.wikipedia.org/')
        
        try {

            // Set chrome to fullscreen
            browser.windowHandleFullscreen();

            // Get the current size of the screen
            const viewportSize = browser.getViewportSize()

            // Start the test and set the browser's viewport size to 
            await eyes.open(browser, 'Check Element By Selector Example', 'Wiki Selector Example', viewportSize);

            // Visual checkpoint #1.
            await eyes.checkElementBySelector('#www-wikipedia-org > h1 > div > div');

            // End the test.
            await eyes.close();

        } finally {

            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();
        }
    })

    it.only('Check Frame', async function () {

        browser.url('http://the-internet.herokuapp.com/nested_frames')
        
        try {

            // Set chrome to fullscreen
            browser.windowHandleFullscreen();

            // Get the current size of the screen
            const viewportSize = browser.getViewportSize()

            // Start the test and set the browser's viewport size to 
            await eyes.open(browser, 'Check Frame Example', 'Check Bottom Frame Example', viewportSize);

            // Visual checkpoint #1.
            await eyes.checkFrame('frame-bottom');

            // End the test.
            await eyes.close();

        } finally {

            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();
        }
    })
    

})
