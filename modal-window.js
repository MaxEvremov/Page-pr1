(function () {
    'use strict'
    
    const appContainer = document.getElementById('app')


    const createDialog = () => {
        let dialogElement = null;

        return {
            show() {
                dialogElement.style.display = 'block'
            },
            hide() {
                dialogElement.style.display = 'none'
            },
            dialogtitle(title) {
                this.title=title
                titleDialog.innerText = title
            },
            dialogdate(date) {
                this.date=date
                titleDialog2.innerText = date
            },
            dialogtext(text) {
                this.text=text
                dialogtext.innerText = text
            },
            render(container) {

                dialogElement = document.createElement('div')
                dialogElement.classList.add("todo-list__Dialog-Window")
                dialogElement.style.display = 'none'

                titleDialog = document.createElement('h1')
                titleDialog.classList.add("titleDialog")
                titleDialog.innerText = "по умолчанию"
                dialogElement.appendChild(titleDialog)

                titleDialog2 = document.createElement('h2')
                titleDialog2.classList.add("titleDialog2")
                titleDialog2.innerText = "по умолчанию"
                dialogElement.appendChild(titleDialog2)

                const textwindow = document.createElement('div')
                textwindow.classList.add("textwindow")
                dialogElement.appendChild(textwindow)

                dialogtext = document.createElement('p')
                dialogtext.classList.add("text")
                dialogtext.innerText = "по умолчанию"
                textwindow.appendChild(dialogtext)

                const buttonbar = document.createElement('div')
                buttonbar.classList.add("buttonbar")
                dialogElement.appendChild(buttonbar)

                const toDoListItemElementButton1 = document.createElement('button')
                toDoListItemElementButton1.classList.add("todo-list__item-close-button")
                buttonbar.appendChild(toDoListItemElementButton1)
                toDoListItemElementButton1.innerText="Закрыть";
                toDoListItemElementButton1.addEventListener("click", this.hide)

                const toDoListItemElementButton2 = document.createElement('button')
                toDoListItemElementButton2.classList.add("todo-list__item-close-button")
                buttonbar.appendChild(toDoListItemElementButton2)
                toDoListItemElementButton2.innerText="Редактировать"

                container.appendChild(dialogElement)
            }
        }
    }

    const dialog = createDialog()
    dialog.render(appContainer)

    window.uiElements.taskDialog = dialog
})()
