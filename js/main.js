// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions

function traverseSurveyData() {
  // Traverse the surveyData array to:
  yesCount = 0;
  noCount = 0;
  maybeCount = 0;

  // Count the number of "Yes" responses,
  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] == "Yes") {
      yesCount++;
      // Count the number of "No" responses,
    } else if (surveyData[i] == "No") {
      noCount++;
      // Count the number of "Maybe" responses,
    } else if (surveyData[i] == "Maybe") {
      maybeCount++;
    }
  }

  // and output the results in the outputEl.
  outputEl.innerHTML = "Survey Data";
  outputEl.innerHTML += `<p>Yes Responses: ${yesCount}</p>`;
  outputEl.innerHTML += `<p>No Responses: ${noCount}</p>`;
  outputEl.innerHTML += `<p>Maybe Responses: ${maybeCount}</p>`;

  console.log(surveyData);
}

function traverseAgeData() {
  // Traverse the ageData array to:
  youthCount = 0;
  youngAdultCount = 0;
  adultCount = 0;
  elderlyCount = 0;

  // Count the number of ages under 18,
  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      youthCount++;
      // Count the number of ages between 18 and 35, inclusive
    } else if (ageData[i] >= 18 && ageData[i] <= 35) {
      youngAdultCount++;
      // Count the number of ages between 36 and 65, inclusive
    } else if (ageData[i] >= 36 && ageData[i] <= 65) {
      adultCount++;
      // Count the number of ages above 65,
    } else if (ageData[i] > 65) {
      elderlyCount++;
    }
  }

  // and output the results in the outputEl.
  outputEl.innerHTML = "Age Data";
  outputEl.innerHTML += `<p>Under 188: ${youthCount}</p>`;
  outputEl.innerHTML += `<p>18 to 35: ${youngAdultCount}</p>`;
  outputEl.innerHTML += `<p>36 to 65: ${adultCount}</p>`;
  outputEl.innerHTML += `<p>Above 65: ${elderlyCount}</p>`;

  console.log(ageData);
}

function traverseNumberData() {
  // Traverse the numberData array to:
  evenCount = 0;
  oddCount = 0;

  // Count the number of even numbers,
  for (let i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 == 0) {
      evenCount++;
      // Count the number of odd numbers,
    } else {
      oddCount++;
    }
  }

  // and output the results in the outputEl.
  outputEl.innerHTML = "Number Data";
  outputEl.innerHTML += `<p>Even: ${evenCount}</p>`;
  outputEl.innerHTML += `<p>Odd: ${oddCount}</p>`;

  console.log(numberData);
}
