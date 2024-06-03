var selectElementcur = document.getElementById("currencyType");
var currBodyView = document.getElementById("currBody");

var currencies = {
  usd: 47.38,
  euro: 51.4,
  gbp: 60.41,
  cad: 34.67,
  dec: 6.88,
  noc: 4.5,
  swc: 4.46,
  swf: 51.89,
  jay: 0.3,
  sar: 12.63,
  kwd: 154.47,
  emd: 12.9,
  aud: 31.45,
  bad: 125.7,
  omr: 123.4,
  qae: 13,
  jod: 66.93,
  chy: 6.53,
};

var currenciesToArray = Object.keys(currencies);

var currenciesArNames = [
  "دولار أمريكي",
  "يورو",
  "جنيه استرليني",
  "دولار كندي",
  " كرون دنماركي",
  "كرون نرويجي",
  "كرون سويدي",
  "فرنك سويسري",
  "ين يباني",
  "ريال سعودي",
  "دينار كويتي",
  "درهم اماراتي",
  "دولار استرالي",
  "دينار بحريني",
  "ريال عماني",
  "ريال قطري",
  "دينار أردني",
  "يوان صيني",
];
if (currBodyView !== null) {
  for (let i = 0; i < currenciesArNames.length; i++) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    var keys = currenciesToArray[i];

    td1.textContent = currenciesArNames[i];
    td2.textContent = currencies[keys];

    tr.appendChild(td1);
    tr.appendChild(td2);
    currBodyView.appendChild(tr);
  }
}
if (selectElementcur !== null) {
  for (let i = 0; i < currenciesArNames.length; i++) {
    const option = document.createElement("option");
    var keys = currenciesToArray[i];

    option.value = currencies[keys];
    option.text = currenciesArNames[i];

    selectElementcur.appendChild(option);
  }

  if (tadribaSection !== null) {
    tadribaSection.addEventListener("keydown", function (event) {
      if (event.key === "d" || event.key === "D") {
        selectElementcur.value = currencies.usd;
      }
    });
  }

  if (tadribaSection !== null) {
    tadribaSection.addEventListener("keydown", function (event) {
      if (event.key === "e" || event.key === "E") {
        event.preventDefault();
        selectElementcur.value = currencies.euro;
      }
    });
  }

  if (tadribaSection !== null) {
    tadribaSection.addEventListener("keydown", function (event) {
      if (event.key === "g" || event.key === "G") {
        selectElementcur.value = currencies.gbp;
      }
    });
  }
}
function resultCur() {
  var customValueVal = Number(customValue.value);
  var selectElementVal = Number(selectElement.value);
  var perc14Val = Number(perc14.value);
  var perc5Val = Number(perc5.value);
  var perc8Val = Number(perc8.value);
  var perc10Val = Number(perc10.value);

  var customvalueres = 0;
  var customfeesres = 0;
  var perc14res = 0;
  var perc10res = 0;
  var perc8res = 0;
  var perc5res = 0;

  var customvalueres1 = 0;
  var customfeesres1 = 0;
  var perc14res1 = 0;
  var perc10res1 = 0;
  var perc8res1 = 0;
  var perc5res1 = 0;

  for (var i = 0; i < itemscounter; i++) {
    resultsValues[`customValue${i}`] = Number(
      variables[`customValue${i}`].value
    );
    resultsValues[`selectElement${i}`] = Number(
      variables[`selectElement${i}`].value
    );
    resultsValues[`perc14${i}`] = Number(variables[`perc14${i}`].value);
    resultsValues[`perc5${i}`] = Number(variables[`perc5${i}`].value);
    resultsValues[`perc8${i}`] = Number(variables[`perc8${i}`].value);
    resultsValues[`perc10${i}`] = Number(variables[`perc10${i}`].value);

    customvalueres1 =
      resultsValues[`customValue${i}`] * Number(selectElementcur.value) +
      (resultsValues[`customValue${i}`] * Number(selectElementcur.value) * 2) /
        100;
    customvalueres += customvalueres1;

    customfeesres1 =
      (customvalueres1 * resultsValues[`selectElement${i}`]) / 100;
    customfeesres += customfeesres1;

    if (resultsValues[`perc10${i}`] == 1) {
      perc10res1 = ((customfeesres1 + customvalueres1) * 10) / 100;
      perc10res += perc10res1;
    }

    if (resultsValues[`perc8${i}`] == 1) {
      perc8res1 = ((customfeesres1 + customvalueres1) * 8) / 100;
      perc8res += perc8res1;
    }
    if (resultsValues[`perc14${i}`] == 1) {
      perc14res1 =
        ((customvalueres1 + customfeesres1 + perc10res1 + perc8res1) * 14) /
        100;
      perc14res += perc14res1;
    }

    if (resultsValues[`perc5${i}`] == 1) {
      perc5res1 = ((customfeesres1 + customvalueres1 + perc14res1) * 5) / 100;
      perc5res += perc5res1;
    }
    var customvalueres1 = 0;
    var customfeesres1 = 0;
    var perc14res1 = 0;
    var perc10res1 = 0;
    var perc8res1 = 0;
    var perc5res1 = 0;
  }

  // for (var i = 0; i < itemscounter; i++) {
  //   customValueVal += Number(resultsValues[`customValue${i}`]);
  // }
  customvalueres1 =
    customValueVal * Number(selectElementcur.value) +
    (customValueVal * Number(selectElementcur.value) * 2) / 100;
  customvalueres += customvalueres1;
  customValueResult.innerHTML = customvalueres;

  customfeesres1 = (customvalueres1 * selectElementVal) / 100;
  customfeesres += customfeesres1;
  customFeesResult.innerHTML = (customfeesres + 1.1).toFixed(2);

  if (perc10Val == 1) {
    perc10res1 = ((customfeesres1 + customvalueres1) * 10) / 100;
    perc10res += perc10res1;
  }

  if (perc8Val == 1) {
    perc8res1 = ((customfeesres1 + customvalueres1) * 8) / 100;
    perc8res += perc8res1;
  }

  if (perc14Val == 1) {
    perc14res1 =
      ((customvalueres1 + customfeesres1 + perc10res1 + perc8res1) * 14) / 100;

    perc14res += perc14res1;
  }

  if (perc5Val == 1) {
    perc5res1 = ((customfeesres1 + customvalueres1 + perc14res1) * 5) / 100;
    perc5res += perc5res1;
  }

  fees10Result.innerHTML = perc10res.toFixed(2);
  fees8Result.innerHTML = perc8res.toFixed(2);
  fees14Result.innerHTML = perc14res.toFixed(2);
  fees5Result.innerHTML = perc5res.toFixed(2);
  var postalfeesres = (customfeesres + perc14res) / 100 + 20;
  postalResult.innerHTML = postalfeesres.toFixed(2);

  totalResult.innerHTML = Number(
    perc10res +
      perc8res +
      perc5res +
      perc14res +
      postalfeesres +
      (customfeesres + 1.1)
  );
  var declaredValue = document.getElementById("declaredValue");
  var customsFeesTable = document.getElementById("customsFeesTable");
  var taxAmount = document.getElementById("taxAmount");
  var postalAmount = document.getElementById("postalAmount");
  var fees8Table = document.getElementById("fees8Table");
  var devFee = document.getElementById("devFee");

  declaredValue.innerHTML = customvalueres.toFixed(2);
  customsFeesTable.innerHTML = (customfeesres + 1.1).toFixed(2);
  taxAmount.innerHTML = perc14res.toFixed(2);
  postalAmount.innerHTML = postalfeesres.toFixed(2);
  fees8Table.innerHTML = perc8res.toFixed(2);
  devFee.innerHTML = Number(perc10res + perc5res).toFixed(2);
}
