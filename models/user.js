const { sequelize } = require('../config/db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'users',
  timestamps: true
});

// Static methods for backward compatibility
User.getAllUsers = async () => {
  return await User.findAll();
};

User.getUserById = async (id) => {
  return await User.findByPk(id);
};

User.createUser = async (userData) => {
  return await User.create(userData);
};

User.updateUser = async (id, userData) => {
  const user = await User.findByPk(id);
  if (!user) return null;
  return await user.update(userData);
};

User.deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return null;
  return await user.destroy();
};

module.exports = User;
