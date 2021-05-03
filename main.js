// function convertToString(myArray){
//     let s_arr = []
//     let digit_str = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//     console.log(myArray)
//     for (let i = 0; i < myArray.length; i++){
//         let currNum = myArray[i]
//         while(currNum > 0){
//             let digit = currNum % 10
//             currNum = currNum / 10
//             s_arr.push(digit_str[digit])
//         }
//     }
//     console.log(s_arr)
// }
var myArgs = process.argv;
let s_arr = []
let digit_str = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
for (let i = 0; i < myArgs.length; i++){
    let currNum = myArgs[i]
    while(currNum > 0){
        let digit = currNum % 10
        currNum = Math.floor(currNum / 10)
        s_arr.push(digit_str[digit])
    }
    
}
console.log(s_arr)