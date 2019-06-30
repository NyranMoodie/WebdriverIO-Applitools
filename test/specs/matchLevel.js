// Initialize the eyes SDK
const { Eyes, Target } = require('@applitools/eyes.webdriverio')

const eyes = new Eyes()

// set your private API key.
eyes.setApiKey(process.env.APPLITOOLS_API_KEY)

describe('Match Levels Example', function () {

    it('Content Match Level', async function () {
        // Navigate the browser to the "hello world!" web-site.
        browser.url('http://127.0.0.1:5500/Sample%20Site/index.html')
        
        try {

            eyes.setMatchLevel("Content");

            // Set chrome to fullscreen
            browser.windowHandleFullscreen();

            // Get the current size of the screen
            const viewportSize = browser.getViewportSize()

            // Start the test and set the browser's viewport size to 
            await eyes.open(browser, 'Content Level Example', 'Content Match Level Example', viewportSize);

            // Visual checkpoint #1.
            await eyes.check('Main Page', Target.window());

            // End the test.
            await eyes.close();

        } finally {

            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();
        }
    })

    it('Layout Match Level', async function () {
        // Navigate the browser to the "hello world!" web-site.
        browser.url('http://the-internet.herokuapp.com/dynamic_content')
        
        try {

            eyes.setMatchLevel("Layout");

            // Set chrome to fullscreen
            browser.windowHandleFullscreen();

            // Get the current size of the screen
            const viewportSize = browser.getViewportSize()

            // Start the test and set the browser's viewport size to 
            await eyes.open(browser, 'Layout Match Example', 'Layout Match Level Example', viewportSize);

            // Visual checkpoint #1.
            await eyes.check('Main Page', Target.window());

            // End the test.
            await eyes.close();

        } finally {

            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();
        }
    })


})
