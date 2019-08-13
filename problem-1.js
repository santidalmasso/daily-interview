/* Imagine you are building a compiler. Before running any code, the compiler must check that the parentheses in the program are balanced. Every opening bracket must have a corresponding closing bracket. We can approximate this using strings. 

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. 
An input string is valid if:
    - Open brackets are closed by the same type of brackets.
    - Open brackets are closed in the correct order.
    - Note that an empty string is also considered valid. */


const validChars = {
    '(':')',
    '{':'}',
    '[':']'
}

var stack = []

function isValid(input){
    if(input.length === 0){
        return true;
    }
    for(const c in input){
        if(validChars[input[c]]){
            stack.push(validChars[input[c]])
        }else{
            if(stack.pop() != input[c]){
                return false
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid('1(()))'))
console.log(isValid('[()]{}'))
console.log(isValid('({[)]'))
console.log(isValid(''))
