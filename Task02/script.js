//task 2
let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;
let newString = `${text[12]}${text[6]}${text[18]}${text[25]}`;
let lowerString = text.toLowerCase();
console.log(newString);
console.log(lowerString);
let pos = 0;
const target = "in";
while (true) {
  let foundPos = text.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`Знайдено ${target} тут: ${foundPos}`);
  pos = foundPos + 1;
}

const splitedString = text.split(" ");
console.log(splitedString);

let reversedText = text.split("").reverse().join("");
console.log(reversedText);

function ucFirst(txt) {
  let newTxt = txt[0].toUpperCase() + txt.slice(1);
  return newTxt;
}
console.log(ucFirst("some text"));
