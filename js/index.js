var working = 1;
if (working == 1) {
  var tadribaSection = document.getElementById("tadriba");
  if (tadribaSection !== null) {
    var button = document.getElementById("resultBtn");

    tadribaSection.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        button.click();
      }
    });
  }
  var customValue = document.getElementById("typed_value");
  var selectElement = document.getElementById("percentageSelect");
  var perc14 = document.getElementById("perc14");
  var perc5 = document.getElementById("perc5");
  var perc8 = document.getElementById("perc8");
  var perc10 = document.getElementById("perc10");

  var customValueResult = document.getElementById("customValue");
  var customFeesResult = document.getElementById("customFees");
  var fees14Result = document.getElementById("fees14Result");
  var fees10Result = document.getElementById("fees10Result");
  var fees8Result = document.getElementById("fees8Result");
  var fees5Result = document.getElementById("fees5Result");
  var postalResult = document.getElementById("postalResult");
  var totalResult = document.getElementById("totalResult");

  if (selectElement !== null) {
    for (let i = 5; i <= 100; i += 5) {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      selectElement.appendChild(option);
    }
  }
  var itemList = 0;

  function addItem() {
    itemList++;
    display();
  }

  var newitem = document.getElementById("newitem");

  var itemscounter = 0;

  var variables = [];

  function display() {
    var cartona = "";

    for (var i = 0; i < itemList; i++) {
      var newElment = document.createElement("div");

      newitem.appendChild(newElment);

      cartona = `<div
    class="card-body"
    style="
      text-align: right;
      direction: rtl;
      color: #000;
      font-weight: bold;
      font-size: 1.3rem;
    "
  >
    <div class="form-group">
      <input
        type="number"
        id="typed_value${i}"
        name="typed_value"
        class="form-control col-md-6"
        placeholder="القيمة الجمركية للعينة"
      />
    </div>
    <div class="row">
      <div class="form-group col-md-6">
        <label class="form-label" for="percentageSelect${i}">
          النسبة المئوية
        </label>
        <select
          class="form-select"
          id="percentageSelect${i}"
          name="percenatge"
        >
          <option value="0">معفي</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="form-group col-md-6">
        <label class="form-label" for="perc14${i}"> نسبة 14 % </label>
        <select class="form-select" id="perc14${i}" name="perc14">
          <option value="0">لا</option>
          <option value="1" selected>نعم</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="form-group col-md-4">
        <label class="form-label" for="perc5${i}"> نسبة 5 % </label>
        <select class="form-select" id="perc5${i}" name="perc5">
          <option value="0" selected>لا</option>
          <option value="1">نعم</option>
        </select>
      </div>

      <div class="form-group col-md-4">
        <label class="form-label" for="perc8${i}"> نسبة 8 % </label>
        <select class="form-select" name="perc8" id="perc8${i}">
          <option value="0" selected>لا</option>
          <option value="1">نعم</option>
        </select>
      </div>

      <div class="form-group col-md-4">
        <label class="form-label" for="perc10${i}"> نسبة 10 % </label>
        <select class="form-select" name="perc10" id="perc10${i}">
          <option value="0" selected>لا</option>
          <option value="1">نعم</option>
        </select>
      </div>
    </div>
  </div>
  <hr />`;
    }
    newElment.innerHTML = cartona;
    itemscounter = i;

    for (var i = 0; i < itemscounter; i++) {
      variables[`customValue${i}`] = document.getElementById(`typed_value${i}`);
    }
    for (var index = 0; index < itemscounter; index++) {
      variables[`selectElement${index}`] = document.getElementById(
        `percentageSelect${index}`
      );
      for (let i = 5; i <= 100; i += 5) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        variables[`selectElement${index}`].appendChild(option);
      }
    }
    for (var i = 0; i < itemscounter; i++) {
      variables[`perc14${i}`] = document.getElementById(`perc14${i}`);
    }
    for (var i = 0; i < itemscounter; i++) {
      variables[`perc5${i}`] = document.getElementById(`perc5${i}`);
    }
    for (var i = 0; i < itemscounter; i++) {
      variables[`perc8${i}`] = document.getElementById(`perc8${i}`);
    }
    for (var i = 0; i < itemscounter; i++) {
      variables[`perc10${i}`] = document.getElementById(`perc10${i}`);
    }
  }

  var resultsValues = [];

  function result() {
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
        resultsValues[`customValue${i}`] +
        (resultsValues[`customValue${i}`] * 2) / 100;
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
    customvalueres1 = customValueVal + (customValueVal * 2) / 100;
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
        ((customvalueres1 + customfeesres1 + perc10res1 + perc8res1) * 14) /
        100;

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
}
