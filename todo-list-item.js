(function() {
    const appContainer = document.getElementById('app')
    const { taskDialog } = window.uiElements
 
    
    const createListItem = (task) => {

        return {
            render(container) {
                                
                const toDoListItemElement = document.createElement('div')
                toDoListItemElement.classList.add("todo-list__item")

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
                    taskDialog.show()
                    taskDialog.dialogtitle(task.title)
                    taskDialog.dialogdate(task.date)
                    taskDialog.dialogtext(task.text)
                }

                const deleteElement = () => {
                    container.removeChild(toDoListItemElement)
                    
                    console.log(`Был удалён элемент с заголовком ${title.innerText}`)
                    findelenemt = title.innerText

                    let allelements = JSON.parse(localStorage.getItem("tasks"))
                    console.log(`Список имеющихся элементов ${allelements}`)
                    let number = allelements.length 
                    console.log(`сохранено ${allelements.length} окон`)
                    
                    
                    first: for ( let i=0; i < number ; i++) {
                        let secondarray = allelements[i]
                        console.log(`Проверяем элемент под индексом ${i}`)
                        
                        let secondnumber = secondarray.length
                        console.log(secondarray.length)

                        for( let a=0; a < secondnumber ; a++){
                            console.log(`Подиндекс ${a}`)
                    
                            if (findelenemt == secondarray[a]){
                                console.log(`Элемент найден`)
                                allelements.splice(i,1)
                                console.log(`Элемент ${allelements[i]} удален`)
                                console.log(`Теперерь массив выглядит: ${allelements}`)
                                break first;

                            }
                        } 
                    }
                    
                    localStorage.setItem("tasks",JSON.stringify(allelements))
                    console.log("отгружено в локал стор")


                }

                toDoListItemElementButton.addEventListener("click", showTaskDialog)
                toDoListItemElementButtonDelete.addEventListener("click", deleteElement)
                container.appendChild(toDoListItemElement)
            }
        }
    }

    function Task(title, date, text) {
        this.title = title
        this.date = date
        this.text = text
    }
    

    

    const onAddClick = () => {
        titleinput = document.getElementById('titleform')
        const title = titleinput.value
        dateinput = document.getElementById('dateform')
        const date = dateinput.value
        textinput = document.getElementById('textform')
        const text = textinput.value

        const task = new Task(title, date, text)
        console.log(task)
        titleinput.value = null
        dateinput.value = null
        textinput.value = null

        createNewelement(task)
        



        tasks = "tasks"

        if (localStorage.getItem(tasks)){
        let datatasks = JSON.parse(localStorage.getItem(tasks))
        console.log("есть локальные данные")
        }else{
        let datatasks = []
        localStorage.setItem(tasks,JSON.stringify(datatasks))
        console.log("нет локальных данных, был создан массив")
        }

        downloaddata = JSON.parse(localStorage.getItem(tasks))
        console.log(downloaddata)
        
        let massive = [title,date,text]
        console.log("текущий массив от полей ввода данных")
        console.log(massive) 

        let uploaddata = []
        uploaddata.push (title)
        uploaddata.push (date)
        uploaddata.push (text)
        console.log("массив для добавления в json.stringify")
        console.log(uploaddata)

        downloaddata.push(uploaddata)
        console.log("общий массив для локал стор")
        console.log(downloaddata)

        localStorage.setItem(tasks,JSON.stringify(downloaddata))
        console.log("отгружено в локал стор")
        //newdatatask =[]
        //newdatatask.push = title
        //newdatatask.push = date
        //newdatatask.push = text
        //console.log(newdatatask)
        //newdatatojson = JSON.stringify(newdatatask)
        //console.log(newdatatojson)
        //localStorage.setItem(title,newdatatojson)
        
        
    }
    createNewelement=(task)=>{
        create = createListItem(task)
        create.render(appContainer)
    }
    

    window.uiElements.createListItem = createListItem;

    const addbutton = document.getElementById('123')
    addbutton.addEventListener("click",onAddClick)



})();
function Task(title, date, text) {
    this.title = title
    this.date = date
    this.text = text
}