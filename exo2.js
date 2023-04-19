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

const sunSetCheck = (array) => {
  
  let sunset ;
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    sunset = true;
    for (let j = i+1; j <= array.length; j++) {
      if (array[i] < array[j]) {
        sunset = false;
      } 
    }
    sunset ? resultArray.push(array[i]) : resultArray ;
  }
  return [resultArray.length,resultArray];
}
getArray();
let [result,resultArray] = sunSetCheck(data_array);
console.log(`Sujet 2 avec une complexité algorithmique de O(n²), résultat : ${result} (les nombres : ${resultArray})`);
