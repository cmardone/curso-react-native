module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@/presentation': './src/presentation',
          '@/config': './src/config',
          '@/infrastructure': './src/infrastructure',
          '@/core': './src/core',
        },
      },
    ],
  ],
};
