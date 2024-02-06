import express from 'express';
import Database from 'better-sqlite3'

const app = express();

// Initialise the Database
const db = new Database("wadsongs.db");

// Creates the "Home page" or "root" page (aka the default page)
app.get('/', (req, res) => {
  res.send('Hello new User!');
});

// gets the current time (in seconds since January 1, 1970)
app.get('/time', (req, res) => {
    res.send(`The number of milliseconds since January 1, 1970 is: ${Date.now()}`);
});

// Searches for all songs by a given artist
app.get('/uknumberones/artist/:artist', (req, res) => {
	try {
		const stmt = db.prepare("SELECT * FROM wadsongs WHERE artist=?");
		const results = stmt.all(req.params.artist);
		res.json(results);
	} catch (erroe) {
		res.status(500).json({ error: error});
	}
});

// Searches for all songs with a given title
app.get('/uknumberones/title/:title', (req, res) => {
	try {
		const stmt = db.prepare("SELECT * FROM wadsongs WHERE title=?");
		const results = stmt.all(req.params.title);
		res.json(results);
	} catch (erroe) {
		res.status(500).json({ error: error});
	}
});

// Searches for all songs by with a given title by a specific artist
app.get('/uknumberones/titleartist/:title/:artist', (req, res) => {
	try {
		const stmt = db.prepare("SELECT * FROM wadsongs WHERE title=? AND artist=?");
		const results = stmt.all(req.params.title, req.params.artist);
		res.json(results);
	} catch (erroe) {
		res.status(500).json({ error: error});
	}
});

// Searches for all songs with a given ID
app.get('/uknumberones/id/:id', (req, res) => {
	try {
		const stmt = db.prepare("SELECT * FROM wadsongs WHERE id=?");
		const results = stmt.all(req.params.id);
		res.json(results);
	} catch (erroe) {
		res.status(500).json({ error: error});
	}
});

// Deletes a song with a given ID
app.delete('/uknumberones/id/:id', (req, res) => {
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

// Buys a copy of a song with a given ID
app.post('/uknumberones/:id/buy', (req, res) => {
    try {
        const stmt = db.prepare('UPDATE wadsongs SET quantity=quantity-1 WHERE id=?');
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

app.put('/uknumberones/id/:id', (req, res) => {
    try {
        const stmt = db.prepare('UPDATE wadsongs SET quantity=?, price=? WHERE id=?');
        const info = stmt.run(req.body.quantity, req.body.price, req.params.id);
        res.status(info.changes ? 200:404).json({success: info.changes ? true: false});
    } catch(error) {
        res.status(500).json({error: error});
    }
});

// Starts the server
app.listen(3000, () => {
  console.log('Server started on port 3000!');
});
