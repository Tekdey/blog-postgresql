const { formattedDate } = require("../utils/formattedDate");
const { Pool } = require("pg");
const db = new Pool();

module.exports.createPosts = (req, res) => {
  try {
    const { title, body, tags, author } = req.body;
    const query = {
      text: "INSERT INTO posts(title, body, tags, author, date_of_creation) VALUES ($1, $2, $3, $4, $5)",
      values: [title, body, tags, author, formattedDate()],
    };
    db.query(query, (error) => {
      if (error) {
        res.status(500).json({ msg: "Error, please try later.", error });
      }
      res.status(200).send("Post created.");
    });
  } catch (error) {
    res.status(500).json({ msg: "Error, please try later.", error });
  }
};

module.exports.getAllPosts = (req, res) => {
  try {
    const query = "SELECT * FROM posts";
    db.query(query, (error, result) => {
      if (error) {
        res.status(500).json({ msg: "Error, please try later.", error });
      }
      res.status(200).json({ count: result.rowCount, posts: result.rows });
    });
  } catch (error) {
    res.status(500).json({ msg: "Error, please try later.", error });
  }
};
