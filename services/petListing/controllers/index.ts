import {} from "express";


implements PetListingController


// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data for users
let users = [];

// User controllers
const createUser = (req, res) => {
  const { username, email } = req.body;
  const newUser = { id: users.length + 1, username, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

const getUsers = (req, res) => {
  res.json(users);
};

// Routes
app.post('/users', createUser);
app.get('/users', getUsers);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data for users
let users = [];

// User controllers
const createUser = (req, res) => {
  const { username, email } = req.body;
  const newUser = { id: users.length + 1, username, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

const getUsers = (req, res) => {
  res.json(users);
};

// Routes
app.post('/users', createUser);
app.get('/users', getUsers);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data for users
let users = [];

// User controllers
const createUser = (req, res) => {
  const { username, email } = req.body;
  const newUser = { id: users.length + 1, username, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

const getUsers = (req, res) => {
  res.json(users);
};

// Routes
app.post('/users', createUser);
app.get('/users', getUsers);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data for users
let users = [];

// User controllers
const createUser = (req, res) => {
  const { username, email } = req.body;
  const newUser = { id: users.length + 1, username, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

const getUsers = (req, res) => {
  res.json(users);
};

// Routes
app.post('/users', createUser);
app.get('/users', getUsers);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data for users
let users = [];

// User controllers
const createUser = (req, res) => {
  const { username, email } = req.body;
  const newUser = { id: users.length + 1, username, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

const getUsers = (req, res) => {
  res.json(users);
};

// Routes
app.post('/users', createUser);
app.get('/users', getUsers);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
