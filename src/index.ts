//<<<<<<<<<**********----------------------------------implict / infer type----------------------------------**********>>>>>>>>>>>//

let userName = "Sreehari"; 


//<<<<<<<<<**********----------------------------------explict / defined type----------------------------------**********>>>>>>>>>>>//
let age:number=10;
 
let arr:string[] = ["sree",'hari',"ek"]

let emptyArr:[] = [];

let obj:{name:string; age:number}={
    name:"sree",
    age:12
}


//<<<<<<<<<**********----------------------------------interface----------------------------------**********>>>>>>>>>>>//

interface Details {
    name:string;
    age:number;
    isAdmin:boolean;
    number:number;
    getNumber:()=>void;
}

let userDetails: Details = {
    name:"Sreehari",
    age:21,
    isAdmin:false,
    number:738273,
    getNumber() {
        console.log(this.number);
    },
}

let adminDetails : Details={
    name:"Admin Main",
    age:22,
    isAdmin:true,
    number:929292,
    getNumber() {
        console.log(this.number);
    },
}

adminDetails.getNumber()


//<<<<<<<<<**********----------------------------------type----------------------------------**********>>>>>>>>>>>//

type Detailss ={
    Fullname:string;
    age:number | string;
    isAdmin:boolean
}

let userDetailss:Detailss ={
    Fullname:"Sreehari E K",
    age:21,
    isAdmin:false
}

let adminDetailss: Detailss={
    Fullname:"Admin admin",
    age:22,
    isAdmin:true
}


//<<<<<<<<<**********----------------------------------union type operator----------------------------------**********>>>>>>>>>>>//
let skillsAndRate :(string|number)[]=["js","css",9,10]


//<<<<<<<<<**********----------------------------------optional type ->?----------------------------------**********>>>>>>>>>>>//
interface ForOptional{
    name:string;
    age?:number
}

let userNames:ForOptional={
    name:"sreee",
}


function getUserDetails(userDetailss:Detailss){
    return {name:userDetailss.Fullname, aage:userDetailss.age, check:userDetailss.isAdmin}
}

const res = getUserDetails(userDetailss)
console.log(res);



//<<<<<<<<<**********----------------------------------Named type->union type----------------------------------**********>>>>>>>>>>>//
type status= "pending"| "success" | "faild";

let currentStatus:status="pending";
console.log(currentStatus);


//<<<<<<<<<**********----------------------------------function overloading----------------------------------**********>>>>>>>>>>>//
function add(num1: string, num2: string):any
function add(num1: number, num2: number):any
function add(num1:any,num2:any): any{
    return num1 + num2;
}

console.log(add(1,2));
console.log(add("1","2"));


//<<<<<<<<<**********----------------------------------Generic----------------------------------**********>>>>>>>>>>>//
function getAge<T>(age:T):T{
    return age ;
}

console.log(getAge<number>(20));
console.log(getAge<string>("20"));


//->examples

type UserDetails = {
    name:string;
    age:number
};

type AdminDetails = UserDetails &{
    role:string
}

const user:UserDetails = {
    name:"New name",
    age:22
}
const admin:AdminDetails={
    name:"New admin",
    age:29,
    role:"Product manager"
}

function getDetails<T>(details:T):T{
    return details;
}

const userValue = getDetails<UserDetails>(user)
const adminValue = getDetails<AdminDetails>(admin)

console.log("Name is :",userValue.name ," ,","and age is :",userValue.age);
console.log("Name is :",adminValue.name ," " ,"age is :"," ",adminValue.age, "and role is :",adminValue.role);


//<<<<<<<<<**********----------------------------------as const----------------------------------**********>>>>>>>>>>>//
let UserName = "Sreehari" as const



//<<<<<<<<<**********----------------------------------enum----------------------------------**********>>>>>>>>>>>//

enum StatusType{
    PENDING=1,
    COMPLETED,
    FAILD
}

function getOrder(order:string, status:StatusType):void{
    console.log("Order id is :",order ," " ,"and status code is :", status);   
}

getOrder("123sree",StatusType.PENDING)


//Another way to do 

const StatusTypes={
    PENDING:"pending",
    COMPLETED:"completed",
    FAILD:"failed"
} as const;

function getOrders(orderId:string, status: keyof typeof StatusTypes):void{
    console.log(orderId," ",status);
}

getOrders("1234sree", "COMPLETED")


//utility types


//<<<<<<<<<**********----------------------------------#readonly----------------------------------**********>>>>>>>>>>>//
//-> act like const cant change the value ,can only view
type User={
    name:string;
    age:number;
    salary:number
}

const readonlyUsers: Readonly<User> = {
    name:"Sreehari",
    age:20,
    salary:100000
}


//<<<<<<<<<**********----------------------------------#partial----------------------------------**********>>>>>>>>>>>//
//->optional
const partlUsers: Partial<User>={
    name:"Sreehari"
}

//<<<<<<<<<**********----------------------------------#pick----------------------------------**********>>>>>>>>>>>//
//-> must need one
const pickParticularValueUsers: Pick<User,"name"> ={
    name:"sree"
}

//<<<<<<<<<**********----------------------------------#omit----------------------------------**********>>>>>>>>>>>//
// -> that we dont want or exclude
const omitValue: Omit<User, "salary"> ={
    name:"sreehari",
    age:20
}

//<<<<<<<<<**********----------------------------------#exclude----------------------------------**********>>>>>>>>>>>//
//-> in the case of union we want to exclude something use exclude keyword
type statusType = "pending" | "competed" | "failed";

const statuS:Exclude<statusType, "pending"> = "competed";


//<<<<<<<<<**********----------------------------------#Record----------------------------------**********>>>>>>>>>>>//
// ->if we dont know the types of string and value 
type Food = Record<string, any>;

const food:Food={
    PIZZA:"goo for it",
    BURGER:{
        taste:"wwaa"
    }
}

//<<<<<<<<<**********----------------------------------#unknown----------------------------------**********>>>>>>>>>>>//
// ->we dont knoe the data being fetched from an api 

let personName:unknown;
personName="sreehari"
const newName = personName as string
newName.toUpperCase();


//<<<<<<<<<**********----------------------------------#never/void----------------------------------**********>>>>>>>>>>>//
function throwError(message:string):never{
    throw new Error(message); //it is not returning or logging anything just throwing an error.
};

function logMessage(message:string):void{
    console.log(message); //it is not returning anything just logging a message inside the function.
}


//<<<<<<<<<**********----------------------------------#null----------------------------------**********>>>>>>>>>>>//

let Nameis : string | null = null

function get(Nameis:string|null):string|null{
    if(Nameis){
        return Nameis
    }else if(Nameis===null){
        return "No name found"
    }else{
        return "Error"
    }
}

console.log(get(null));
