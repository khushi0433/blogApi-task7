const express = require('express');
const { sequelize } = require('../config/db');
const { DataTypes } = require('sequelize');

const Posts = sequelize.define('POST', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
       allowNull: false
    },
})

module.exports = Posts;