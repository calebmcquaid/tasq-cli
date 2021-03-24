const { readCurrentTaskTextFile } = require('../../utilities/ReadFile');

function deleteCurrentTask(taskNumber) {
    const currentTasks = readCurrentTaskTextFile();
    const splitTasks = currentTasks.split('\n');
    splitTasks.splice(taskNumber - 1, 1);
    return splitTasks.join('\n');
}
