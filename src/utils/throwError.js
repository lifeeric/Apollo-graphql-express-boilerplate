export default (error, message) => ({
    __typename: 'Error',
    error: error,
    message: message,
})
