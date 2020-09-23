import { PrimitivePeriod } from "./PrimitivePeriod.js";
import { TimeUnit } from "./TimeUnit.js";
import { Timeverter } from "./timeverter.js";


let timeUnits = [];
let cupsOfTeaUK = new TimeUnit(1/1157, "cup of tea drunk by the entire British population");
cupsOfTeaUK.setNamePlural("cups of tea drunk by the entire British population")
timeUnits.push(cupsOfTeaUK);

let timevertedElements = document.getElementsByClassName("tv-timeverted");
let periodClassMap = new Map([
  ["seconds", PrimitivePeriod.SECONDS],
  ["minutes", PrimitivePeriod.MINUTES],
  ["hours", PrimitivePeriod.HOURS],
  ["days", PrimitivePeriod.DAYS],
  ["workdays", PrimitivePeriod.WORK_DAYS],
  ["random", fetchRandomTimeUnit()]
]);

for (let idx = 0; idx < timevertedElements.length; idx++) {
  let elementToTimevert = timevertedElements[idx];
  let incomingTimeUnit;
  let outgoingTimeUnit;
  periodClassMap.forEach((value, key) => {
    if (elementToTimevert.classList.contains("tv-" + key)) {
      incomingTimeUnit = value;
    }
    if (elementToTimevert.classList.contains("tv-to-" + key)) {
      outgoingTimeUnit = value;
    }
  });
  let optionalToTimevert = document.getElementById("to-timevert");
  let amount = optionalToTimevert
    ? optionalToTimevert.innerHTML
    : elementToTimevert.innerHTML;
  let result = Timeverter.timevert(amount, incomingTimeUnit, outgoingTimeUnit? outgoingTimeUnit: PrimitivePeriod.SECONDS);
  elementToTimevert.innerHTML = result;
}

function fetchRandomTimeUnit(){
    return getRandElFromArr(timeUnits);
}

function getRandElFromArr(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}
