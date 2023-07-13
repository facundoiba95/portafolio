import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';

const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.urlencoded({ extended:true }));
app.use(express.json())


// routes
import commentRoutes from './routes/comments.routes.js';
import indexRoutes from './routes/index.routes.js';
import projectRoutes from './routes/projects.routes.js';
import usersRoutes from './routes/users.routes.js';


app.use('/api', indexRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/users', usersRoutes);


export default app;




