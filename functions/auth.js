exports.handler = async (event, context) => {

    const { user } = context.clientContext;
  
    console.log('User:', user);

    if (!user || !user.email) {

      console.log('Unauthorized: User is not logged in');
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Unauthorized' }),
      };
    }

    console.log('Authorized: User is logged in');
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Authorized' }),
    };
  };
  