export default `#graphql
    type Users {
        id: Int
        name: String
    }

    type Query {
        users: UserUnion
    }

    union UserUnion = Users | Error
`
