// Code your solutions in this file
function writeCards(spy){
    for(let i = 0; i <=spy.length+1; i++){
        const arr =[]
        // arr.push(`Thank you, ${spy[0]},${spy[1]},${spy[2]}, for the wonderful surprise gift!`)
        arr.push(`Thank you, ${spy}, for the wonderful surprise gift!`)
        return arr
    }
    console.log(arr)
}
// function countDown(spy){
//     for(let j=0;j <= spy;j++)
//         console.log(j)
//     }
function countDown(){
    let num = 0
    while(num <11){
        console.log(num++)
    }
}
writeCards(["Mark","Bob","Sandra"])