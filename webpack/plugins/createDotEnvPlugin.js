const DotEnv = require('dotenv-webpack');

const createDotEnvPlugin = (options = {}) => {
  const config = Object.assign(
    {
      path: './.env',
    },
    options
  );
  return new DotEnv(config);
};

module.exports = createDotEnvPlugin;
