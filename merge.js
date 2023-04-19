const fs = require("fs");
const fileName = process.argv[2];
let data_array = [];
const regex = /^[-\d\s]+$/;
// Méthode synchrone
const getArray = () => {
  try {
    const data = fs.readFileSync(fileName, "utf8");
    if (!regex.test(data)) {
      throw new Error('Le fichier contient autre chose que des chiffres ! Il doit être au format "4 -5 12 22"');
    }
    data_array = data.split(" ").map(Number);
  } catch (error) {
    console.error(error.message);
  }
};

let compteur = 0;
let tri = "fusion";
const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
  const mergedArray = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    compteur++;
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  return mergedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
};

getArray();
let array = mergeSort(data_array);
console.log(`Tri à ${tri}: ${compteur} comparaisons : ${array}`);