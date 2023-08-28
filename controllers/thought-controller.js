const {Thought, User, Reaction} = require('../models');
const {Types} = require('mongoose');

const thoughtController = {
    // Get all thoughts
    async getAllThought(req, res) {
        try {
            const thoughts = await Thought.find({});
            res.status(200).json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get a single thought
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtid});
            if (!thought) {
                res.status(404).json({message: 'No thought with that ID'});
            } else {
                res.status(200).json(thought);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Create a thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete({_id: req.params.thoughtid});
                res.status(200).json(thought);
            } catch (err) {
                res.status(500).json(err);
            }
    },

    // Update a thought by id
    async updateThoughtById(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate({_id: req.params.thoughtid}, req.body, {new: true});
            if (!thought) {
                res.status(404).json({message: 'No thought with that ID'});
            } else {
                res.status(200).json(thought);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Create a reaction
    async createReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtid},
                {$addToSet: {reactions: req.body}},
                {runValidators: true, new: true}
            );
            thought ? res.status(200).json(thought) : res.status(404).json({message: 'No thought with that ID'});
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete a reaction
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtid},
                {$pull: {reactions: {_id: req.params.reactionid}}},
                {runValidators: true, new: true}
            );
            thought ? res.status(200).json(thought) : res.status(404).json({message: 'No thought with that ID'});
        } catch (err) {
            res.status(500).json(err);
        }
    },

};


// Export
module.exports = thoughtController;

