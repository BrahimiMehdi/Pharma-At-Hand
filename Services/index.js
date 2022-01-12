import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getYears = async () => {
  const query = gql`
    query MyQuery {
      yearsConnection {
        edges {
          node {
            currentYear
            slug
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.yearsConnection.edges;
};
export const getDepartments = async (slug) => {
  const query = gql`
  query MyQuery($slug:String!) {
  year(where: {slug: $slug}) {
    currentYear
    departements {
      name
      slug
    
    }
    slug
    videos {
      title
      videoLink
    }
  }
}
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.year;
};
export const getDrives = async (slug) => {
  const query = gql`
  query MyQuery($slug:String!) {
  departements(where: {slug: $slug}) {
    drives{
      driveLink
      title
    }
    name
  }
}
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.departements;
};
export const getDepDetails = async () => {
  const query = gql`
  query MyQuery {
  departementsConnection {
    edges {
      node {
        name
        slug
      }
    }
  }
}
  `;
  const result = await request(graphqlAPI, query);
  return result.departementsConnection;
};
