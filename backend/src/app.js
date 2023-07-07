import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';

const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express({urlencoded: true}));

// routes
import commentRoutes from './routes/comments.routes.js';
import indexRoutes from './routes/index.routes.js';

app.use('/api/comments', commentRoutes);
app.use('/api', indexRoutes);

export default app;




