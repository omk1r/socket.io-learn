import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors';

const port = 3000;
const app = express();

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello there');
});

io.on('connection', (socket) => {
  console.log('User connected', socket.id);
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
