import { config } from 'dotenv';
import app from './app.js'
import('./database.js')
import ('./libs/initialSetup.js');
config();

const PUERTO = process.env.PORT;

app.listen(PUERTO, () => {
    console.log('Server listen to port: ', PUERTO);
});