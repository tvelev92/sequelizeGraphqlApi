const facility = (sequelize, DataTypes) => {
    const Facility = sequelize.define('Facility', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDv4,
            primaryKey: true,
        },
        facilityAddress: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    }, { freezeTableName: true });

    Facility.associate = models => {
        Facility.hasMany(models.JobTemplate);
    };
    return Facility;
}

export default facility;