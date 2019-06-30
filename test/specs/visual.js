// Initialize the eyes SDK
const { Eyes, Target } = require('@applitools/eyes.webdriverio')

const eyes = new Eyes()

// Set your private API key.
eyes.setApiKey(process.env.APPLITOOLS_API_KEY)

// Allows you to gather your tests into separate groupings within the same file
describe('Applitools Visual Test', function () {

// represents a single test case
    it('Page should look ok', async function () {

        // Navigate the browser to the "hello world example" web-site.
        browser.url('https://applitools.com/helloworld?diff2')

        try {

            // Set browser to fullscreen
            browser.windowHandleFullscreen();

            // Get the current size of the screen
            const viewportSize = browser.getViewportSize()

            // Start the test and set the browser's viewport size to 
            await eyes.open(browser, 'Hello World Example', 'New Visual UI Test', viewportSize);

            // Visual checkpoint #1.
            await eyes.check('Main Page', Target.window());

            // Click the "Click me!" button.
            await browser.click('button');

            // Visual checkpoint #2.
            await eyes.check('Click!', Target.window());

            // End the test.
            await eyes.close();

        } finally {

            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();

        }
    })
})

