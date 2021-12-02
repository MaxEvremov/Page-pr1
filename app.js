(function(){
    const { createListItem } = window.uiElements
   
    const appContainer = document.getElementById('app')

    allcontentstorage={}

    const renderListItems = () => {
        const container = appContainer.querySelector('.todo-list')
    


        let elements = JSON.parse(localStorage.getItem("tasks"))
        console.log(`Список имеющихся элементов ${elements}`)
        console.log(`сохранено ${elements.length} окон`)
            
        for (let i=0; i < elements.length; i++) {
            
            element = elements[i]

            title = element[0]
            console.log(`${i+1} титульник ${title}`)
            date = element[1]
            console.log(`${i+1} дата ${date}`)
            text = element[2]
            console.log(`${i+1} текст ${text}`)
    
            const task = new Task(title, date, text)
            const taskListItem = createListItem(task)
            taskListItem.render(container)
            
        }
    } 

    renderListItems()
})()
