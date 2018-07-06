import gql from 'graphql-tag';

export default gql`
mutation deleteProduct($id: ID!) {
    deleteProduct(input : {id: $id}) {
        id
    }
}`;