'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    show: DataTypes.STRING,
    linkedIn: DataTypes.STRING,
  }, {
    timestamps: false
  });
  
  student.associate = function(models) {
    // associations can be defined here
  };
  return student;
};