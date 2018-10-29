const jobTemplate = (sequelize, DataTypes) => {
    const JobTemplate = sequelize.define('JobTemplate', {
        id: {
           type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDv4,
            primaryKey: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    }, { freezeTableName: true });

    JobTemplate.associate = models => {
        JobTemplate.hasMany(models.InspectionPointTemplate);
        JobTemplate.belongsTo(models.Facility);
    };
    

    


    return JobTemplate;
}

export default jobTemplate;