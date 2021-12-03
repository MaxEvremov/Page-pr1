(function(){


    const deleteValues = ()=>{
        const titleinput = document.getElementById('titleform')
        titleinput.value = null
        const dateinput = document.getElementById('dateform')
        dateinput.value = null
        const textinput = document.getElementById('textform')
        textinput.value = null
    }

    const getRandomId = () => {
        let min = 100
        let max = 1000
        return Math.random()*(max-min)+min;
    }
window.otherlogic.deleteValues = deleteValues
window.otherlogic.getRandomId = getRandomId
})()