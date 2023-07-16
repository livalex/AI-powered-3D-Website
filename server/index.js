import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

// to set up environment variables
dotenv.config();

const app = express();

// so we won't have that cross origin problem
app.use(cors());

// the max weight of the paytload
app.use(express.json({limit: '50mb'}));

// consume the new routes from dalle.routes.js
app.use("/api/v1/dalle", dalleRoutes);

// demo route
app.get('/', (req, res) => {
  res.status(200).json({message: "Hello from DALL.E"});
});

// we have to listen on a port
app.listen(8080, () => console.log('Server has started on port 8080'));