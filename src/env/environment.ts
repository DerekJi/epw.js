const isDevelopment = process.env.ENVIRONMENT?.toLowerCase().indexOf('lambda') >= 0 ? false : true;

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  auth: {
    urlAuthEnabled: false,
    apiKeyAuthEnabled: false,
  },
});