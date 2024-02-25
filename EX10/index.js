const changeColor = document.querySelectorAll("button");
changeColor.forEach(function (color) {
  color.style.background = "black";
  color.style.color = "white";
});

function showStudents(listStudent) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  for (let i of listStudent) {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${i.id}</td>
      <td><img src="${i.avatar}" width="100px" height="100px"></td>
      <td>${i.name}</td>
      <td>${i.score}</td>
      <td><button onclick="removeStudent(${i.id})">Remove</button></td>
    `;
    tbody.appendChild(tr);
  }
}
showStudents(students);

function scoreLowest() {
  const lowestScore = students.sort((a, b) => a.score - b.score);
  showStudents(student.filter((x) => lowestScore[0].score === x.score));
  // const tbody = document.querySelector("tbody");
  // tbody.innerHTML = "";

  // let min_score = students.reduce(function (a, b) {
  //   return a.score < b.score ? a : b;
  // });

  // const tr = document.createElement("tr");
  // tr.innerHTML = `
  //     <td>${min_score.id}</td>
  //     <td><img src="${min_score.avatar}" width="100px" height="100px"></td>
  //     <td>${min_score.name}</td>
  //     <td>${min_score.score}</td>
  //   `;
  // tbody.appendChild(tr);
}

const studentHighestScore = document.getElementById("highestScore");
studentHighestScore.onclick = highestScore;
function highestScore() {
  const highestScore = students.sort((a, b) => b.score - a.score);
  showStudents(student.filter((x) => highestScore[0].score === x.score));
  // const tbody = document.querySelector("tbody");
  // tbody.innerHTML = "";

  // let max_score = students.reduce(function (a, b) {
  //   return a.score > b.score ? a : b;
  // });

  // const tr = document.createElement("tr");
  // tr.innerHTML = `
  //     <td>${max_score.id}</td>
  //     <td><img src="${max_score.avatar}" width="100px" height="100px"></td>
  //     <td>${max_score.name}</td>
  //     <td>${max_score.score}</td>
  //   `;
  // tbody.appendChild(tr);
}

function findGoodStudent() {
  // const tbody = document.querySelector("tbody");
  // tbody.innerHTML = "";

  // for (let i of students) {
  //   if (i.score > 8) {
  //     const tr = document.createElement("tr");
  //     tr.innerHTML = `
  //         <td>${i.id}</td>
  //         <td><img src="${i.avatar}" width="100px" height="100px"></td>
  //         <td>${i.name}</td>
  //         <td>${i.score}</td>
  //       `;
  //     tbody.appendChild(tr);
  //   }
  // }
  showStudents(students.filter((x) => x.score > 8));
}

function averageMoreThanFive() {
  // const tbody = document.querySelector("tbody");
  // tbody.innerHTML = "";

  // for (let i of students) {
  //   if (i.score > 5) {
  //     const tr = document.createElement("tr");
  //     tr.innerHTML = `
  //         <td>${i.id}</td>
  //         <td><img src="${i.avatar}" width="100px" height="100px"></td>
  //         <td>${i.name}</td>
  //         <td>${i.score}</td>
  //       `;
  //     tbody.appendChild(tr);
  //   }
  // }
  showStudents(students.filter((x) => x.score > 5));
}

const studentSort = document.getElementById("sort");
studentSort.onclick = sort;
function sort() {
  students.sort((a, b) => a.score - b.score);
  // const tbody = document.querySelector("tbody");
  // tbody.innerHTML = "";

  // for (let i of students) {
  //   const tr = document.createElement("tr");
  //   tr.innerHTML = `
  //         <td>${i.id}</td>
  //         <td><img src="${i.avatar}" width="100px" height="100px"></td>
  //         <td>${i.name}</td>
  //         <td>${i.score}</td>
  //       `;
  //   tbody.appendChild(tr);
  // }
  showStudents(students);
}

const findStudents = document
  .querySelector(".search")
  .addEventListener("click", findStudent);
const searchValue = document.querySelector("#searchInput");

function findStudent() {
  const results = students.filter((student) =>
    student.name.toUpperCase().includes(searchValue.value.toUpperCase())
  );
  // const tbody = document.querySelector("tbody");
  // tbody.innerHTML = "";

  // for (let i of results) {
  //   const tr = document.createElement("tr");
  //   tr.innerHTML = `
  //         <td>${i.id}</td>
  //         <td><img src="${i.avatar}" width="100px" height="100px"></td>
  //         <td>${i.name}</td>
  //         <td>${i.score}</td>
  //       `;
  //   tbody.appendChild(tr);
  // }
  showStudents(results);
}

const showAgainStudents = document.querySelector("#searchInput");
showAgainStudents.addEventListener("change", function (event) {
  if (event.target.value === "") {
    // const tbody = document.querySelector("tbody");
    // tbody.innerHTML = "";

    // for (let i of students) {
    //   const tr = document.createElement("tr");
    //   tr.innerHTML = `
    //       <td>${i.id}</td>
    //       <td><img src="${i.avatar}" width="100px" height="100px"></td>
    //       <td>${i.name}</td>
    //       <td>${i.score}</td>
    //     `;
    //   tbody.appendChild(tr);
    // }
    showStudents(students);
  }
});

const remove = document.getElementById("removeStudent");
let student = students;

function removeStudent(idStudent) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  student = student.filter((student) => student.id !== idStudent);

  // for (let i of student) {
  //   const tr = document.createElement("tr");
  //   tr.innerHTML = `
  //         <td>${i.id}</td>
  //         <td><img src="${i.avatar}" width="100px" height="100px"></td>
  //         <td>${i.name}</td>
  //         <td>${i.score}</td>
  //         <td><button onclick="removeStudent(${i.id})">Remove</button></td>
  //       `;
  //   tbody.appendChild(tr);
  // }
  showStudents(student);
}

const detail = document
  .querySelector(".detail")
  .addEventListener("click", displayStudentDetails);

function displayStudentDetails(id) {
  const student = students.find((el) => el.id === id);
  const detailEl = document.querySelector(".detail");
  detailEl.innerHTML = `
      <img src="${student.avatar}" />
      <p>Tên: ${student.name}</p>
      <p>Điểm trung bình: ${student.score}</p>
      `;
}
