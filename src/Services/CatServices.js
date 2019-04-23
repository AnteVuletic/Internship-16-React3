export const fetchCats = () =>{
    return fetch("http://localhost:3000/cats").then(response => response.json());
}
export const fetchCat = id =>{
    return fetch(`http://localhost:3000/cats/${id}`).then(response => response.json());
}
export const postCat = cat =>{
    return fetch("http://localhost:3000/cats",{
        method: "POST",
        body: JSON.stringify(cat),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response => response.json());
}
export const putCat = cat =>{
    return fetch(`http://localhost:3000/cats/${cat.id}`,{
        method: "PUT",
        body: JSON.stringify(cat),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response => response.json());
}