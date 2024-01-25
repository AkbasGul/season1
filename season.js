let month = +prompt("Please enter a number between 1 and 12!");
let day = +prompt("Please enter a number between 1 and 31!");
4;

if (!(month >= 1 && month <= 12) || !(day >= 1 && day <= 31)) {
  alert(
    "You entered a invalid month or day number! Please enter a number between the displayed values. ",
  );
}

if (
  (month === 12 && day >= 21) ||
  (month === 1 && day <= 31) ||
  (month === 2 && day <= 20)
) {
  document.write(`The seanson for ${month}/${day} is Winter.`);
} else if (
  (month === 2 && day >= 21) ||
  (month >= 2 && month <= 5 && day <= 31)
) {
  document.write(`The seanson for ${month}/${day} is Spring.`);
} else if (
  (month === 6 && day >= 1) ||
  (month >= 6 && month <= 9) ||
  (month === 9 && day <= 21)
) {
  document.write(`The seanson for ${month}/${day} is Summer.`);
} else if (
  (month === 9 && day >= 22) ||
  (month >= 9 && month <= 12 && day <= 20) ||
  (month === 12 && day <= 20)
)
  document.write(`The seanson for ${month}/${day} is Fall.`);
