const fetchUserfromApi = (url) => {
    console.log("object")
    
    return fetch(url)
        .then(res => {
            return res.json()
        }).catch(err =>{
            console.log("err", err);
        })
        
}
export default fetchUserfromApi;