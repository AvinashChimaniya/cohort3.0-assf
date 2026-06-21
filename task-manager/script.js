let formdiv = document.querySelector(".createTask");
let form = document.querySelector("form");
let slectopt = document.querySelector("#wslect");
let tasks = document.querySelector(".tasks");
let task = document.querySelector(".task");
let indicator = document.querySelector(".indicator");
let initialdate = document.querySelector(".initial");
let deadlinedate = document.querySelector(".final");
let updttask = document.querySelector(".updttask")
let dlttask = document.querySelector(".dlttask")

let tasksArr = [
  {
    id: Date.now(),
    taskdata: "example task data",
    taskreq: "delayed",
    taskstart: 23,
    taskend: 34,
  },
];

function showui() {
  tasks.innerHTML = "";
  tasksArr.forEach(function (elem) {
   let bgcolor = elem.taskreq ==="urgent"?"background-color:lightred":"background-color:lightgreen;"
    tasks.innerHTML += ` <div style="${bgcolor}" class="task">
          <h3 class="indicator">Task</h3>
          <div class="taskdata">
            <h3>${elem.taskdata}</h3>
         </div>
          <div class="deadlines">
          <h4 class="criteria">${elem.taskreq}</h4>
              <h5 class="start">startdate- ${elem.taskstart}</h5>
              <h5 class="end">deadline- ${elem.taskend}</h5>
          </div>
          <div class="modify">
            <button onclick="updtask('${elem.id}')" class="updttask">update_Task</button>
            <button onclick="dltask('${elem.id}')" class="dlttask">delete_Task</button>
            </div>
         <button onclick="cmplted(${elem.id})" class="task-situation">click if completed</button>
            </div>
`;
  });
}

let indate;
initialdate.addEventListener("change", function (e) {
  indate = e.target.value;
});

let dlinedate;
deadlinedate.addEventListener("change", function (e) {
  dlinedate = e.target.value;
});


let selectdata;
slectopt.addEventListener("change", function (e) {
  selectdata = slectopt.options[slectopt.selectedIndex].innerHTML;
});

showui();

 let obj;
 let objind = null;
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let taskdata = e.target[0].value;
  let taskreq = selectdata;
  let startdate = indate;
  let deadline = dlinedate;

  if (!taskdata || !taskreq || !startdate || !deadline) {
    alert("fill the form completely");
    return;
  } 
    let newobj = {
      id: Date.now(),
      taskdata: taskdata,
      taskreq: taskreq,
      taskstart: startdate,
      taskend: deadline,
    };
    


    if(objind === null){
    tasksArr.push(newobj)
    }else{
      tasksArr[objind]=newobj;
      objind = null;
    }
   
    showui();
    form.reset();
});



updtask = function(idu){

    obj = tasksArr.find(function(elem){
          return elem.id === Number(idu)
    })

    objind = tasksArr.findIndex(function(elem){
      return elem.id === Number(idu)
    })


   form[0].value = obj.taskdata;
   form[1].options = obj.taskreq;
   form[2].value = obj.taskstart;
   form[3].value = obj.taskend;



}


dltask = function(idd){
  let dltobj = tasksArr.findIndex(function(elem){
            return elem.id === Number(idd)
  })
 tasksArr.splice(dltobj,1)
// console.log(tasksArr);
showui()
}


cmplted = function(cid){
     let btnedit = tasksArr.findIndex(function(elem){
              return elem.id === Number(cid)
     })

.splice(btnedit,1)
  //  console.log(tasksArr);
    showui()
}