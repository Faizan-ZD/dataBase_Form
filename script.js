let id = "faizu";
// localStorage.clear();
selecData();
function manageData() {
  document.getElementById("msg").innerHTML = "";
  let name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("msg").innerHTML = "please enter your name ";
  } else {
    if (id != "") {
      let arr = JSON.parse(localStorage.getItem("crud"));
      if (arr == null) {
        let data = [name];
        localStorage.setItem("crud", JSON.stringify(data));
      } else {
        arr.push(name);
        localStorage.setItem("crud", JSON.stringify(arr));
      }
      // Document.getElementById('name').value
      document.getElementById("msg").innerHTML = "";
      document.getElementById("msg").innerHTML = "name is updated";
    }
  }
}
function selecData() {
  let arr = JSON.parse(localStorage.getItem("crud"));
  if (arr != null) {
    let html = "";
    let sno = 1;
    for (let f in arr) {
      html =
        html +
        `<tr><td>${sno}</td><td>${arr[f]}</td> <td href="javascript: void(0)"onclick="editdata(${f})"><button>edit</button></td> <td href="javascript: void(0)"onclick="deleteData(${f})"><button>delete</button></td> </tr>`;
      sno++;
    }
    document.getElementById("root").innerHTML = html;
  }
}
function deleteData(rid){
  let arr = JSON.parse(localStorage.getItem("crud"));
  arr.splice(rid,1);
  localStorage.setItem("crud", JSON.stringify(arr));
  selecData();
}

function editdata(rid){
    let arr = JSON.parse(localStorage.getItem("crud"));
    document.getElementById("name").value=arr[rid];
}