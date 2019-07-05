// https://cli.vuejs.org/guide/browser-compatibility.html#browser-compatibility

module.exports = {
  // https://cli.vuejs.org/config/#babel
  presets: [
    ['@babel/preset-env', {
      "useBuiltIns": "entry" 
    }]
  ]
  // https://babeljs.io/docs/en/options#sourcetype
  // , sourceType: "unambiguous",
};
