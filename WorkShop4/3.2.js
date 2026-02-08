const fetchDataWithCallback = (callback) => {
    console.log("Starting async operation");

    setTimeout(() =>{
        const data = { id : 1,name : 'tex',email : 'tex@gmail.com'};
        callback(null,data);
    }, 2000);
}

fetchDataWithCallback((error,result) => {
    if(error){
        console.log("Error : ",error);
    }
    else {
        console.log("Operation complete, Result : ", result);
    }
});

console.log("Asynchronous operation started");

const fetchDataWithPromise = () => {
    return new Promise((resolve,reject) =>{
        console.log("Fetching data...");

        setTimeout(() =>{
            const data = { id : 1,name : 'text',email : 'tex@gmail.com'};
            const sucess = true;

            if (sucess){
                resolve(data);
            }
            else {
                reject("Failed to fetch data");
            }
        },2000);
    }); 
};

fetchDataWithPromise()
    .then((data) =>{
        console.log("Data fetch sucess",data);
    })
    .catch((error) =>{
        console.error("Error fetch data",data);
    });