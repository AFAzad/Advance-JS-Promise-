let complete = true;

let promise = new Promise(function(resolve,reject){
    if(complete){
        resolve("I m Successful");
    }else{
        reject("I m Failed");
    }
});
console.log(promise);


function prom(complete){
    return new Promise(function(resolve,reject){
        console.log("Fetcing data please wait a moment");
        setTimeout(() => {
            if(complete){
                resolve("I m Successful");
            }else{
                reject("I m Failed");
            }   
        }, 2000);
    });
}
let onfulfillment = (result) =>{
    console.log(result);

}
let onRejection = (error) =>{
    console.log(error);
}
prom(true).then(onfulfillment).catch(onRejection);
