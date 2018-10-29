import { gql } from 'apollo-server-express';

export default gql`

  type InspectionPointTemplate {
    id: ID!
    active: Boolean!
    deviceType: String!
  }
  
`;