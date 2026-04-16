const express = require('express');
const { sortTimetable, hasConflict } = require('./timetable');

const app = express();
app.use(express.json());

app.post('/optimize', (req, res) => {
    const classes = req.body;

    const conflict = hasConflict(classes);
    const sorted = sortTimetable(classes);

    res.json({
        conflictDetected: conflict,
        optimizedTimetable: sorted
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});