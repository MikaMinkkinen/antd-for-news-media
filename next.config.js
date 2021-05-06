const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // images
  images: {
    domains: ['source.unsplash.com'],
  },
  // optional
  // modifyVars: { '@primary-color': '#000' },
  // optional
  lessVarsFilePath: './styles/antd.less',
  // optional
  // lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },
});
