import gql from 'graphql-tag'

export default gql`
    query listProducts{
        listProducts{
            items{
                id
                name
                price
                status
            }
        }
    }
`