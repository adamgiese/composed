module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          { loader: 'file-loader' },
        ]
      }
    ]
  }
}
