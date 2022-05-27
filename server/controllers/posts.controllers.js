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
        return res.status(500).json({ msg: "Error, please try later.", error });
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
        return res.status(500).json({ msg: "Error, please try later.", error });
      }
      res.status(200).json({ count: result.rowCount, posts: result.rows });
    });
  } catch (error) {
    res.status(500).json({ msg: "Error, please try later.", error });
  }
};

module.exports.updatePost = (req, res) => {
  try {
    const { id } = req.params;
    const { title, body, tags } = req.body;

    const query = `UPDATE posts SET title='${title}', body='${body}', tags='${tags}', date_of_creation='${formattedDate()}' WHERE id = ${id}`;
    db.query(query, (error) => {
      if (error) {
        return res.status(500).json({ msg: "Error, please try later.", error });
      }
      res.status(200).send("Post updated");
    });
  } catch (error) {
    res.status(500).json({ msg: "Error, please try later.", error });
  }
};

module.exports.deletePost = (req, res) => {
  try {
    const { id } = req.params;

    const query = `DELETE FROM posts WHERE id = ${id}`;
    db.query(query, (error) => {
      if (error) {
        return res.status(500).json({ msg: "Error, please try later.", error });
      }
      res.status(200).send("Post deleted");
    });
  } catch (error) {
    res.status(500).json({ msg: "Error, please try later.", error });
  }
};

module.exports.getPostByAuthor = (req, res) => {
  try {
    const { author } = req.params;

    const query = `SELECT * FROM posts WHERE author ILIKE '${author}'`;
    db.query(query, (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ msg: "Error, please try later.", error });
      }
      res.status(200).json({ count: result.rowCount, posts: result.rows });
    });
  } catch (error) {
    res.status(500).json({ msg: "Error, please try later.", error });
  }
};
