(function () {
    'use strict'

    const appContainer = document.getElementById('app')
    const toDoListContainer = appContainer.querySelector('.todo-list')

    const createButton = ( innClass, innText, id, path ) => {
        const Button = document.createElement ( 'button' )
        Button.classList.add ( innClass )
        Button.id = ( id )
        Button.innerText = innText
        path.appendChild ( Button )
    }

    const createInput = ( innclass, inntext, path ) => {
        const form = document.createElement ( 'input' )
        form.classList.add = ( innclass )
        form.id = ( 'titleform' )
        form.setAttribute ( 'placeholder', inntext )
        path.appendChild ( form )
    }

    const createAddDeleteButtons = () => {
        return {
            render ( BContainer ) {
                const BBar = document.createElement( 'div' )
                BBar.classList.add ( 'buttonsbar' )

                createButton ( "addbutton", "Добавить", "111", BBar )
                createButton ( "savebutton", "Сохранить", "222", BBar )
                createButton ( "delbutton", "Удалить всё", "333", BBar )

                BContainer.appendChild ( BBar )
            }
        }
    }
    const createInputForm = () => {
        return {
            render (form) {
                const inputform = document.createElement ( 'div' )
                inputform.classList.add ( 'inputform' )

                createInput ( "titleform", "Заголовок", inputform )
                createInput ( "dateleform", "Дата окончания", inputform )
                createInput ( "textform", "Текст", inputform )

                form.appendChild ( inputform )
            }
        }
    }

    const buttons = createAddDeleteButtons()
    buttons.render(toDoListContainer)
    const form = createInputForm()
    form.render(toDoListContainer)

   
})()