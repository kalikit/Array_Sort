var a = document.querySelector("#container");
var reload = document.querySelector("#button");
var listString = document.querySelector("#listString");
var bubblesort = document.querySelector("#bubble_sort");
var selectsort = document.querySelector("#select_sort");
var insertsort = document.querySelector("#insert_sort");
var mergesort = document.querySelector("#merge_sort");
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var charactersLength = characters.length;
//-----------------Lay random cac ki tu A - Z, a-z ------------------------------------------------
function getRandom() {
  return characters.charAt(Math.floor(Math.random() * charactersLength));
}
//-----------------Lay random chuoi tu 1 -> 5 ki tu -----------------------------------------------
function getRandomString() {
  let length = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  let result = "";
  for (let i = 0; i < length; i++) {
    result += getRandom();
  }
  return result;
}
//------------------Tao mang chua 1000 phan tu ----------------------------------------------------
var arr = [];
for (let i = 0; i < 1000; i++) {
  arr.push(getRandomString());
}
console.log(arr);
listString.innerHTML = arr;
//-------------------------------------------------------------------------------------------------

//--------------------------- 1 - Sap xep noi bot -------------------------------------------------
function bubbleSort(array) {
  var size = array.length;
  for (var i = 0; i < size - 1; i++) {
    for (var j = 0; j < size - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
  bubblesort.innerHTML = array;
}
var t0 = performance.now();
bubbleSort(arr);
var t1 = performance.now();
console.log("Time run: " + (t1 - t0) + " milliseconds.");
document.write("Thời gian sắp xếp nổi bọt: " + (t1 - t0) + " milliseconds.<br>");

//--------------------------- 2 - Sap xep chon ----------------------------------------------------

function selectionSort(array) {
  var size = array.length;
  for (var i = 0; i < size - 1; i++) {
    var min = i;
    for (var j = i + 1; j < size; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  console.log(array);
  selectsort.innerHTML = array;
}
var t2 = performance.now();
selectionSort(arr);
var t3 = performance.now();
console.log("Time run: " + (t3 - t2) + " milliseconds.");
document.write("Thời gian sắp xếp chọn: " + (t3 - t2) + " milliseconds.<br>");

//--------------------------- 3 - Sap xep chen ----------------------------------------------------

function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    var j = i - 1;
    while (j >= 0 && key < array[j]) {
      array[j + 1] = array[j];
      --j;
    }
    array[j + 1] = key;
  }
  console.log(array);
  insertsort.innerHTML = array;
}
var t4 = performance.now();
insertSort(arr);
var t5 = performance.now();
console.log("Time run: " + (t5 - t4) + " milliseconds.");
document.write("Thời gian sắp xếp chèn: " + (t5 - t4) + " milliseconds.<br>");

//--------------------------- 4 - Sap xep tron ----------------------------------------------------

function mergeSort(array) {
    if (array.length > 1) {
        const { length } = array;
        const middle = Math.floor(length / 2);
        const left = mergeSort(array.slice(0, middle));
        const right = mergeSort(array.slice(middle, length));
        array = merge(left, right);
    }
    return array;

 console.log(array);
  selectsort.innerHTML = array;
}
var t6 = performance.now();
mergeSort(arr);
var t7 = performance.now();
console.log("Time run: " + (t7 - t6) + " milliseconds.");
document.write("Thời gian sắp xếp trộn: " + (t7 - t6) + " milliseconds.<br>");

function merge(left, right) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        result.push(compare(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]);
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

//-------------------------- Reload page ----------------------------------------------------------
function reloadPage(){
    location.reload();
}
reload.addEventListener("click", reloadPage);
