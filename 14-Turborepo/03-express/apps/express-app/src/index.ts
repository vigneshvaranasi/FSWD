import express from 'express';
const app = express();
import { username, BACKEND_URL } from '@repo/common/config';

app.get('/', (req, res) => {
  res.send(
    {
        message: 'Hello, World!',
        user: username,
        backendUrl: BACKEND_URL
    }
  );
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});