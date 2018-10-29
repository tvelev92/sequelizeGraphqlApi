const inspectionPointTemplate = (sequelize, DataTypes) => {
    const InspectionPointTemplate = sequelize.define('InspectionPointTemplate', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDv4,
            primaryKey: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        deviceType: {
            type: DataTypes.ENUM('type1', 'type2', 'type3', 'type4', 'type5', 'type6')
        },
    }, { freezeTableName: true });

    InspectionPointTemplate.associate = models => {
        InspectionPointTemplate.belongsTo(models.JobTemplate, {
            foreignKey: {
                name: 'JobTemplateId',
                field: 'job_template_id'
            }
        }
        );
    };

    return InspectionPointTemplate;
}


export default inspectionPointTemplate;