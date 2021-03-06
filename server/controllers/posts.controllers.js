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

module.exports.getPost = (req, res) => {
  try {
    let query = "";
    const { author, id } = req.query;

    if (author || id) {
      if (id) {
        query = `SELECT * FROM posts WHERE id=${id}`;
      } else if (author) {
        query = `SELECT * FROM posts WHERE author='${author}'`;
      }
    } else {
      query = "SELECT * FROM posts";
    }
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

    const query = `UPDATE posts SET title='${title}', body='${body}', tags='${tags}', date_of_creation='${formattedDate()}' WHERE id = ${id} RETURNING *`;
    db.query(query, (error, result) => {
      if (error) {
        return res.status(500).json({ msg: "Error, please try later.", error });
      }
      res.status(200).json(result.rows[0]);
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
