const company = (sequelize, DataTypes) => {
    const Company = sequelize.define('company', {
        compantName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });


    Company.associate = models => {
        Company.hasMany(models.Facility, { onDelete: 'CASCADE' });
    };


    return Company;
}



export default company;