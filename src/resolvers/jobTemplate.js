import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated, isAuthedAndAdmin } from './authorization';

export default {
    Mutation: {
        createJobTemplate:
            // isAuthedAndAdmin,
            async (
                parent,
                { inspectionPointTemplateData },
                { models }
            ) => {
                console.log('HEY')
                const jobTemplate = await models.JobTemplate.create();
                // const inspectionPointTemplateInput = inspectionPointTemplateData.map(point => {
                //     return Object.assign({}, point, { job_template_id: jobTemplate.id })
                // })
                // const inspectionPointTemplates = await models.InspectionPointTemplate.bulkCreate(inspectionPointTemplateInput)
                // console.debug(inspectionPointTemplates);
                // return {
                //         id: jobTemplate.id, // this should be the fk name??
                //         inspectionPointTemplates,
                // }
                return {
                    id: jobTemplate.id
                }
            }
    }
}