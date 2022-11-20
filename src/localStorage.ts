export function getUserData(key: unknown) {
 if (typeof key == "string" && typeof JSON.parse(localStorage[key]) == "object"){
    return JSON.parse(localStorage[key])
 }
}

export function getFavoritesAmount(key:unknown){
    
}