// FIFO

// representing a queue with arr
// We will create our on queue with linked list
// push and shift 

const queueWebpages = [];
queueWebpages.push('Google')
queueWebpages.push('Instagram')
queueWebpages.push('Youtube')

console.log(queueWebpages)

queueWebpages.shift()
queueWebpages.shift()
queueWebpages.shift()

console.log(queueWebpages)

// With unshift and pop  - this is worse because there is A need to re-index everything

queueWebpages.unshift('Google')
queueWebpages.unshift('Instagram')
queueWebpages.unshift('Youtube')


console.log(queueWebpages)

queueWebpages.pop();
queueWebpages.pop();
queueWebpages.pop();

console.log(queueWebpages)