import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated, isAuthedAndAdmin } from './authorization';

export default {
    Mutation: {
        createFacility:
            async (
                parent,
                { facilityAddress },
                { models }
            ) => {
                const facility = await models.Facility.create({
                    facilityAddress
                });
                return facility;
            }
    }
}