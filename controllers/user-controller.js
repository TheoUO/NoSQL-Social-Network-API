const { User, Thought } = require('../models');



module.exports = {
  // 1. Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // 2. Get one user by ID
  async getUserById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // 3. Create a user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // 4. Update a user by ID
  async updateUserById(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // 5. Delete a user by ID
  async deleteUserById(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // 6. Add a friend to a user
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // 7. Remove a friend from a user
  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
}
