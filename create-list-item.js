(function () {
    'use strict'

    const getLsManager = () => window.manager.lsManager
    const getTasks = () => window.task.tasks

    const { createListItem } = window.listitem
    const { deleteValues } = window.otherlogic

    const appContainer = document.getElementById('app')

    
    const grabTaskData = () => {
        const titleinput = document.getElementById ('titleform')
        const title = titleinput.value
        const dateinput = document.getElementById ('dateform')
        const date = dateinput.value
        const textinput = document.getElementById ('textform')
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

        lsManager.setItem( 'tasks' , tasks)
    }

    const onAllDeleteClick = () => {
        let a = document.getElementsByClassName ( "todo-list__item" )
        console.log(a)
        console.log(a.length)
        for ( let i = a.length -1; i!==-1 ; i--){
            console.log(i)
            console.log(a[i])
            a[i].remove()
        }
        localStorage.clear()
    }

    const addbutton = document.getElementById('111')
    addbutton.addEventListener("click",onAddClick)

    const savebutton = document.getElementById('222')
    savebutton.addEventListener("click", onSaveClick )

    const deleteAllbutton = document.getElementById('333')
    deleteAllbutton.addEventListener("click", onAllDeleteClick)
    
    function Task(title, date, text) {
        this.id = Date.now()
        this.title = title
        this.date = date
        this.text = text
    }

    window.listitem.createAndRenderListItem = createAndRenderListItem

})();
