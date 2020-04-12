export default class BookController {
    constructor(client) {
        this.client = client;
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.update = this.update.bind(this);
    }

    async create(req, res) {
        const { author, genre, title } = req.body;

        if (!author || !title || !genre) {
            return res.status(400).json({
                message: 'Author, genre and title are required!'
            });
        }

        await this.client.index({
            index: 'my-books',
            body: {
                author: author,
                genre: genre,
                title: title
            }
        }, (err, response) => {
            if (err) {
                console.warn(err);
                return res.status(500).json(err);
            }

            return res.status(201).json(response);
        });
    }

    async delete(req, res) {
        await this.client.delete({
            index: 'my-books',
            id: req.params.bookId
        }, (err, response) => {
            if (err) {
                return res.status(500).json(err);
            }
    
            return res.status(200).json(response);
        });
    }

    async getAll(req, res) {
        await this.client.search({
            index: 'my-books',
            q: req.query.q
        }, (err, response) => {
            if (err) {
                return res.status(500).json(err);
            }

            return res.status(200).json(response.hits.hits);
        });
    }

    async getById(req, res) {
        const { bookId } = req.params;

        if (!bookId) {
            return res.status(400).json({
                message: 'BookId invalid!'
            });
        }

        await this.client.get({
            index: 'my-books',
            id: bookId
        }, (err, response) => {
            if (err) {
                return res.status(500).json(err);
            }

            return res.status(200).json(response);
        });
    }

    async update(req, res) {
        if (!req.body) {
            return res.status(400).json({
                message: 'Body invalid!'
            });
        }

        await this.client.update({
            index: 'my-books',
            id: req.params.bookId,
            body: {
                doc: req.body
            }
        }, (err, response) => {
            if (err) {
                return res.status(500).json(err);
            }

            return res.status(200).json(response);
        });
    }
}
