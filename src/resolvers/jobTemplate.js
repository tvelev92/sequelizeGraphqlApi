import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated, isAuthedAndAdmin } from './authorization';

export default {
    Query: {

    },
    Mutation: {
        createJobTemplate: combineResolvers(
            isAuthedAndAdmin,
            async (
                parent,
                { inspectionPointTemplateData },
                { models }
            ) => {
                const jobTemplate = await models.JobTemplate.create();
                const inspectionPointTemplateInput = inspectionPointTemplateData.map(point => {
                    return Object.assign({}, point, { job_template_id: jobTemplate.id })
                })
                const inspectionPointTemplates = await models.InspectionPointTemplate.bulkCreate(inspectionPointTemplateInput)
                return {
                    jobTemplate: {
                        id: jobTemplate.id,
                        inspectionPointTemplates,
                    }
                }
            }
        )
    }
}