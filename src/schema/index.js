import { gql } from 'apollo-server-express';

import userSchema from './user';
import jobTemplateSchema from './jobTemplate';
import inspectionPointTemplate from './inspectionPointTemplate';

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, jobTemplateSchema, inspectionPointTemplate];