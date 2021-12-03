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
                AButton.id=('111')
                BBar.appendChild(AButton)
                AButton.innerText = "Добавить"

                const SButton = document.createElement('button')
                SButton.classList.add("savebutton")
                SButton.id=('222')
                BBar.appendChild(SButton)
                SButton.innerText = "Сохранить"

                const DButton = document.createElement('button')
                DButton.classList.add("delbutton")
                DButton.id=('333')
                BBar.appendChild(DButton)
                DButton.innerText = "Удалить всё"


                BContainer.appendChild(BBar)
            }
        }
    }
    const createInputForm = () => {
        
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
    const form = createInputForm()
    form.render(toDoListContainer)

   
})()