var myArgs = process.argv.slice(2);
let s_arr = []
let digit_str = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
for (let i = 0; i < myArgs.length; i++){
    let currNum = myArgs[i]
    let num_str = ""
    while(currNum > 0){
        let digit = currNum % 10
        currNum = Math.floor(currNum / 10)
        num_str = digit_str[digit] + num_str
    }
    s_arr.push(num_str)
    
}
console.log(s_arr.join())