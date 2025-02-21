const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Check if user data is present
  if (!user) {
    return res.status(400).json({ error: 'Missing user data' });
  }

  // Check for required fields (e.g., name, email)
  if (!user.name || !user.email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Additional validation can be added here

  console.log(user); // Log user to check data
  res.status(201).json({ message: 'User created' });
});
app.listen(3000, () => console.log('Server listening on port 3000'));