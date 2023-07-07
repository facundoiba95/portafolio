import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

mongoose.connect(process.env.DB_MONGO_URI)
.then(db => console.log('Database is connected'))
.catch(err => console.error('Failed conection to database. Error: ', err));
