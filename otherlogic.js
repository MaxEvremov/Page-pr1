(function () {
    'use strict'

    const deleteValues = ()=>{
        const titleinput = document.getElementById('titleform')
        titleinput.value = null
        const dateinput = document.getElementById('dateform')
        dateinput.value = null
        const textinput = document.getElementById('textform')
        textinput.value = null
    }

window.otherlogic.deleteValues = deleteValues

})()