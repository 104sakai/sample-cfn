exports.handler = async (event, context) => {
  // sample implement
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from sakai!'),
  };
  return response;
};