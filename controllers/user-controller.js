const { User, Thought } = require('../models');

const UserController = {
  // 1. Get all users
  getAllUser(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // 2. Get one user by ID
  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate("thoughts")
      .populate("friends")
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User found with that ID!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  
  // 3. Create a user
  
  },

  // 4. Update user by ID
  
  },

  // 5. Delete user
 
  },

  // 6. Add friend to user's friend list
  
  },


  //Remove friend from user's friend list

};


// Export UserController
module.exports = UserController;