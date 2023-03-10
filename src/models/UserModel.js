"use strict";
const { Model } = require("sequelize");
const { convertDateTimeFormat, convertDateFormat } = require("@utils/date_time_helper");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            email_id: DataTypes.STRING,
            mobile_number: DataTypes.STRING,
            password: DataTypes.STRING,
            profile:DataTypes.STRING,
            age: DataTypes.STRING,
            gender:DataTypes.STRING,
            nationality: DataTypes.STRING,
            health_issue:DataTypes.STRING,
            mental_health_issue_before: DataTypes.STRING,
            thought_of_suicide:DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
            tableName: "user_details",
            underscored: true,
            timestamps: false,
        }
    );
    return User;
};
