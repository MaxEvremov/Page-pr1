(function () {
    'use strict'

    const _taskDialog = () => window.uiElements.taskDialog
    const getTasks = () => window.task.tasks
    
    
    const createListItem = (task) => {

        return {
            render(container) {
                                
                const toDoListItemElement = document.createElement('div')
                toDoListItemElement.classList.add("todo-list__item")
                toDoListItemElement.id = task.id

                const leftblock = document.createElement('div')
                leftblock.classList.add("leftblock")
                toDoListItemElement.appendChild(leftblock)
                
                const title = document.createElement('h2')
                title.classList.add("taskTitle")
                title.innerText = task.title
                leftblock.appendChild(title)

                const date = document.createElement('h3')
                date.classList.add("taskTitle")
                date.innerText = task.date
                leftblock.appendChild(date)

                const rightblock = document.createElement('div')
                rightblock.classList.add("rightblock")
                toDoListItemElement.appendChild(rightblock)

                const toDoListItemElementButton = document.createElement('button')
                toDoListItemElementButton.classList.add("todo-list__item-button")
                toDoListItemElementButton.innerText = "Открыть"
                rightblock.appendChild(toDoListItemElementButton)

                const toDoListItemElementButtonDelete = document.createElement('button')
                toDoListItemElementButtonDelete.classList.add("todo-list__item-button-delete")
                toDoListItemElementButtonDelete.innerText = "удалить элемент"
                rightblock.appendChild(toDoListItemElementButtonDelete)

                const showTaskDialog = () => {
                    const taskDialog = _taskDialog()
                    taskDialog.show()
                    taskDialog.dialogtitle(task.title)
                    taskDialog.dialogdate(task.date)
                    taskDialog.dialogtext(task.text)
                }

                const deleteElement = () => {
                    container.removeChild(toDoListItemElement)
                    id = toDoListItemElement.id
                    console.log(id)

                    findAndDeleteElement = (id) => {
                        
                        let tasks = getTasks()

                        for ( let i=0 ; i<tasks.length ; i++){

                            let values = Object.values(tasks[i])

                            for(let b=0 ; b<values.length ; b++){

                                if (+id === +values[b]){

                                    tasks.splice(i,1)
                                    
                                }
                            }
                        }
                    }

                    findAndDeleteElement(id)
                }

                toDoListItemElementButton.addEventListener("click", showTaskDialog)
                toDoListItemElementButtonDelete.addEventListener("click", deleteElement)

                container.appendChild(toDoListItemElement)
            }
        }
    }

    window.listitem.createListItem = createListItem
})()