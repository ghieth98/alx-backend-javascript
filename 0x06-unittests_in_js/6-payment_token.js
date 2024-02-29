module.exports = (success) => success ? Promise.resolve({ data: 'Successful response from the API' }) : undefined;
