async function getAllPosts(req, res) {
    try {
      const posts = await database.query("SELECT * FROM posts");
      if (!posts.length) {
        return res.status(404).json({ message: "No posts found" });
      }

      res.status(200).json(posts);
  
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  }

  module.exports = { getAllPosts };