# Running the Test Locally

Follow these steps to run the engagement browser test locally:

1. **Clone the Repository**  
    Ensure you have cloned the repository to your local machine:
    ```bash
    git clone git@github.com:b-dur/amplitude_engagement_browser_test.git
    cd amplitude_engagement_browser_test
    ```

2. **Install Dependencies**  
    Install the required dependencies using `npm` or `yarn`:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3. **Run the Test**  
    Execute the test script:
    ```bash
    npm test
    ```
    or
    ```bash
    yarn test
    ```

4. **View Results**  
    The console output should show that 1 test failed and 1 test passed.


The problem is an unexpected `export` token in the `@amplitude/engagement-browser` package.
