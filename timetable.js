function sortTimetable(classes) {
    return classes.sort((a, b) => a.startTime - b.startTime);
}

function hasConflict(classes) {
    for (let i = 0; i < classes.length - 1; i++) {
        if (classes[i].endTime > classes[i + 1].startTime) {
            return true;
        }
    }
    return false;
}

module.exports = { sortTimetable, hasConflict };