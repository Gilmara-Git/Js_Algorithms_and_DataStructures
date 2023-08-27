// lifo

// With push and pop  - this is better because there is not need to re-index anything

const stackWebPages = [];
stackWebPages.push('Google')
stackWebPages.push('Instagram')
stackWebPages.push('Youtube')

console.log(stackWebPages)

stackWebPages.pop()
stackWebPages.pop()
stackWebPages.pop()

console.log(stackWebPages)

// With unshift and shift  - this is worse because there is A need to re-index everything

stackWebPages.unshift('Google')
stackWebPages.unshift('Instagram')
stackWebPages.unshift('Youtube')


console.log(stackWebPages)

stackWebPages.shift();
stackWebPages.shift();
stackWebPages.shift();

console.log(stackWebPages)