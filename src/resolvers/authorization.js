import { ForbiddenError } from 'apollo-server';
import { skip, combineResolvers } from 'graphql-resolvers';

export const isAuthenticated = (parent, args, { me }) =>
    me ? skip : new ForbiddenError('Not authenticated as user.');

const isAuthedUserAdmin = (parent, args, { me }) => {
    if (me.role !== 'ADMIN') {
        new ForbiddenError('Not an admin user.');
    }
    return skip;
}

export const isAuthedAndAdmin = combineResolvers(isAuthenticated, isAuthedUserAdmin)

