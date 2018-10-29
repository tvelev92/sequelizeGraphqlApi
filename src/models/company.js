const company = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        compantName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    }, { freezeTableName: true });


    Company.associate = models => {
        Company.hasMany(models.Facility);
    };


    return Company;
}



export default company;