const name = "s4-";
const limit = 3;

let start = sessionStorage.getItem("start");
console.log(start);
InitLivery();
if (start == null) {
  console.log("inited");
  InitRotateArt();
  sessionStorage.setItem("start", true);
}

function CurrRotation(newName, last) {
  let itemName = "rotateDeg";
  document.getElementById(newName).style.transform = sessionStorage.getItem(
    itemName + newName
  );
  document.getElementById(newName + "-" + last).style.transform =
    sessionStorage.getItem(itemName + newName);
}

function InitRotateArt() {
  let rotateDeg = "rotate(0deg)";
  let itemName = "rotateDeg";

  for (let i = 1; i <= limit; i += 1) {
    let newName = name + parseInt(i);
    sessionStorage.setItem(itemName + newName, rotateDeg);
  }
}

function getLast() {
  let last = sessionStorage.getItem("last");
  console.log(last, "test");
  if (last == null) {
    last = 1;
  } else {
    if (last > limit || last < 1) {
      last = limit;
    }
    last = parseInt(last);
    // document.getElementById("s4-" + last).style.display = "none";
    // document.getElementById("s4-" + last + "-" + last).style.display = "none";
  }
  return last;
}

function InitLivery() {
  let last = getLast();
  let newName = name + last;

  console.log(newName, last);
  document.getElementById(newName).style.display = "grid";
  document.getElementById(newName + "-" + last).style.display = "grid";
  CurrRotation(newName, last);

  let temp = last + 1;
  let count = 0;
  while (count < limit - 1) {
    if (temp > limit) {
      temp = 1;
    }
    let newName = name + temp;
    document.getElementById(newName).style.display = "none";
    document.getElementById(newName + "-" + temp).style.display = "none";
    CurrRotation(newName, temp);
    count += 1;
    temp += 1;
  }

  sessionStorage.setItem("last", last);
}

function ChangeLivery() {
  let last = getLast();

  last += 1;

  if (last > limit) {
    last = 1;
  }

  // let grids= [1,2,3];
  // grids.sort(() => Math.random() - 0.3);

  let newName = name + last;
  console.log(newName, last);
  document.getElementById(newName).style.display = "grid";
  document.getElementById(newName + "-" + last).style.display = "grid";

  let temp = last + 1;
  let count = 0;
  while (count < limit - 1) {
    if (temp > limit) {
      temp = 1;
    }
    let newName = name + temp;
    document.getElementById(newName).style.display = "none";
    document.getElementById(newName + "-" + temp).style.display = "none";
    count += 1;
    temp += 1;
  }

  sessionStorage.setItem("last", last);
}

function RotateArt(ifInit) {
  let last = getLast();

  let newName = name + last;
  let itemName = "rotateDeg";

  let test = false;

  let rotateDeg = sessionStorage.getItem(itemName + newName);
  console.log(rotateDeg, "deg");

  if (rotateDeg === "rotate(0deg)") {
    document.getElementById(newName).style.transform = "rotate(180deg)";
    document.getElementById(newName + "-" + last).style.transform =
      "rotate(180deg)";
    rotateDeg = "rotate(180deg)";
  } else {
    document.getElementById(newName).style.transform = "rotate(0deg)";
    document.getElementById(newName + "-" + last).style.transform =
      "rotate(0deg)";
    rotateDeg = "rotate(0deg)";
  }

  sessionStorage.setItem(itemName + newName, rotateDeg);
}
