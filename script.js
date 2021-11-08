let num = document.querySelector("#number");
let countPlus = document.querySelector("#plus");
let countMinus = document.querySelector("#minus");
let countClear = document.querySelector("#clear");
const cacheKey = "NUMBER";

if (typeof Storage !== "undefined") {
  // Code for localStorage/sessionStorage.
  // localStorage.setItem("number", "0");
  // pengecekkan apakah data sessionStorage dengan key NUMBER tersedia atau belum
  if (localStorage.getItem(cacheKey) === "undefined") {
    // Jika belum maka akan atur dengan nilai awal yakni 0
    localStorage.setItem(cacheKey, 0);
  }
  var count = localStorage.getItem(cacheKey);
  setInterval(() => {
    localStorage.setItem(cacheKey, count);
  }, 100);
} else {
  // Sorry! No Web Storage support..
}

countMinus.addEventListener("click", () => {
  num.innerHTML = --count;
});
countPlus.addEventListener("click", () => {
  num.innerHTML = ++count;
});
countClear.addEventListener("click", () => {
  count = 0;
  num.innerHTML = count;
});
