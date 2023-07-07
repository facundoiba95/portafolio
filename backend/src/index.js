import { config } from 'dotenv';
import app from './app.js'
import('./database.js')
config();

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log('Server listen to port: ', PUERTO);
});