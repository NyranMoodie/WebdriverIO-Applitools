// Initialize the eyes SDK
const { Eyes, Target } = require('@applitools/eyes.webdriverio')

const eyes = new Eyes()

// set your private API key.
eyes.setApiKey(process.env.APPLITOOLS_API_KEY)

describe('View Port', function () {
    
    it('Page should look ok', async function () {
        
        // Navigate the browser to the "hello world!" web-site.
        browser.url('https://applitools.com/helloworld')

        try {
            // Start the test and set the browser's viewport size to 
            await eyes.open(browser, 'Viewport Example', 'Mobile', { width: 375, height:  812});

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
