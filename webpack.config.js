module.exports = {
    //...
    devServer: {
      allowedHosts: [
        process.env.REACT_APP_SERVICE_SERVER_HOST,
      ],
    },
  };