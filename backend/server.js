import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./db.sqlite');

// Initialize table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY,
    text TEXT,
    completed INTEGER
  )`);
});

// CRUD endpoints
app.get('/api/todos', (req, res) => {
  db.all('SELECT * FROM todos', [], (err, rows) => {
    res.json(rows.map(r => ({ ...r, completed: !!r.completed })));
  });
});

app.post('/api/todos', (req, res) => {
  const { text, completed } = req.body;
  db.run(
    `INSERT INTO todos (text, completed) VALUES (?, ?)`,
    [text, completed ? 1 : 0], function(err) {
      res.json({ id: this.lastID, text, completed });
    }
  );
});

app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  db.run(
    `UPDATE todos SET text = ?, completed = ? WHERE id = ?`,
    [text, completed ? 1 : 0, id], err => {
      res.sendStatus(204);
    }
  );
});

app.listen(port, () => console.log(`API running on http://localhost:${port}`));