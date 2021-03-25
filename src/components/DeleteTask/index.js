const { readCurrentTaskFile } = require('../../utilities/ReadFile');

function deleteCurrentTask(taskNumber) {
    const currentTasks = readCurrentTaskFile();
    const splitTasks = currentTasks.split('\n');
    splitTasks.splice(taskNumber - 1, 1);
    return splitTasks.join('\n');
}

module.exports = {
    deleteCurrentTask
}