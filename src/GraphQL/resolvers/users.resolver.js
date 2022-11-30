import throwError from '../../utils/throwError.js'

export default {
    Query: {
        users: () => throwError(true, 'you have no data.'),
    },
}

const users = [
    {
        id: 1,
        name: 'Eric',
    },
    {
        id: 2,
        name: 'John',
    },
]
