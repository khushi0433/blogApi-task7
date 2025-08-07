const express = require('express');
const router = express.Router();
const Posts = require('../models/post');
const { getAllPosts } = require('../controllers/postController');
const Database = require('../config/db');


router.post('/', async (req, res) => {
    console.log("Post /posts route hit");
    try {
        const { title, content, author} = req.body;
        const post = await Posts.create({ title, content, author });
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create post', details: error.message });
    };
});

router.get('/', async (req,res) => {
    try {
        const posts = await Posts.findAll();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve posts'});
    }
})
router.put('/:id', async (req, res) => {
    const postId = req.params.id;
    const { title, content, author } = req.body;
  
    try {
      const post = await Posts.findByPk(postId);
  
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      post.title = title;
      post.content = content;
      post.author = author;
  
      await post.save();
  
      res.status(200).json({ message: 'Post updated successfully', post });
    } catch (error) {
      console.error('Update error:', error);
      res.status(500).json({ error: 'Failed to update post' });
    }
  });
  
  // DELETE /posts/:id
  router.delete('/:id', async (req, res) => {
    const postId = req.params.id;
  
    try {
      const post = await Posts.findByPk(postId);
  
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      await post.destroy();
  
      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      console.error('Delete error:', error);
      res.status(500).json({ error: 'Failed to delete post' });
    }
  });
  
  
router.get('/', getAllPosts);

module.exports = router;