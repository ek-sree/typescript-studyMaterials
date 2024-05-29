"use strict";
// implicit/ infer type
let userName = "Sreehari";
// explict/ defining type
let age = 10;
let arr = ["sree", 'hari', "ek"];
let emptyArr = [];
let obj = {
    name: "sree",
    age: 12
};
let userDetails = {
    name: "Sreehari",
    age: 21,
    isAdmin: false,
    number: 738273,
    getNumber() {
        console.log(this.number);
    },
};
let adminDetails = {
    name: "Admin Main",
    age: 22,
    isAdmin: true,
    number: 929292,
    getNumber() {
        // console.log(this.number);
    },
};
adminDetails.getNumber();
let userDetailss = {
    Fullname: "Sreehari E K",
    age: 21,
    isAdmin: false
};
let adminDetailss = {
    Fullname: "Admin admin",
    age: 22,
    isAdmin: true
};
// union operator
let skillsAndRate = ["js", "css", 9, 10];
let userNames = {
    name: "sreee",
};
function getUserDetails(userDetailss) {
    return { name: userDetailss.Fullname, aage: userDetailss.age, check: userDetailss.isAdmin };
}
const res = getUserDetails(userDetailss);
console.log(res);
let currentStatus = "pending";
console.log(currentStatus);
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
console.log(add("1", "2"));
//Generics
function getAge(age) {
    return age;
}
console.log(getAge(20));
console.log(getAge("20"));
const user = {
    name: "New name",
    age: 22
};
const admin = {
    name: "New admin",
    age: 29,
    role: "Product manager"
};
function getDetails(details) {
    return details;
}
const userValue = getDetails(user);
const adminValue = getDetails(admin);
console.log("Name is :", userValue.name, " ,", "and age is :", userValue.age);
console.log("Name is :", adminValue.name, " ", "age is :", " ", adminValue.age, "and role is :", adminValue.role);
//as const
let UserName = "Sreehari";
//enum
var StatusType;
(function (StatusType) {
    StatusType[StatusType["PENDING"] = 1] = "PENDING";
    StatusType[StatusType["COMPLETED"] = 2] = "COMPLETED";
    StatusType[StatusType["FAILD"] = 3] = "FAILD";
})(StatusType || (StatusType = {}));
function getOrder(order, status) {
    console.log("Order id is :", order, " ", "and status code is :", status);
}
getOrder("123sree", StatusType.PENDING);
//Another way to do 
const StatusTypes = {
    PENDING: "pending",
    COMPLETED: "completed",
    FAILD: "failed"
};
function getOrders(orderId, status) {
    console.log(orderId, " ", status);
}
getOrders("1234sree", "COMPLETED");
const readonlyUsers = {
    name: "Sreehari",
    age: 20,
    salary: 100000
};
//-partials --optional
const partlUsers = {
    name: "Sreehari"
};
//-pick
const pickParticularValueUsers = {
    name: "sree"
};
//-omit -> that we dont want or exclude
const omitValue = {
    name: "sreehari",
    age: 20
};
const statuS = "competed";
const food = {
    PIZZA: "goo for it",
    BURGER: {
        taste: "wwaa"
    }
};
//unknwon ->we dont knoe the data being fetched from an api 
let personName;
personName = "sreehari";
const newName = personName;
newName.toUpperCase();
//<<<<<<<<<**********----------------------------------------null----------------------------------------**********>>>>>>>>>>>//
function throwError(message) {
    throw new Error(message); //it is not returning or logging anything just throwing an error.
}
;
function logMessage(message) {
    console.log(message); //it is not returning anything just logging a message inside the function.
}
//<<<<<<<<<**********----------------------------------------null----------------------------------------**********>>>>>>>>>>>//
let Nameis = null;
function get(Nameis) {
    if (Nameis) {
        return Nameis;
    }
    else if (Nameis === null) {
        return "No name found";
    }
    else {
        return "Error";
    }
}
console.log(get(null));
