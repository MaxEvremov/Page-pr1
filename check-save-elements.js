(function () {
    'use strict'

    const getLsManager = () => window.manager.lsManager

    const lsManager = getLsManager()

    let tasks = lsManager.getItem('tasks', [])

    window.task.tasks = tasks


    if (tasks.length !== 0){

        lsManager.createNewElementsfromLS(tasks)
        
    } 
})()