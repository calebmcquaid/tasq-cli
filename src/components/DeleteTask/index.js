const { readCurrentTaskFile } = require('../../utilities/ReadFile');

function deleteCurrentTask(taskNumber) {
    const tasks = readCurrentTaskFile();
    tasks.currentTasks.splice(taskNumber - 1, 1);
    return tasks.currentTasks
}

module.exports = {
    deleteCurrentTask
}