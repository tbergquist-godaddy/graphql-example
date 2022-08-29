module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: './src',
  language: 'typescript',
  schema: './schema.graphql',
  exclude: ['**/node_modules/**', '**/__generated__/**'],
  artifactDirectory: './src/__generated__',
};
