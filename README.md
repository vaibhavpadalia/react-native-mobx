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

If you are using any version >=0.56 of react native then there are some changes for it. Install `@babel/plugin-proposal-decorators` instead of `babel-plugin-transform-decorators-legacy`. And then change the configuration of <b>.babelrc</b> with the following lines: <br>

`{
  "presets": ["react-native"],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
}`


There are two ways to use Mobx:
* Pass it down via Provider.
* Create a store and import it in the components where it is required.

In the first method the global state variables will be accessible with the help of props.

Eg:  <br>

`<Provider someStore={someStore}>`<br>
    `<ChildComponent />`<br>
`</Provider>`

Then make the class `@observer` where this store is to be accessed and the value of the store will be present inside the `props`, i.e. `this.props.store.property`

The second way is way simpler than the first. You simply have to import the store and then you can simply access it using the import like: <br>

`import { store } from "somestore"`

And then use the properties of the store using: `store.property`.


