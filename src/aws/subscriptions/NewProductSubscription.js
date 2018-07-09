import gql from 'graphql-tag'

export default gql`
subscription onCreateProduct{
    onCreateProduct{
      id
      name
      price
      status
    }
  }
`