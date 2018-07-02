

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    about: DataTypes.TEXT,
    city: DataTypes.STRING,
    countries: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    trips: DataTypes.TEXT,
  }, {});
  Profile.associate = (models) => {
    // Profile.belongsTo(models.User);
  };
  return Profile;
};
