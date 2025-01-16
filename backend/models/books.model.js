module.exports = (connection, DataTypes) => {
    const Book = connection.define(
      "Book",
      {
        author: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          trending: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
          },
          coverImage: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          Price: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
          createdAt: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        }
    );
    return Book;
  };