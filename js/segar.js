var segarSelect = document.getElementById("segars");
var valueres = document.getElementById("value");
var num = document.getElementById("num");
var weight = document.getElementById("weight");

var valueDiv = document.getElementById("valueDiv");
var numDiv = document.getElementById("numDiv");
var weightDiv = document.getElementById("weightDiv");

function selectChange() {
  if (segarSelect.value == 0) {
    valueDiv.classList.remove("d-none");
    numDiv.classList.remove("d-none");
    weightDiv.classList.remove("d-none");
  } else if (segarSelect.value == 1) {
    valueDiv.classList.remove("d-none");
    numDiv.classList.add("d-none");
    weightDiv.classList.remove("d-none");
  } else if (segarSelect.value == 2) {
    valueDiv.classList.add("d-none");
    numDiv.classList.add("d-none");
    weightDiv.classList.add("d-none");
  }
}
function resultseg() {
  var segarsVal = Number(segarSelect.value);
  var valueVal = Number(valueres.value);
  var numVal = Number(num.value);
  var weightVal = Number(weight.value);

  var customValueres = valueVal + (valueVal * 2) / 100;

  if (segarsVal == 0) {
    var customFees = (100 / 1000) * weightVal;
    var fees14 = 0.5 * customValueres + 5.25 * numVal + 0.1 * numVal;
  } else if (segarsVal == 1) {
    var customFees = (150 / 1000) * weightVal;
    var fees14 = ((customFees + customValueres) * 200) / 100;
  }
  var postalfeesres = (customValueres + customFees) / 100 + 20;

  customValueResult.innerHTML = customValueres;

  customFeesResult.innerHTML = (customFees + 1.1).toFixed(2);

  fees14Result.innerHTML = fees14.toFixed(2);
  postalResult.innerHTML = postalfeesres.toFixed(2);
  totalResult.innerHTML = Number(fees14 + postalfeesres + (customFees + 1.1));

  declaredValue.innerHTML = customValueres.toFixed(2);
  customsFeesTable.innerHTML = (customFees + 1.1).toFixed(2);
  taxAmount.innerHTML = fees14.toFixed(2);
  postalAmount.innerHTML = postalfeesres.toFixed(2);
  fees8Table.innerHTML = 0;
  devFee.innerHTML = 0;
}
