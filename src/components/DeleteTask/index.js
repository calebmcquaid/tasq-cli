const { readTaskFile } = require('../../utilities/ReadFile');

function deleteCurrentTask(taskNumber) {
    const tasks = readTaskFile();
    tasks.currentTasks.splice(taskNumber - 1, 1);
    return tasks
}

module.exports = {
    deleteCurrentTask
}