import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Welcome to my Elastic Search API..'));
app.use('/api', router);

app.server = app.listen(port, () => console.log(`Running on port ${port}`));

export default app;
