import gql from 'graphql-tag'

export default gql`
  mutation updateProduct(
      $id: ID!,
      $name: String,
      $price: Int,
      $status: Boolean
    ) {
    updateProduct(input: {
      id: $id, name: $name, price: $price, status: $status,
    }) {
      id
      name
      price
      status
    }
  }
`