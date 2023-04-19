const fs = require("fs");
const fileName = process.argv[2];
let data_array = [];
let k = 0;
if (process.argv[3]) { k = process.argv[3] };
console.log(`k vaut : ${k}`);
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

const addCheck = (array) => {
  let result = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j <= array.length; j++) {
      
      if ((array[i] + array[j]) == k) {
        result = true;
        return result;
      }
    }
  }
  return result;
}
getArray();
let result = addCheck(data_array);
console.log(`Sujet 1 avec une complexité algorithmique de O(n²) (k est 0 par défaut mais on peut "node exo1.js list.txt 12"), résultat : ${result}`);
