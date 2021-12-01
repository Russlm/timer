// EXTRACT CMD LINE INSTRUCTIONS
let input = process.argv.slice(2);
 
// 0 EDGE CASE
if (!input.length) {
  return;
}
// STRING TO NUM CONVERSION
input = input.map(x => Number(x));

// NAN
input = input.filter(term => typeof term === "number");

// NEGATIVE NUM
input = input.filter(term => term > 0);

// BEEP FN
for (let element of input) {
  setTimeout(() => {
    // beeps the sound and queues up them up.
    process.stdout.write('\x07');
  }, element * 100);
  
}