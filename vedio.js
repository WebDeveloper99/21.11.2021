



// C R U D


// const array = [2,6,8,3,0,9,4];


// for (let i = 0; i < array.length; i++) {
//     var a = 0;
//     for (let j = 0; j < array.length; j++) {
        
//         if (array[i] > array[i+j]){
//             a = array[i];
//             array[i] = array[i+j];
//             array[i+j] = a;
//         }
        
//     }
    
// }

// for (let i = 0; i < array.length; i++) {
//     console.log(array);
    
// }


// let a = array.sort((value1,value2)=> value1 - value2 );
// console.log(a);


// const array = [
//     {
//         id:1,
//         name : 'Eldor',
//         surname : 'Eshmanov',
//         status : 'WebDeveloper',
//         number : '907201780'
//     },
//     {
//         id:3,
//         name : 'Ali',
//         surname : 'Murodjonov',
//         status : 'WebDeveloper',
//         number : '907201780'
//     },
//     {
//         id:4,
//         name : 'Fazliddin',
//         surname : 'Bekov',
//         status : 'WebDeveloper',
//         number : '907201780'
//     },
//     {
//         id:2,
//         name : 'Samar',
//         surname : 'Alijonov',
//         status : 'WebDeveloper',
//         number : '907201780'
//     }
// ]


// const onSort =(key,value)=>{
    
//     array.filter((v)=>{
//         (v[`${key}`] == value) && console.log(v);
//     })

    
// }

// onSort('id',2)







// class Test{

//     id = 1;
//     name = "Eldor"

//     constructor(title){
//         this.name = title;
        
//         console.log(this);
//     }

//     fullName = function () {
//         console.log(this.id + this.name);
//     }



// }

// // new Test('hello').fullName();


// class Deportment extends Test{
//     constructor(varable){
//         console.log(varable);
//         super(varable)
//     }
// }


// new Deportment('world').fullName();




let students = [
    {
        id : 1,
        Name : 'Eldor',
        MiddleName : 'WebDeveloper',
        Status : 'Talaba',
        Year : 1999,
    },
    {
        id : 2,
        Name : 'Ali',
        MiddleName : 'Coder',
        Status : 'Talaba',
        Year : 2001,
    },
    {
        id : 3,
        Name : 'Vali',
        MiddleName : 'AndroidDeveloper',
        Status : 'Talaba',
        Year : 2021,
    },
    {
        id : 4,
        Name : 'Messi',
        MiddleName : 'IosDeveloper',
        Status : 'Talaba',
        Year : 1992,
    },
]

us = {
    id : 4,
    Name : 'Messi',
    MiddleName : 'IosDeveloper',
    Status : 'Talaba',
    Year : 1992,
}



const Facebook =(id,name,callback)=>{
    let str = false;
    students.forEach((element,index,array) => {
        if(element.id == id && element.Name == name){
            str =true;
            return      
        }      
    });
console.log(str);
    if(!str){
        return `xato !!!`
    }else{
        return `welcome facebook`;
    }
}
console.log(Facebook(4,"Messi"));

