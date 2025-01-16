const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize("bookstore", "root", "110golfp.", {
  host: "localhost",
  dialect: "mysql",
});
connection
  .authenticate()
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    throw err;
  });
  const db={}
  db.Book=require("./books.model")(connection,DataTypes)
  db.Category=require("./category.model")(connection,DataTypes)
  db.User=require("./user.models")(connection,DataTypes)

  db.User.hasMany(db.Book)
  db.Book.belongsTo(db.User)
  db.Category.hasMany(db.Book)
  db.Book.belongsTo(db.Category)

  // connection
  // .sync({ alter: true })
  // .then(() => console.log("tables are created"))
  // .catch((err) => {
  //   throw err;
  // });
  module.exports=db
