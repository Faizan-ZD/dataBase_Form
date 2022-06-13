let id = "faizu";
// localStorage.clear();
// manageData();
selecData();
function manageData(){
    document.getElementById('msg').innerHTML = "";
   let name = document.getElementById('name').value;
    if(name == ""){
        document.getElementById('msg').innerHTML="please enter your name ";
    }
    else{
        if(id !=""){
            let arr = JSON.parse(localStorage.getItem('crud'));           
            if(arr==null){
                let data=[name];
                localStorage.setItem('crud',JSON.stringify(data));
            }
            else{
                arr.push(name);
                localStorage.setItem('crud',JSON.stringify(arr));
            }
            // Document.getElementById('name').value
            document.getElementById('msg').innerHTML='';
            document.getElementById('msg').innerHTML='name is updated';
        }
    }
}
function selecData(){
    let arr = JSON.parse(localStorage.getItem('crud'));
    if(arr!= null){
        let html = "";
        let sno = 1;
        for(let f in arr){
            html = html+`<tr><td>${sno}</td><td>${arr[f]}</td></tr>`
            sno++;
        }
        document.getElementById('root').innerHTML = html;
    }
}


// let id = "";


// function manageData(){
//     let name = document.getElementById('name').value
//     document.getElementById('msg').innerHTML = "";
//     if(name = ""){
//         document.getElementById('msg').innerHTML = "enter your name";
//     }
//     else{
//         if(id == ""){
//             let arr = JSON.parse(localStorage.getItem('crud'));
//             if(arr == null){
//                 const data = [name]
//                 localStorage.setItem('crud',JSON.stringify(data));
//             }
//             else{
//                 arr.push(name)
//                 localStorage.setItem('crud',JSON.stringify(arr));
//             }
//             document.getElementById('msg').innerHTML =""
//             document.getElementById('msg').innerHTML ="your name is update"
//         }
//     }
    
// }





function editData(){

}

function deletData(){

}

function database(){

}