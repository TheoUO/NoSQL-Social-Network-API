// Import mongoose
const mongoose = require('mongoose');

// Set up default mongoose connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network-api',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});