import { gql, request } from "graphql-request";


const  graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
export const getDepartments =async () =>{
    const query = gql`
        query MyQuery {
  yearsConnection {
    edges {
      node {
        departements {
          drives {
            driveLink
            title
          }
          slug
          name
        }
        videos {
          videoLink
          title
        }
        currentYear
      }
    }
  }
}
    `  
    const result = await request(graphqlAPI,query) 
    return result.yearsConnection.edges
}
    
