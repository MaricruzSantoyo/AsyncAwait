async function getRandomNumber(){
    return new Promise((resolve)=>{
        setTimeout( ()=>{
            resolve(Math.random() * 100);
        }, 5000)
    });
}

async function randResult(){
    let result = await getRandomNumber()
    console.log(result)
}

randResult()
