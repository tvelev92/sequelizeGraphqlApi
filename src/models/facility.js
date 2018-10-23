const facility = (sequelize, DataTypes) => {
    const Facility = sequelize.define('facility', {
        facilityAddress: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    return Facility;
}



export default facility;