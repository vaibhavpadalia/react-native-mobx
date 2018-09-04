# Using MobX with React Native

Create a new react native project using: <br>
`react-native init mobxProject`.

Now to use MobX install the following: <br>
`npm install --save mobx` <br>
`npm install --save mobx-react`.

Use <b>4.3.1</b> for Mobx and <b>5.2.3</b> for Mobx React.

To make mobx functional you have to install <b>babel-plugin-transform-decorators-legacy</b> using: <br>

`npm i babel-plugin-transform-decorators-legacy --save-dev` <br>

Now update the <b>.babelrc</b>: <br>
`{
  "presets": ["react-native"],
  "plugins": ["transform-decorators-legacy"]
}`

There are two ways to use Mobx:
* Pass it down via Provider
* Create a store and import it in the components where it is required.

In the first method the global state variables will be accessible with the help of props.

Eg:  <br>

`<Provider someStore={someStore}>`<br>
    `<ChildComponent />`<br>
`</Provider>`


