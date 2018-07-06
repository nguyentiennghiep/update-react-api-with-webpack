import gql from 'graphql-tag'

export default gql`
  mutation createProduct(
      $id: ID!,
      $name: String,
      $price: Int,
      $status: Boolean
    ) {
    createProduct(input: {
      id: $id, name: $name, price: $price, status: $status,
    }) {
      id
      name
      price
      status
    }
  }
`