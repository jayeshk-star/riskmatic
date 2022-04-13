if (process.env.REACT_APP_MODE === 'production') process.env.REACT_APP_MODE = 'prod';

const config = process.env.REACT_APP_MODE !== 'prod' ? require('./dev') : require('./prod');

module.exports = config;
