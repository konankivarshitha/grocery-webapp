const mongoose = require("mongoose");
// Middleware
const db = 'mongodb+srv://groceryuser:grocery123@grocery-app.bgaleto.mongodb.net/shopsmart?retryWrites=true&w=majority&appName=grocery-app';
// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017