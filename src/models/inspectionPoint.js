const inspectionPoint = (sequelize, DataTypes) => {
    const InspectionPoint = sequelize.define('InspectionPoint', {
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
        reportedData: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
    }, { freezeTableName: true });

    InspectionPoint.associate = models => {
        InspectionPoint.belongsTo(models.InspectionPointTemplate);
    };

    return InspectionPoint;
}


export default inspectionPoint;