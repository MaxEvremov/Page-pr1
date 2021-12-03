
(function() {
    'use strict'

    const appContainer = document.getElementById('app')
    const getLsManager = () => window.manager.lsManager
    //const { taskDialog } = window.uiElements
    const { createListItem } = window.listitem
    const getTasks = () => window.task.tasks
    const { getRandomId } = window.otherlogic
    const { deleteValues } = window.otherlogic

    const grabTaskData = () => {
        const titleinput = document.getElementById('titleform')
        const title = titleinput.value
        const dateinput = document.getElementById('dateform')
        const date = dateinput.value
        const textinput = document.getElementById('textform')
        const text = textinput.value

        return {
            title,
            date,
            text
        }
    }

    const onAddClick = () => {
        const { title, date, text } = grabTaskData()
        const newtask = new Task(title, date, text)

        const tasks = getTasks()
        tasks.push(newtask)

        createAndRenderListItem(newtask)
        deleteValues()
    }

    const createAndRenderListItem = (task) => {
        const create = createListItem(task)
        create.render(appContainer)
    }

    const onSaveClick = () => {
        const lsManager = getLsManager()
        const tasks = getTasks()

        lsManager.setItem('tasks', tasks)
    }
    

    const addbutton = document.getElementById('111')
    addbutton.addEventListener("click",onAddClick)


    window.listitem.createAndRenderListItem = createAndRenderListItem

    const savebutton = document.getElementById('222')
    savebutton.addEventListener("click", onSaveClick )
    

    function Task(title, date, text) {
        this.id = Date.now()
        this.title = title
        this.date = date
        this.text = text
    }

})();
