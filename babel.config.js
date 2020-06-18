module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
<<<<<<< HEAD
  plugins: ['babel-plugin-root-import'],
  plugins: [
   [
     'babel-plugin-root-import',
     {
        root: __dirname,
        rootPathPrefix: '#/',
        rootPathSuffix: './',
    },
   ]
 ]
=======
  "plugins": [
    [
      "babel-plugin-root-import",
      {
        "rootPathPrefix": "#/",
        "rootPathSuffix": "./",
      },
    ],
  ],
>>>>>>> 1a870a224b8d6cf015ee3c881612a856731ca9e1
};
