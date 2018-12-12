import { gql } from 'apollo-server-express';

export default gql`
  extend type Mutation {
    createFacility(
        facilityAddress: String!
    ): Facility!
  }

type Facility {
    id: ID!
    uuid: ID!
    facilityAddress: String!
}
`;