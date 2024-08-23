import express from 'express';
import router from './routes/index.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'pug');

app.use('/', router);

const PORT = 3000;

app.listen(PORT, () => {
    console.log('app listeing at port', PORT);
});
