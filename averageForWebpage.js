const grades1 = {
	Gramática: 10,
	Literatura: 9,
	Artes: 9.7,
	Biologia: 10,
	EdFísica: 10,
	Religião: 9.6,
	Filosofia: 10,
	Física: 10,
	Geografia: 10,
	História: 10,
	Espanhol: 9.6,
	Inglês: 10,
	Matemática: 9.2,
	Química: 10,
	Redação: 8.5,
	Sociologia: 9.6,
};

const grades2 = {
	Gramática: 10,
	Literatura: 9.6,
	Artes: 9.8,
	Biologia: 9.4,
	EdFísica: 8.6,
	Religião: 8.4,
	Filosofia: 10,
	Física: 10,
	Geografia: 9.6,
	História: 9,
	Espanhol: 10,
	Inglês: 8.6,
	Matemática: 9.8,
	Química: 10,
	Redação: 10,
	Sociologia: 9.9,
};

const grades3 = {
	Gramática: 8.9,
	Literatura: 9.7,
	Artes: 9.5,
	Biologia: 10,
	EdFísica: 10,
	Religião: 8.2,
	Filosofia: 9.6,
	Física: 10,
	Geografia: 9.3,
	História: 10,
	Espanhol: 8.5,
	Inglês: 8.8,
	Matemática: 9.3,
	Química: 10,
	Redação: 10,
	Sociologia: 10,
};

const grades4 = {
	Gramática: 9.2,
	Literatura: 10,
	Artes: 8.9,
	Biologia: 9.2,
	EdFísica: 10,
	Religião: 10,
	Filosofia: 9.2,
	Física: 9.7,
	Geografia: 9.5,
	História: 10,
	Espanhol: 9.5,
	Inglês: 8.8,
	Matemática: 9.5,
	Química: 9.2,
	Redação: 9,
	Sociologia: 10,
};

let annual = {
	Gramática: 0,
	Literatura: 0,
	Artes: 0,
	Biologia: 0,
	EdFísica: 0,
	Religião: 0,
	Filosofia: 0,
	Física: 0,
	Geografia: 0,
	História: 0,
	Espanhol: 0,
	Inglês: 0,
	Matemática: 0,
	Química: 0,
	Redação: 0,
	Sociologia: 0,
};

function annualCalculator() {
	let firstValues = Object.values(grades1);
	let secondValues = Object.values(grades2);
	let thirdValues = Object.values(grades3);
	let fourthValues = Object.values(grades4);
	let annualIndexes = Object.keys(annual);

	for (let i = 0; i < annualIndexes.length; i++) {
		let x = (
			(firstValues[i] + secondValues[i] + thirdValues[i] + fourthValues[i]) /
			4
		).toFixed(1);

		let key = annualIndexes[i];
		annual[key] = parseFloat(x);
	}

	return annual;
}

function findAverage(bimester, grade) {
	let sum = 0;
	let subjects = Object.keys(grades1).length;

	if (bimester <= 1 || bimester < 5) {
		let listedGrades = Object.values(grade);

		for (let i = 0; i < subjects; i++) {
			sum += listedGrades[i];
		}
	} else if (bimester == 5) {
		let annualValues = Object.values(annual);

		for (let i = 0; i < subjects; i++) {
			sum += annualValues[i];
		}
	}

	return sum / subjects;
}

// if (bimester < 5) {
// 	console.log(
// 		`\n -=-=-=-=-=-=-=-=-=-=-=-=-=-\n\n ${bimester}º Bimestre: \n\n ${Object.entries(
// 			searchFor
// 		)
// 			.join('\n ')
// 			.replace(
// 				/,/g,
// 				': '
// 			)} \n\n -=-=-=-=-=-=-=-=-=-=-=-=-=- \n\n → Média Bimestral: ${findAverage().toFixed(
// 			1
// 		)} \n\n -=-=-=-=-=-=-=-=-=-=-=-=-=- `
// 	);
// } else if (bimester == 5) {
// 	console.log(
// 		`\n -=-=-=-=-=-=-=-=-=-=-=-=-=-\n\n Média Anual por Matéria: \n\n ${Object.entries(
// 			annualCalculator()
// 		)
// 			.join('\n ')
// 			.replace(
// 				/,/g,
// 				': '
// 			)} \n\n -=-=-=-=-=-=-=-=-=-=-=-=-=- \n\n → Média Geral: ${findAverage().toFixed(
// 			1
// 		)} \n\n -=-=-=-=-=-=-=-=-=-=-=-=- `
// 	);
// }

let first = document.getElementById('bimester1');
let second = document.getElementById('bimester2');
let third = document.getElementById('bimester3');
let fourth = document.getElementById('bimester4');
let year = document.getElementById('annual');

function insertGrades(grades, bimester) {
	let bimNumber = bimester.id.substring(8);

	bimester.innerHTML += `<h2>Bimestre ${bimNumber}:</h2><hr><p>${Object.entries(
		grades
	)
		.join('</p>')
		.replace(/,/g, ': ')}<hr><h4>Média Bimestral: ${findAverage(
		bimNumber,
		grades
	).toFixed(1)}</h4>`;
}

function insertAnnualGrades() {
	annualCalculator();

	year.innerHTML = `<h3>Media anual: ${findAverage(5, annual).toFixed(
		1
	)}</h3>`;
}

window.onload = insertGrades(grades1, first);
window.onload = insertGrades(grades2, second);
window.onload = insertGrades(grades3, third);
window.onload = insertGrades(grades4, fourth);
window.onload = insertAnnualGrades();
