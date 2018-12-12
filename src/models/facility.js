const uuidv4 = require('uuid/v4');

const facility = (sequelize, DataTypes) => {
    const Facility = sequelize.define('Facility', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
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