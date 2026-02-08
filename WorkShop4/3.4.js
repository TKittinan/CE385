const fetchDataFromServer1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data from server 1');
    }, 2000);
});
const fetchDataFromServer2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data from server 2');
    }, 3000);
});
const fetchDataFromServer3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Data from server 3');
    }, 1000);
});

Promise.race([fetchDataFromServer1, fetchDataFromServer2, fetchDataFromServer3])
    .then((results) => {
        console.log('First promise resolved:', results);
    })
    .catch((error) => {
        console.error('First promise failed:', error);
    });

Promise.allSettled([fetchDataFromServer1, fetchDataFromServer2, fetchDataFromServer3])
    .then((results) => {
        console.log('All promises settled:', results);
    })
    .catch((error) => {
        console.error('One of the Promises failed:', error);
    });