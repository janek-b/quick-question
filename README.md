# quick-question

This project is a question and answer message board build with ember. Users are able browse questions and see answers that other users have given. If a user is signed in they are able to answer questions that have been posted as well as submit questions of their own.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd quick-question`
* `npm install`
* `bower install`
* See Configuration/dependencies under Planning section below.

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Planning

1. Configuration/dependencies
  * This project uses firebase for it's database and user authentication. It requires the ember add-on _emberfire_ to communicate with firebase. The ember configuration file expects the firebase configuration to be in a `.env` file in the projects root directory. the `.env` file should look like this.
  ```
  exports.firebaseConfig = {
    apiKey: 'YOUR-FIREBASE-API-KEY',
    authDomain: 'YOUR-FIREBASE-APP.firebaseapp.com',
    databaseURL: 'https://YOUR-FIREBASE-APP.firebaseapp.com',
    storageBucket: 'YOUR-FIREBASE-APP.appspot.com'
  }
  ```

2. Specs
  * If a user is not logged in they are able to view a list of questions.
  * If a user is not logged in they are able to view a specific question with a list of answer for that question.
  * If a user is not logged in they are able to view a user profile showing all the questions that user has posted and all the answer they have given to other questions.
  * If a user is logged in they are able to post a new question.
  * If a user is logged in they are able to edit a question they have previously posted.
  * If a user is logged in they are able to delete a question they have previously posted.
  * If a user is logged in they are able to submit an answer to a question another user has posted.
  * If a user is logged in they are able to edit an answer they have previously submited.
  * If a user is logged in they are able to delete an answer they have previously submited.

3. Integration
  * routes and templates for index, question, user and question-new
  * index template includes list of questions displayed through question-tile component
  * question template includes question-details and answer-tile components as well as answer-new, answer-edit and question-edit components depending on user authentication.
  * question-new template includes question-new component. This route restricts access based on user authentication.
  * user template includes question-tile and answer-tile components.

4. UX/UI
  * use ember-paper to implement material design.
  * use liquid-fire to add animations to page elements and route transitions.

5. Polish
  * improve README


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
