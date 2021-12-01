// extract beep times.
let input = process.argv.slice(2)

// EDGE CASES: 
// 0 
if (!input.length) {
  return ;
}

input = input.map(x => Number(x));
console.log(input);
for (let element of input) {
  setTimeout(() => {
    // beeps the sound and queues up them up. 
    process.stdout.write('\x07');
    // console.log(element);
  }, element * 100)
  
};