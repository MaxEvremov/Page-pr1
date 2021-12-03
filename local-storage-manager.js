(function () {
    'use strict'

    const { createAndRenderListItem } = window.listitem

    const localStorageManager = () => {
        return{

            findAndDeleteElement (value, id) {
                value = getItem("tasks")
                for ( let i=0 ; i<value.lendth ; i++){
                    let values = Object.values(data[i])
                    for(let b=0 ; b<values.length ; b++){
                        if (id === values[b]){
                            value.splice(i,1)
                            alert(`найден объект с id ${id}`)
                        }
                    }
                }
            },                                                     
            
            getItem (name, _default) {
                const value = localStorage.getItem ( name )
                console.log ( value )
                if ( value !== null ){
                    console.log ( JSON.parse ( value ) )
                    return JSON.parse ( value )
                    
                }
                return _default
            },
        
            setItem (key, value) {
                localStorage.setItem (key, JSON.stringify ( value ) )
            },

            createNewElementsfromLS ( tasks ) {
                console.log ( tasks.length )
                for ( i = 0; i<tasks.length; i++ ) {
                    const task = tasks[i]
                    createAndRenderListItem ( task )
                    console.log ( 'создаем элементы по массиву' )
                }
            },

            createElement () {
                setItem(addElementToData(getItem("tasks"),createNewTask()),"tasks")
                
            }
        }
    }

    window.manager.lsManager = localStorageManager()
    
})()