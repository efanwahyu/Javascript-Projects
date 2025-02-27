// * run with node akbarhabiby.js _input-text_

const [, , ...inputs] = process.argv;
const input = [...inputs].join(" ");

// * Fizz-Buzz
const fizzBuzz = (min = 1, max = 100) => {
  const arr = [];
  for (let i = min; i <= max; i++) {
    let temp = [];
    if (i % 3 === 0) temp.push("Fizz");
    if (i % 5 === 0) temp.push("Buzz");
    arr.push(temp.length > 0 ? temp.join("") : i);
  }
  return arr;
};

const reverseText = (text = "") => {
  return text
    .split("")
    .map((_, i) => text[text.length - (1 + i)])
    .join("");
};

console.log("FizzBuzz =>", fizzBuzz(), "\n");
console.log("ReverseText =>", reverseText(input ? input : "Hello World"));
