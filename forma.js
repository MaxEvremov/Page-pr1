(function() {
    const appContainer = document.getElementById('app')
    const toDoListContainer = appContainer.querySelector('.todo-list')


    const createAddDeleteButtons = () => {
        
        return {

            render (BContainer) {
                const BBar = document.createElement('div')
                BBar.classList.add('buttonsbar')

                const AButton = document.createElement('button')
                AButton.classList.add("addbutton")
                AButton.id=('123')
                BBar.appendChild(AButton)
                AButton.innerText = "Добавить"

                const DButton = document.createElement('button')
                DButton.classList.add("delbutton")
                BBar.appendChild(DButton)
                DButton.innerText = "Удалить все"

                

                BContainer.appendChild(BBar)
            }
        }
    }
    
    
    const createforma = () => {
        
        return {

            render (form) {
                const inputform = document.createElement('div')
                inputform.classList.add('inputform')

                const titleform = document.createElement('input')
                titleform.classList.add = ("titleform")
                titleform.id = ('titleform')
                inputform.appendChild(titleform)

                const dateform = document.createElement('input')
                dateform.classList.add = ('dateform')
                dateform.id = ('dateform')
                inputform.appendChild(dateform)

                const textform = document.createElement('input')
                textform.classList.add = ('textform')
                textform.id = ('textform')
                inputform.appendChild(textform)


                form.appendChild(inputform)
            }
        }
    }

    const buttons = createAddDeleteButtons()
    buttons.render(toDoListContainer)
    const form = createforma()
    form.render(toDoListContainer)

   
})()