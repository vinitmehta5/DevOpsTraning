const handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "Hello from Lambda after code change!"
  };
};

export default handler;