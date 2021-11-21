// users = [
//   { id: 1, name: "Eldor1", status: "WebDeveloper1" },
//   { id: 2, name: "Eldor2", status: "WebDeveloper2" },
//   { id: 3, name: "Eldor3", status: "WebDeveloper3" },
//   { id: 4, name: "Eldor4", status: "WebDeveloper4" },
//   { id: 5, name: "Eldor5", status: "WebDeveloper5" },
//   { id: 6, name: "Eldor6", status: "WebDeveloper6" },
//   { id: 7, name: "Eldor7", status: "WebDeveloper7" },
// ];

// function getUsers() {
//   var result;
//   setTimeout(() => {
//     users.map((user) => {
//       result += `<li>Id : ${user.id} __ Name : ${user.name}</li>`;
//     });
//     document.body.innerHTML = result;
//   }, 2000);
// }


// function addUser(params) {
    
// } addUser = (user,callback) => {
//     setTimeout(() => {
//         users.push(user);
//         callback();
//     }, 3000);
// };

// addUser({id : 9, name : "Eldor99", status : "WebDeveloper99"}, getUsers);








// users = [
//     { id: 1, name: "Eldor1", status: "WebDeveloper1" },
//     { id: 2, name: "Eldor2", status: "WebDeveloper2" },
//     { id: 3, name: "Eldor3", status: "WebDeveloper3" },
//     { id: 4, name: "Eldor4", status: "WebDeveloper4" },
//     { id: 5, name: "Eldor5", status: "WebDeveloper5" },
//     { id: 6, name: "Eldor6", status: "WebDeveloper6" },
//     { id: 7, name: "Eldor7", status: "WebDeveloper7" },
//   ];
  
//   function getUsers() {
//     var result;
//     setTimeout(() => {
//       users.map((user) => {
//         result += `<li>Id : ${user.id} __ Name : ${user.name}</li>`;
//       });
//       document.body.innerHTML = result;
//     }, 2000);
//   }
  
  
//   function addUser(user) {
//       return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//             users.push(user);
            
//             const error = true;

//             if(!error){
//                 resolve();
//             }else{
//                 reject('BackEnd dan malumot kelmadi !!! ');
//             }

//           },2000)
//       })
//   };
  
//   addUser({id : 9, name : "Eldor99", status : "WebDeveloper99"})
//     .then(getUsers)
//     .catch(err => document.body.innerHTML = err);
  






users = [
    { id: 1, name: "Eldor1", status: "WebDeveloper1" },
    { id: 2, name: "Eldor2", status: "WebDeveloper2" },
    { id: 3, name: "Eldor3", status: "WebDeveloper3" },
    { id: 4, name: "Eldor4", status: "WebDeveloper4" },
    { id: 5, name: "Eldor5", status: "WebDeveloper5" },
    { id: 6, name: "Eldor6", status: "WebDeveloper6" },
    { id: 7, name: "Eldor7", status: "WebDeveloper7" },
  ];
  
  function getUsers() {
    var result;
    setTimeout(() => {
      users.map((user) => {
        result += `<li>Id : ${user.id} __ Name : ${user.name}</li>`;
      });
      document.body.innerHTML = result;
    }, 2000);
  }
  
  
  function addUser(user) {
      return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            users.push(user);
            
            const error = false;

            if(!error){
                resolve();
            }else{
                reject('BackEnd dan malumot kelmadi !!! ');
            }

          },2000)
      })
  };
  
  


async  function result() {
    await addUser({id : 9, name : "Eldor99", status : "WebDeveloper99"})
    getUsers();      
}


result();