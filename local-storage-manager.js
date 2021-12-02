(function() {
 
tasks = "tasks"

const getItem=(dataname, searchname)=>{
    dataname =  JSON.parse(localStorage.getItem(searchname))
    return dd
}

const setItem=(dataname, setmame)=>{
    dataname = JSON.stringify(localStorage.setItem(setmame,sd))
}

const createData=(setname)=>{
    data =[]
    data = JSON.stringify(localStorage.setItem(setname,data))
}

const checkData =(searchname)=>{
    if (localStorage.getItem(searchname)){
        let a = confirm("есть локальные данные, Загрузить? В случае отмены данные будут удалены")

        if(a){
        getItem(data,"tasks")
        return data
        }else{
            localStorage.clear()
        }

    }else{
        createData("tasks")
        alert("нет локальных данных, был создан массив")
        }
}
    
a = getItem("tasks")
    window.uiElmenst.getItem = getItem
    window.uiElmenst.setItem = setItem
    window.uiElmenst.checkData = checkData
    window.uiElmenst.createData = createData
})()