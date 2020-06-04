function show(data) {
  console.log(data);
}

let array = ["sdf", 5, 5, 78, "sdf", 8, "sdgfs", "dssd dsf - ds854", 8547];

show(array.length);
show(array.slice(8));

let styles = new Array("Джаз", "Блюз");
styles.push("Рок-н-Ролл");
show(styles);

styles.splice(styles.length - 1, 0, "Класика");
show(styles);

// show(styles.slice(1));
// styles.shift();
show(styles.shift());

styles.unshift("Реп", "Реггі");
show(styles);

show("--------------------------------------------------------------------");
function find(arr, value) {
  let result;

  if (arr.includes(value) == true) {
    result = arr.indexOf(value);
    show(`Значення ${value} існує в масиві [${arr}] під номером ${result}`);
  } else {
    show(arr.indexOf(value));
  }
}

find(array, ["Nick"]);
find(array, "sdgfs");
show(
  "---------------------------------------------------------------------------------"
);

function filterRange(array, a, b) {
  return array.slice(a, b);
}

let a = filterRange(array, 2, 5);
show(a);

show(
  "-----------------------------------------------------------------------------------"
);

function camelize(str) {
  let array = str.split("-"); //[my, short, string]
  for (i = 1; i < array.length; i++) {
    let word = array[i]; //short
    array[i] = word[0].toUpperCase() + word.slice(1);
  }
  return array.join("");
}
show(camelize("my-short-string"));
