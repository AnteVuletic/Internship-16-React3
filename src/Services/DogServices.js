export const fetchDogs = () =>{
    return fetch("http://localhost:3000/dogs").then(response => response.json());
}
export const fetchDog = id =>{
    return fetch(`http://localhost:3000/dogs/${id}`).then(response => response.json());
}
export const postDog = dog =>{
    return fetch("http://localhost:3000/dogs",{
        method: "POST",
        body: JSON.stringify(dog),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response => response.json());
}
export const putDog = dog =>{
    return fetch(`http://localhost:3000/dogs/${dog.id}`,{
        method: "PUT",
        body: JSON.stringify(dog),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response => response.json());
}
export const deleteDog = id =>{
    return fetch(`http://localhost:3000/dogs/${id}`,{
        method: "DELETE"
    }).then(response => response.json());
}