import { gql } from 'apollo-server-express';

export default gql`

input PointTemplate {
  deviceType: String!
}

input CreateJobTemplateInput {
  id: String!
  inspectionPointTemplateData: [PointTemplate!]
}

  extend type Mutation {
    createJobTemplate(
      inspectionPointTemplateData: CreateJobTemplateInput! 
    ): JobTemplate!
  }

  type JobTemplate {
    id: ID!
    inspectionPointTemplates: [InspectionPointTemplate!]
  }
  
`;