export function saveToLocal(key, value){
    localStorage.setItem(key,JSON.stringify(value));
}

export function loadFromLocal(key){
    try{
        return JSON.parse(localStorage.getItem(key))
    }catch(error){
        console.error(error.message);
    }
    }