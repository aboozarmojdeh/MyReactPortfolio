# My React Portfolio

### [Click here](https://aboozarmojdeh.github.io/MyReactPortfolio/) to see the deployed version



How to Pushi a Create React App to Github Pages:

Add the following to package.json.

### {
###  "homepage": "https://aboozarmojdeh.github.io/MyReactPortfolio/",
###  "scripts": {
###    "deploy" : "react-scripts build && gh-pages -d build"    
###  }
### }
Comment out the following line in .gitignore.
### # build/


Push your build folder to github.

* yarn add --dev gh-pages
* yarn build
* git add build
* git commit -m "Initial commit to add build folder for gh-pages"
* git push origin master


Deploy build to gh-pages. All future deployments can start with this final step.
* yarn deploy