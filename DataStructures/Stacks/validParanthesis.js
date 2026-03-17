function isValidParanthesis(str){
    const stack = []
    const pairs = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }

    for(let i = 0; i<str.length; i++){
        let char = str[i];
        if( char == "(" || char == "[" || char == "{"){
            stack.push(char)
        }else{
            if(stack.length == 0 || stack[stack.length-1] != pairs[char]){
                return false;
            }
             stack.pop()
        }
    }
    return stack.length === 0 
}


const str = "([])"
console.log(isValidParanthesis(str))