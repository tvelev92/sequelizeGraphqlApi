import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'postgres',
  'tzvetlinvelev',
  '',
  {
    dialect: 'postgres',
  },
);

const models = {
  User: sequelize.import('./user'),
  Company: sequelize.import('./company'),
  Facility: sequelize.import('./facility'),
  InspectionPoint: sequelize.import('./inspectionPoint'),
  InspectionPointTemplate: sequelize.import('./inspectionPointTemplate'),
  JobTemplate: sequelize.import('./jobTemplate')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
