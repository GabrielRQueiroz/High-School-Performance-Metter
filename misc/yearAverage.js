const firstBim = {
   grammar: 10,
   liter: 9,
   arts: 9.7,
   biology: 10,
   physeducation: 10,
   religion: 9.6,
   philosophy: 10,
   physics: 10,
   geography: 10,
   history: 10,
   spanish: 9.6,
   english: 10,
   maths: 9.2,
   chemistry: 10,
   writing: 8.5,
   sociology: 9.6
}

const secondBim = {
   grammar: 10,
   liter: 9.6,
   arts: 9.8,
   biology: 9.4,
   physeducation: 8.6,
   religion: 8.4,
   philosophy: 10,
   physics: 10,
   geography: 9.6,
   history: 9,
   spanish: 10,
   english: 8.6,
   maths: 9.8,
   chemistry: 10,
   writing: 10,
   sociology: 9.9
}

const thirdBim = {
   grammar: 8.9,
   liter: 9.7,
   arts: 9.5,
   biology: 10,
   physeducation: 10,
   religion: 8.2,
   philosophy: 9.6,
   physics: 10,
   geography: 9.3,
   history: 10,
   spanish: 8.5,
   english: 8.8,
   maths: 9.3,
   chemistry: 10,
   writing: 10,
   sociology: 10
}

// const fourthBim = {}

function getAverage() {

   let first = 0;
   let second = 0;
   let third = 0;
   // let fourth = 0;

   let listedFirstBimester = Object.values(firstBim);
   let listedSecondBimester = Object.values(secondBim);
   let listedThirdBimester = Object.values(thirdBim);
   // let listedFourthBimester = Object.values(fourthBim);

   let i;

   for (i = 0; i < listedFirstBimester.length; i++) {
      first += listedFirstBimester[i];
   }

   for (i = 0; i < listedFirstBimester.length; i++) {
      second += listedSecondBimester[i];
   }

   for (i = 0; i < listedFirstBimester.length; i++) {
      third += listedThirdBimester[i];
   }

   let firstBimesterAverage = parseFloat((first / listedFirstBimester.length).toFixed(1));
   let secondBimesterAverage = parseFloat((second / listedSecondBimester.length).toFixed(1));
   let thirdBimesterAverage = parseFloat((third / listedThirdBimester.length).toFixed(1));

   let yearAverages = (((firstBimesterAverage+secondBimesterAverage+thirdBimesterAverage)/3)).toFixed(1);

   return `\n -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- \n
   → Primeiro Bimestre: ${firstBimesterAverage} \n 
   → Segundo Bimestre: ${secondBimesterAverage} \n
   → Terceiro Bimestre: ${thirdBimesterAverage} \n
   → Média Anual: ${yearAverages} \n\n -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`;
}

console.log(getAverage())