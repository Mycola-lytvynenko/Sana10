//task 3.1
const paragraphs = [...document.querySelectorAll("#paragraphs p")];

const counts = paragraphs.map((el) => el.innerText.length);
console.log(counts);

//task 3.2
let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

function CalcAll(arr) {
  let min = arr[0];
  let max = arr[0];
  let even = 0;
  let odd = 0;
  let twodigit = 0;
  let posNum = 0;
  let negNum = 0;
  let reverseArr = [...arr].reverse();
  let sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    if (arr[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
    if (arr[i] < -9 || arr[i] > 9) {
      twodigit++;
    }
    if (arr[i] >= 0) {
      posNum++;
    } else {
      negNum++;
    }
  }

  console.log({ min }, { max }, { even }, { odd }, { twodigit }, { posNum }, { negNum }, { sortedArr }, { reverseArr });
}

CalcAll(arr);
