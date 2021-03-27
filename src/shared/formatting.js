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
    const trimmedData = data.trim()
    const dataWithoutNumbers = trimmedData.replace(/([0-9]+.\s)/g, "")
    return dataWithoutNumbers.split('\n')
}

function formatJsonTask(tasks) {
    const formattedTaskList = tasks.map((task) => {
        return `${task.id}. ${task.title}\n`
    })
    return formattedTaskList.join('\n')
}

module.exports = {
    capitlizeTasks,
    formatTask,
    trimNumbers,
    formatJsonTask
}