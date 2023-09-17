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



































// const UserController = {
//   // 1. Get all users
//   getAllUser(req, res) {
//     User.find({})
//       .then((user) => res.json(user))
//       .catch((err) => res.status(500).json(err));
//   },

//   // 2. Get one user by ID
//   getUserById(req, res) {
//     User.findOne({ _id: req.params.userId })
//       .populate("thoughts")
//       .populate("friends")
//       .select("-__v")
//       .then((user) =>
//         !user
//           ? res.status(404).json({ message: "No User found with that ID!" })
//           : res.json(user)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
  
//   // 3. Create a user
//   createUser(req, res) {
//     User.create(req.body)
//       .then((user) => res.json(user))
//       .catch((err) => {
//         console.log(err);
//         return res.status(500).json(err);
//       });
//   },

//   // 4. Update user by ID
    
//   },

//   // 5. Delete user
 
//   },

//   // 6. Add friend to user's friend list
  
//   },


//   //Remove friend from user's friend list

// };


// // Export UserController
// module.exports = UserController;