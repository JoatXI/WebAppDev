import express from 'express';

import Database from 'better-sqlite3';

const app = express();
const db = new Database('wadsongs.db');

app.use(express.json()); // Necessary to read and understand JSON data from the request body

app.use(express.static('public'));

// homepage/root route
app.get('/', (req, res) => {
	res.send('Hello World');
});

// time route
app.get('/time', (req, res) => {
	res.send(`There have been ${Date.now()} milliseconds since 1/1/70.`);
});

// search for Artists
app.get('/uknumberones/artist/:artist', (req, res) => {
	try {
		const stmt = db.prepare('SELECT * FROM wadsongs WHERE artist = ?');
		const results = stmt.all(req.params.artist);
		res.json(results);
	} catch(error) {
		res.status(500).json({ error: error });
	}
});

// search for song by title
app.get('/uknumberones/title/:title', (req, res) => {
	try {
		const stmt = db.prepare('SELECT * FROM wadsongs WHERE title = ?');
		const results = stmt.all(req.params.title);
		res.json(results);
	} catch(error) {
		res.status(500).json({ error: error });
	}
});

// search for song by artist and title (i.e both artsist name and song title)
app.get('/uknumberones/artistttitle/:artist/:title', (req, res) => {
	try {
		const stmt = db.prepare('SELECT * FROM wadsongs WHERE artist = ? AND title = ?');
		const results = stmt.all(req.params.artist, req.params.title)
		res.json(results);
	} catch(error) {
		res.status(500).json({ error: error });
	}
});

// search for song by id
app.get('/uknumberones/id/:id', (req, res) => {
	try {
		const stmt = db.prepare('SELECT * FROM wadsongs WHERE id = ?');
		const results = stmt.all(req.params.id);
		res.json(results);
	} catch(error) {
		res.status(500).json({ error: error });
	}
});

app.get('/uknumberones/hometown/:artist', (req, res) => {
	try {
		const stmt = db.prepare('SELECT * FROM artists WHERE name = ?');
		const result = stmt.all(req.params.artist);
		res.json(result);
	} catch(error) {
		res.status(500).json({ error: error });
	}
});

app.post('/uknumberones/:id/buy', (req, res) => {
    try {
		if(req.body.quantity == "") {
			res.status(400).json({ error: "Quantity not specified"});
		} else {
			const stmt = db.prepare('UPDATE wadsongs SET quantity=quantity-? WHERE id=?');
			const info = stmt.run(req.body.quantity, req.params.id);
			if(info.changes == 1) {
				res.json({success:1});
			} else {
				res.status(404).json({error: 'No song with that ID'});
			}			
		}
    } catch(error) {
        res.status(500).json({ error: error });
    }
});

app.delete('/uknumberones/:id', (req, res) => {
    try {
        const stmt = db.prepare('DELETE FROM wadsongs WHERE id=?');
        const info = stmt.run(req.params.id);
        if(info.changes == 1) {
            res.json({success:1});
        } else {
            res.status(404).json({error: 'No song with that ID'});
        }
    } catch(error) {
        res.status(500).json({ error: error });
    }
});

app.post('/uknumberones/add', (req, res) => {
	try {
		if (req.body.title == "" || req.body.artist == "" || req.body.year == "" || req.body.downloads == "" || req.body.price == "" || req.body.quantity == "") {
			res.status(400).json({error: 'Error Bad Request! input data is empty'});
		} else {
			const stmt = db.prepare('INSERT INTO wadsongs (title, artist, year, downloads, price, quantity) VALUES (?, ?, ?, ?, ?, ?)');
			const info = stmt.run(req.body.title, req.body.artist, req.body.year, req.body.downloads, req.body.price, req.body.quantity);
			res.json({id: info.lastInsertRowid});
		}
	} catch(error) {
		res.status(500).json({ error: error });
	}
});

app.put('/uknumberones/:id', (req, res) => {
	try {
		const stmt = db.prepare('UPDATE wadsongs SET price = ?, quantity = ? WHERE id = ?');
		const info = stmt.run(req.body.price, req.body.quantity, req.params.id);
		res.status(info.changes ? 200:404).json({success: info.changes ? true: false});
	} catch(error) {
		res.status(500).json({ error: error });
	}
});

// Starting server
app.listen(2024, () => {
	console.log('Server running on port 2024');
});