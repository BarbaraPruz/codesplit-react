# React Code Splitting Sample
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installing and running

`yarn install`
`npm start`

## Da Code

The app has a header / nav area and 2 sub pages.  Each sub page uses React-Vis (so some 'big' extra code).

The bundle is chunked by React Scripts using React.suspense and lazy loading.  See app.js.
