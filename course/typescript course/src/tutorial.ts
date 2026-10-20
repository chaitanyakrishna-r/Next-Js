
let a : number;
a = 1;

console.log(a);

//string
let str :string = 'ckr';

//boolean

let isOnline : boolean = false;

//any

let hello;
// let hello: any;
hello = 1;
hello = 'hi how are you'

//tuple
let users:[string, number, boolean] = ['ckr',3,true];


//enum
// enum role{
//     'users',
//     'admin',
//     'guest'
// }

//array

let arr : number[] = [1,3,5]; // number type array
let strArr : string[] = ['string','ckr']; // string type array
//also 
let str1 : Array<string> = ['ckr'];

// void::  this does not return any thing
function print(): void{
    console.log('print');
}

// null 
let x : null = null;
let y : undefined = undefined;


// functions

function assets(a: number, b: string): number{
    return a;
}

assets(27,'ckr')

let a2: string | number;



//type aliases

type status = string | number;

let a1: status;

a1= 'string';
a1 = 27;



// custom defined our own types

type status1 = 'success' | 'pending' | 'error';

let b : status1;

b = 'success';
b= 'error'


// type in object

let obj : {name: string; age:number; isAdmin: boolean}={
    name: 'ckr',
    age: 23,
    isAdmin: false
}

//type aliases

type user ={
    name: string,
    age: number,
    isAdmin: boolean
}

let obj2 : user = {
    name: 'ckr',
    age: 30,
    isAdmin: true,
}

//example 2 
let post:{desc: string; likes: number;comments: string, isSub: boolean}={
    desc: 'all good',
    likes: 23,
    comments: 'very good show',
    isSub: true,
}

type post = {
        desc: string,
        likes: number,
        isSub: boolean
}

let post1: post ={
    desc: 'hello',
    likes:23,
    isSub: false
}


//type aliases for funcitons

type mathFn = (a: number, b: number) => number;


let divide: mathFn = (a,b)=>{
  return  a/b;
}
const ans = divide(30,10);
console.log(ans)


//interfaces

interface role {
    name:string,
   
    roles: string,
    age: number
}

interface admin extends role{
    isAdmin:boolean,
    roleType: string,
}

//example 2

interface User1{
    id: number,
    name:string,
    email?: string,  //optional
    readonly role:string
}

const userA : User1={
    id:2,
    name:'ckr',
    email:'ckr@gmail.com',
    role: 'admin'
}

interface Emplyoe extends User1{
    salary:number
}

const emplyoe1 : Emplyoe = {
    id:23,
    name:'ravi1',
    role: 'user',
    salary:234300
}


type student ={
    name: string,
    age:number,
    class:number,
    isPass: boolean
}

const stu1 : student ={
    name:'ck',
    age:23,
    class: 2,
    isPass:true
}

type teacher = string | number;

let sub: teacher ;
sub = 'kannada' 

type subject =(a:string,b:number)=> void;

let sub1: subject = (a,bs)=>{
    console.log(a,bs)
}

sub1('eng',23)

function fn(a:number,b: void,c:string): number|string{
    return a;
}

//union and intersection

type response = 'ok' | 'fail' | 'loading';
let res: response = 'ok';


type person = {name: string};
type contact = {phone: number};

type full = person & contact;

let user : person & contact ={
    name: 'ckr',
    phone: 2343
}
let user2: full ={
    name:'ckr',
    phone:23343
}

//generics

function hello1<T>(a:T,b:T){

}
hello1(23,23)// infernce ts will automatic assing the type number to this 

hello1<number>(23,24);//annotation

type hell<T> = (a:T ,b:T) => T

let hell1: hell<number> = (a,b)=>{
    return a
}

hell1(2,4)



//interface with generic

interface Voter<T> {
    name:string,
    age:number,
    address:T
}


const voter1 : Voter<string> = {
    name:'ckr',
    age:23,
    address: '23,2cross'
}

let cus : customer= 'ckr'