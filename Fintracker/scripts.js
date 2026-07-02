// login form

setusersArr = function(usersArr){
  localStorage.setItem("usersArr",JSON.stringify(usersArr))
}


settotaltransArr = function(totaltransArr){
  localStorage.setItem("totaltransArr",JSON.stringify(totaltransArr))
}


setbalanceArr = function(balanceArr){
  localStorage.setItem("balanceArr",JSON.stringify(balanceArr))
}


getusersArr = function(){
  return JSON.parse(localStorage.getItem("usersArr"))
}

gettotaltransArr = function(){
  return JSON.parse(localStorage.getItem("totaltransArr"))
}

getbalanceArr = function(){
 return JSON.parse(localStorage.getItem("balanceArr"))
}

let setcurrency;


let usersArr = getusersArr()||[]
let balanceArr = getbalanceArr()||[] 
let totaltransArr = gettotaltransArr()||[]

console.log(usersArr,balanceArr,totaltransArr)

let loguserArr=[]
 let logusbalanceArr = []


let logincont = document.querySelector(".login");
let loginform = document.querySelector(".loginform");
let loginbtn = document.querySelector(".lbutton");
let lregsiterbtn = document.querySelector(".registerbtn");
let rloginbtn = document.querySelector(".loginbtn");
let registercont = document.querySelector(".register");
// let loginmbtn = document.querySelector(".lbutton")
let registermbtn = document.querySelector(".rbutton");

// register form function
function regisiteruf() {
  logincont.style.display = "none";
  registercont.style.display = "flex";
}

// login form ui function
function loginuf() {
  logincont.style.display = "flex";
  registercont.style.display = "none";
}

// new user registration call
lregsiterbtn.addEventListener("click", function () {
  regisiteruf();
});

// login call
rloginbtn.addEventListener("click", function () {
  loginuf();
});

// new user register form

let uregform = document.querySelector(".registerform");
let regusername;
let reguserpassword;

uregform.addEventListener("submit", function (urfevent) {
  urfevent.preventDefault();

  regusername = urfevent.target[0].value.trim();
  reguserpassword = urfevent.target[0].value.trim();

  let existingUser = usersArr.find(function (elem) {
    return elem.username === regusername;
  });

  if (!regusername || !reguserpassword) {
    alert("no field should be empty");
    return;
  } else if (existingUser) {
    alert("username already taken");
    return;
  } else {
  
    let robj;

    robj = {
      id: Date.now(),
      username: regusername,
      password: reguserpassword,
      primarycrncy:"$"
    };
    
    usersArr.push(robj);
    setusersArr(usersArr)
    alert("account created successfully");
    alert("login to your profile");
    loginuf();
  }
  
 urfevent.target[0].value = ""
    urfevent.target[1].value = ""
});

// home page ui call

let homepage = document.querySelector(".home_page");

showhome = function () {
  logincont.style.display = "none";
  registercont.style.display = "none";
  homepage.style.display = "flex";
};

// function for dashboard , and setting display

let tbtn = document.querySelector(".switchbtn")
let tbtntext = document.querySelector(".thmode h4")
let tcolor = document.querySelector(":root")
let flag = 1;
tbtn.addEventListener("click",function(){
  if(flag === 0){
    console.log(tbtn.style.justifyContent = "start")
    console.log(tbtntext.innerHTML = "Dark Theme")
    console.log(tcolor.style.setProperty("--theme-bcolor","rgb(247,248,250)"))
    console.log(tcolor.style.setProperty("--theme-dcolor","white"))
    console.log(tcolor.style.setProperty("--theme-font","black"))
    flag=1;
  }else if(flag === 1){
    console.log(tbtn.style.justifyContent = "end")
    console.log(tcolor.style.setProperty("--theme-bcolor","rgb(41,41,41)"))
    console.log(tcolor.style.setProperty("--theme-dcolor","black"))
    console.log(tcolor.style.setProperty("--theme-font","white"))
    flag = 0;
  }
})


dashdisplay = function(){
  dashboard.style.backgroundColor = `rgb(172, 172, 255)`;
    dashboard.style.color = `rgb(149, 75, 214)`;
       settings.style.backgroundColor = "";
    settings.style.color ="";
    userSetting.style.display = "none";
    userexpancedata.style.display = "block";
}


settingdisplay = function(){
    settings.style.backgroundColor = `rgb(172, 172, 255)`;
    settings.style.color = `rgb(149, 75, 214)`;
    // if(flag === 0){
    //     dashboard.style.backgroundColor = "black";
    // dashboard.style.color = "white";
    // }else if(flag === 1){
    //  dashboard.style.backgroundColor = "white";
    // dashboard.style.color = "black";
    // }
    dashboard.style.backgroundColor = "";
    dashboard.style.color = "";
    userexpancedata.style.display = "none";
    userSetting.style.display = "block";
}

// existing user login form

let lusername;
let lpassword;
let user;
let loggedUser;
let loggedUserId;


    let cbalance = document.querySelector(".cbalance .balance h2")
    let Tincome = document.querySelector(".Tincome .balance h2")
    let Texpense = document.querySelector(".Texpense .balance h2")
    let Ttransactions = document.querySelector(".Ttransactions .balance h2")
    let transactioform = document.querySelector(".trnsadd");


    let finalincome = 0;
    let finalexpense = 0;
    let finaltransaction = 0;
    let totaltransaction=0;
    let upcurrency;


let dcards = document.querySelector(".dcards")
showcards = function(setcurrency="$",b=finaltransaction,i=finalincome,e=finalexpense,nt=totaltransaction){
dcards.innerHTML = ""
dcards.innerHTML = `    <div class="cbalance">
                <div class="bicons">
                  <i class="ri-bank-fill"></i>
                </div>
                <div class="balance">
                  <h3>Current Balance</h3>
                  <h2 style="color:${b >= 0 ? 'green' : 'red'}">${setcurrency}${b}</h2>
                </div>
              </div>
              <!-- income card -->
              <div class="Tincome">
                <div class="iicons">
                  <i class="ri-arrow-right-up-long-line"></i>
                </div>
                <div class="balance">
                  <h3>Total Income</h3>
                  <h2>${setcurrency}${i}</h2>
                </div>
              </div>

              <!-- expense card -->
              <div class="Texpense">
                <div class="eicons">
                  <i class="ri-arrow-right-down-long-line"></i>
                </div>
                <div class="balance">
                  <h3>Total Expense</h3>
                 
                  <h2>${setcurrency}${e}</h2>
                </div>
              </div>

              <!-- transaction card -->
              <div class="Ttransactions">
                <div class="tricons">
                  <i class="ri-collapse-vertical-line"></i>
                </div>
                <div class="balance">
                  <h3>Total Transaction</h3>
                  <h2>${nt}</h2>
                </div>
              </div>`

}

let truind=null;

       function editrdata(id,tid){
        console.log(tid)
        gettotaltransArr()
         ueditobj =  totaltransArr.find(function(elem){
           return elem.tid === tid
          })
          console.log(ueditobj)

          ueditonjind = totaltransArr.findIndex(function(elem){
            return elem.tid === tid
          })

          truind = ueditonjind;
          
          transactioform[0].value = `${ueditobj.ttype}`
          transactioform[1].value = `${ueditobj.tdesc}`
          transactioform[2].value = `${ueditobj.tamount}`
          transactioform[3].value = `${ueditobj.tdate}`
          transactioform[4].value = `${ueditobj.tcat}`
          transactioform.style.display = "flex"
             
            
    }

     let recentrans = document.querySelector(".fsdatacont")

loginform.addEventListener("submit", function (lfevent) {
  lfevent.preventDefault();

  lusername = lfevent.target[0].value.trim();
  lpassword = lfevent.target[1].value.trim();

  if (!lusername || !lpassword) {
    alert("no field should be empty");
    return;
  } else {
      getusersArr()
      user = usersArr.find(function (elem) {
      return elem.username === lusername;
    });


  
    if (!user) {
      alert("no user found please create account");
      regisiteruf();
      return;
    }

    let checkpass = user.password;
    if (lpassword !== checkpass) {
      alert("enter the correct password");
      return;
    }

    alert("logged in successfully")
   
    lfevent.target[0].value = ""
    lfevent.target[1].value = ""

    showhome();
    

        loggedUser = user.username;
        loggedUserId = user.id;
    
    // getbalanceArr()
    // let db = balanceArr.find(function(elem){
    //   return elem.id === loggedUserId
    // })
  
    loginform.reset()

    let menuuser = document.querySelector(".menu")

    menuuser.innerHTML=""
    showmenu = function(data){
         menuuser.innerHTML=""
         menuuser.innerHTML=`<h4>${data}</h4>
            <button onclick="logoutuser()" class="lgtbtn">
              <i class="ri-logout-box-r-line"></i>Logout
            </button>`
    }

    showmenu(user.username)

   
 recentrans.innerHTML="";

  showtransaction = function(){
    gettotaltransArr()
    loguserArr=[]
    loguserArr = totaltransArr.filter(function(elem){
       return elem.id === loggedUserId
    })

    recentrans.innerHTML=""
    loguserArr.forEach(function(elem){
        recentrans.innerHTML+=`
         <div class="fsdata">
                  <h4>${elem.tdate}</h4>
                  <h4>${elem.tdesc}<h4>
                  <div class="categoryd">${elem.tcat}</div>
                  <h4>${elem.tamount}</h4>
                  <div class="editfdata">
                    <button onclick="editrdata(${elem.id},${elem.tid})" class="edit"><i class="ri-pencil-fill"></i></button>
                    <button class="delete">
                      <i class="ri-delete-bin-3-fill"></i>
                    </button>
                  </div>
                </div>`
    })
   }

   showtransaction()





    let fupdatedobj = usersArr.find(function(elem){
    return elem.id === loggedUserId
})
    let cd = balanceArr.find(function(elem){return elem.id === loggedUserId})
    if(cd){ 
      showcards(setcurrency,cd.tbalance,cd.tinamount,cd.texamount,cd.ttrans)
    }else{
      showcards(fupdatedobj.primarycrncy,0,0,0)
    }

    // showcards() 
  logoutuser = function(){
     logincont.style.display = "flex";
  registercont.style.display = "none";
  homepage.style.display = "none";
  }

    // profile dom 

let uprform = document.querySelector(".userprofile")
let loggedusername = document.querySelector("#fullname")
let slctedcurrency = document.querySelector("#currency")
setcurrency = slctedcurrency.value
loggedusername.value = loggedUser
let replindex = null;

uprform.addEventListener("submit",function(upfevent){
upfevent.preventDefault()
console.log(upfevent)


let replindex = usersArr.findIndex(function(elem){
    return elem.id === loggedUserId
})

let upname = (upfevent.target[0].value).trim()
let upcurrency = upfevent.target[1].value


let newobj = {
        id:loggedUserId,
        username:upname,
        password:lpassword,
        primarycrncy:upcurrency
}

setcurrency=newobj.primarycrncy

usersArr.splice(replindex,1,newobj)
setusersArr(usersArr)


// loggedusername.value = `${newobj.username}`
// setcurrency = `${newobj.primarycrncy}`
console.log(totaltransArr)
console.log(usersArr)
let updatedobj = usersArr.find(function(elem){
    return elem.id === loggedUserId
})

showmenu(updatedobj.username)
// showcards(setcurrency)
getbalanceArr()
let cdd = balanceArr.find(function(elem){return elem.id === loggedUserId})
    if(cdd){ 
      showcards(setcurrency,cdd.tbalance,cdd.tinamount,cdd.texamount,cdd.ttrans)
    }else{
      showcards(fupdatedobj.primarycrncy,0,0,0)
    }
// if(cd){ 
//       showcards(updatedobj.primarycrncy,cd.tbalance,cd.tinamount,cd.texamount,cd.ttrans)
//     }else{
//       showcards(updatedobj.primarycrncy,0,0,0)
//     }
})



let savetrd = document.querySelector(".trnsadd")
savetrd.addEventListener("submit",function(trdevent){
  trdevent.preventDefault()

  let transobj;
  

  let transtype = (trdevent.target[0].value).trim()
  let transdesc = (trdevent.target[1].value).trim()
  let transamount = (trdevent.target[2].value).trim()
  let transdate = (trdevent.target[3].value).trim()
  let transcat = (trdevent.target[4].value).trim()
 
  if(!transtype || !transdesc || !transamount || !transdate || !transcat){
    alert("no field should remain empty")
    return
  }else{
 
    transobj={
        id:Number(loggedUserId),
        tid:Date.now(),
        ttype:transtype,
        tdesc:transdesc,
        tamount:Number(transamount),
        tdate:transdate,
        tcat:transcat
    }

    if(truind===null){
      totaltransArr.push(transobj)
      settotaltransArr(totaltransArr)
      console.log(totaltransArr)
    }else if(truind!==null){
      totaltransArr.splice(truind,1,transobj)
      settotaltransArr(totaltransArr)
    }
    console.log(totaltransArr)
    loguserArr=[]
    loguserArr = totaltransArr.filter(function(elem){
       return elem.id === loggedUserId
    })

    console.log(loguserArr)




 
  showtransaction()
  

  

     finalincome = 0;
     finalexpense = 0;
     totaltransaction =0;
    
    loguserArr.forEach(function(elem){
      if(elem.id === loggedUserId){
        totaltransaction++
        if(elem.ttype === "Income"){
            finalincome += elem.tamount
        }else if(elem.ttype === "Expense"){
            finalexpense += elem.tamount
        }
      }
    })
    
    finaltransaction = finalincome-finalexpense;
    
    let balanceObj;
    balanceObj = {
      id:loggedUserId,
      tbalance:finaltransaction,
      texamount:finalexpense,
      tinamount:finalincome,
      ttrans:totaltransaction,
      scurrncy:setcurrency
    }

    let existobj = balanceArr.some(function(elem){
      return elem.id === loggedUserId
    })
    
    let updataid = balanceArr.findIndex(function(elem){
          return elem.id === loggedUserId
    })
    
    console.log(existobj);
    if(existobj){
      balanceArr.splice(updataid,1,balanceObj)
      console.log(balanceArr)
      setbalanceArr(balanceArr)
      
    }else if(!existobj){
      balanceArr.push(balanceObj)
      setbalanceArr(balanceArr)
    }

    // logusbalanceArr = balanceArr.filter(function(blobj){
    //   return blobj.id === loggedUserId
    // })
     
        //  showcards(updatedobj.primarycrncy,cd.tbalance,cd.tinamount,cd.texamount,cd.ttrans)
    
    
  }
  let fupd = usersArr.find(function(elem){
    return elem.id === loggedUserId
})
  showcards(fupd.primarycrncy,fupd.tbalance,fupd.tinamount,fupd.texamount,fupd.ttrans)

  savetrd.reset()
  
})


dashdisplay()
  }
});

// navbar menu features
let sidenav = document.querySelector(".sidebar");
let dashboard = document.querySelector(".dashboard");
let userexpancedata = document.querySelector(".dcontent");
let settings = document.querySelector(".setting");
let userSetting = document.querySelector(".userprofile");
let addTransactionsbtn = document.querySelector(".addtrans")
let closetrnsform = document.querySelector(".closetrn")
let menuuser = document.querySelector(".menu h4")


sidenav.addEventListener("click", function (snvevent) {
  console.log(snvevent);
  snvevent.preventDefault();

  if (snvevent.target.innerHTML === "Dashboard") {
    dashdisplay()
  } 
  
  else if (snvevent.target.innerHTML === "Setting") {
    settingdisplay()
  }
  
  // else if(snvevent.target.innerText = "+ Add Transaction"){
  //   transactioform.style.display = "flex"

  // }
  // else{
  //   return
  // }
});

addTransactionsbtn.addEventListener("click",function(){
  transactioform.style.display = "flex"
}
)


closetrnsform.addEventListener("click",function(ctnevent){
     ctnevent.preventDefault()
    transactioform.style.display = "none"
})


let searchbyf = document.querySelector(".search")
let trnsearch = document.querySelector(".findd")
let sfilter = document.querySelector(".soption")
let timerid=null;
let sfval=sfilter.value;
let searchterm;
let filtertrans;

trnsearch.addEventListener("input",function(even){
clearTimeout(timerid)
timerid = setTimeout(() => {

  if(even.target.type === "search"){
    searchterm = even.target.value
  }
  sfval = sfilter.value
  
  if(!searchterm){
    filtertrans=[]
    console.log("search is empty")
     gettotaltransArr()
    filtertrans = totaltransArr.filter(function(elem){
          if(sfval==="All Type"){
        return elem.id === loggedUserId && (elem.ttype === "Income" || elem.ttype === "Expense")
      }else if(sfval === "Income Only"){
        return elem.id === loggedUserId  && elem.ttype === "Income" 
      }else if(sfval === "Expense Only"){
       return  elem.id === loggedUserId && elem.ttype === "Expense"
      } 
    })

console.log("this is tht filter trans array")
 console.log(filtertrans)
      recentrans.innerHTML=""
      filtertrans.forEach(function(elem){
        recentrans.innerHTML+=`
         <div class="fsdata">
                  <h4>${elem.tdate}</h4>
                  <h4>${elem.tdesc}<h4>
                  <div class="categoryd">${elem.tcat}</div>
                  <h4>${elem.tamount}</h4>
                  <div class="editfdata">
                    <button onclick="editrdata(${elem.id},${elem.tid})" class="edit"><i class="ri-pencil-fill"></i></button>
                    <button class="delete">
                      <i class="ri-delete-bin-3-fill"></i>
                    </button>
                  </div>
                </div>`


      })
  }else{
  gettotaltransArr()
  console.log(totaltransArr)
  console.log(searchterm,sfval)
   filtertrans=[]
   filtertrans = totaltransArr.filter(function(elem){
      if(sfval==="All Type"){
        return elem.id === loggedUserId && elem.tdesc.includes(searchterm) && (elem.ttype === "Income" || elem.ttype === "Expense")
      }else if(sfval === "Income Only"){
        return elem.id === loggedUserId && elem.tdesc.includes(searchterm) && elem.ttype === "Income" 
      }else if(sfval === "Expense Only"){
       return  elem.id === loggedUserId && elem.tdesc.includes(searchterm) && elem.ttype === "Expense"
      } 
  })


 console.log("this is tht filter trans array")
 console.log(filtertrans)
      recentrans.innerHTML=""
      filtertrans.forEach(function(elem){
        recentrans.innerHTML+=`
         <div class="fsdata">
                  <h4>${elem.tdate}</h4>
                  <h4>${elem.tdesc}<h4>
                  <div class="categoryd">${elem.tcat}</div>
                  <h4>${elem.tamount}</h4>
                  <div class="editfdata">
                    <button onclick="editrdata(${elem.id},${elem.tid})" class="edit"><i class="ri-pencil-fill"></i></button>
                    <button class="delete">
                      <i class="ri-delete-bin-3-fill"></i>
                    </button>
                  </div>
                </div>`
    })


  }

  
}, 300);


})


