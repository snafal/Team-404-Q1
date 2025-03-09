require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@imasha.ghgeg.mongodb.net/?retryWrites=true&w=majority&appName=imasha`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Database: project1");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
connectDB(); 


const database = client.db("project1");  
const userCollection = database.collection("user");  


app.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;

        let userExists = await userCollection.findOne({ username });
        if (userExists) return res.status(400).json({ message: "Username already exists" });

        let hashedPassword = await bcrypt.hash(password, 10);
        let newUser = { username, password: hashedPassword };

        await userCollection.insertOne(newUser);
        res.status(201).json({ message: "Signup successful" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
app.post("/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await userCollection.findOne({ username });
  
      if (!user) {
        return res.status(400).json({ message: "Username does not exist" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Incorrect password" });
      }
  
      res.status(200).json({ message: "Login successful", username: user.username });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });


const PORT =  5500;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
