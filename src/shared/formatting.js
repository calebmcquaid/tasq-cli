function capitlizeTasks(tasks) {
    return tasks.map((task) => {
        return task.charAt(0).toUpperCase() + task.substring(1)
    })
}

function formatTask(tasks) {
    const capitlizedTasks = capitlizeTasks(tasks)
    return Array.isArray(capitlizedTasks) ?
        capitlizedTasks.map((task, index) => {
            return `${index + 1}. ${task}\n`
        }).join('').trim('\n')
    : capitlizedTasks
}

function trimNumbers(data) {
    const removedNumbers = data.replace(/([0-9]+.\s)/g, "")
    return removedNumbers.split('\n')
}

module.exports = {
    capitlizeTasks,
    formatTask,
    trimNumbers
}