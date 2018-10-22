import express from 'express';
import cors from 'cors';
import {
  ApolloServer,
  gql,
  AuthenticationError
} from 'apollo-server-express';
import jwt from 'jsonwebtoken';
import schema from './schema';
import resolvers from './resolvers';
import models, { sequelize } from './models';

const secret = 'temp_test_secret';
const app = express();
app.use(cors());

const getMe = async (req) => {
  const token = req.headers['x-token'];
  if(token){
    try{
       return await jwt.verify(token, secret);
    }catch(e){
      debugger;
      throw new AuthenticationError(
        'Your session expired. Sign in again.',
      );
    }
  }
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async ({req}) => {
    const me = await getMe(req);
    return {
      models,
      me,
      secret,
    }
  }
});

server.applyMiddleware({ app, path: '/graphql' });

const eraseDatabaseOnSync = true;
sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createUsersWithMessages();
  }
  app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
  });
});

const createUsersWithMessages = async () => {
  await models.User.create(
    {
      username: 'testingUser',
      email: 'hello@robin.com',
      password: 'testingPassword',
      role: 'ADMIN',
    }
    //   messages: [
    //     {
    //       text: 'Published the Road to learn React',
    //     },
    //   ],
    // },
    // {
    //   include: [models.Message],
    // },
  );
};