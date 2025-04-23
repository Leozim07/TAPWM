let responses = [];

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const opinion = parseInt(document.getElementById('opinion').value);

    responses.push({ age, gender, opinion });

    calculateResults();
});

function calculateResults() {
    if (responses.length === 0) return;

    let totalAge = 0;
    let oldest = 0;
    let youngest = Infinity;
    let countPessimo = 0;
    let countOtimoBom = 0;
    let countMasculino = 0;
    let countFeminino = 0;
    let countOutros = 0;

    responses.forEach(response => {
        totalAge += response.age;
        if (response.age > oldest) oldest = response.age;
        if (response.age < youngest) youngest = response.age;

        if (response.opinion === 1) countPessimo++;
        if (response.opinion === 4 || response.opinion === 3) countOtimoBom++;

        if (response.gender === 'masculino') countMasculino++;
        if (response.gender === 'feminino') countFeminino++;
        if (response.gender === 'outros') countOutros++;
    });

    const averageAge = totalAge / responses.length;
    const percentageOtimoBom = (countOtimoBom / responses.length) * 100;

    displayResults(averageAge, oldest, youngest, countPessimo, percentageOtimoBom, countMasculino, countFeminino, countOutros);
}

function displayResults(averageAge, oldest, youngest, countPessimo, percentageOtimoBom, countMasculino, countFeminino, countOutros) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Média da idade: ${averageAge.toFixed(2)}</p>
        <p>Idade da pessoa mais velha: ${oldest}</p>
        <p>Idade da pessoa mais nova: ${youngest}</p>
        <p>Quantidade de pessoas que responderam péssimo: ${countPessimo}</p>
        <p>Porcentagem de pessoas que responderam ótimo e bom: ${percentageOtimoBom.toFixed(2)}%</p>
        <p>Número de mulheres: ${countFeminino}</p>
        <p>Número de homens: ${countMasculino}</p>
        <p>Número de outros: ${countOutros}</p>
    `;
}