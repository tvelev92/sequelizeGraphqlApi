import { gql } from 'apollo-server-express';

export default gql`

input PointTemplate {
  deviceType: String!
}

 extend type Mutation {
    createJobTemplate(
      inspectionPointTemplateData: [PointTemplate!]
    ): JobTemplate!
  }

  type JobTemplate {
    id: ID!
    inspectionPointTemplates: [InspectionPointTemplate!]
  }
`;