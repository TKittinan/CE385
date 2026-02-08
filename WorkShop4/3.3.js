const simulateAsyncOperation = (time) => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(time > 1000){
                resolve('Sucess');
            }
            else{
                reject('Err');
            }
        },time);
    });
};

const perfomAsyncTask = async () => {
    try {
        const result = await simulateAsyncOperation(6000);
        console.log(result);
    }
    catch (error) {
        console.error('Error : ',error);
    }
};

perfomAsyncTask();