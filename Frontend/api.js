const API_URL = import.meta.env.VITE_API_URL;

import express from 'express';
import { getUsers, createUser, getUserById } from './database/queries';

const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error });
  }
});

router.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error });
  }
});

router.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await createUser(name, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

export default router;
