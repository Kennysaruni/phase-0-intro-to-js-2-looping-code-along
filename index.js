// // Code your solutions in this file
function writeCards(spy,event){
    const arr =[]
    for(let i = 0; i <spy.length; i++){
        arr.push(`Thank you, ${spy[i]}, for the wonderful ${event} gift!`)
    }
    return arr
}
function countDown(){
    let num = 0
    while(num <11){
        console.log(num++)
    }
}

