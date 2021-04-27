import gql from "graphql-tag"

export default gql`
query articles{
	articlesConnection(where:  {status:  "published" } ) {
      values {
          id
         slug
          title
          category {
            name
          }
          image {
            url
          }
          author {
            name
            picture {
             url
            }
          }
        
      }
  }
}
`