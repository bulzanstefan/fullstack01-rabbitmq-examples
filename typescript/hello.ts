const a: string = "abc";
console.log(a);

function metoda() {
	console.log("from metoda");
}

metoda();

const str = "cu ghilimele";
const str2 = 'cu apostrof ${str}';
const str3 = `interpolare ${str2}`;
console.log(str);
console.log(str2);
console.log(str3);

const names = ['Ana', "Maria", "Daria"];
console.log(names);

const func = a => console.log("ceva " + a);

func("a");

// func("2", 3);

function call(message: { text: string, id?: number }): { message: string, code: string } {
	console.log(message);
	return {
		message: "again",
		code: '33'
	}
}

const result = call({text: 'hello'});
console.log(result.message);

function test(message: string | number | { text: string }) {
	console.log(typeof message);
}

test(2);
test('2');
test({text: 'hello'});

type Student = { name: string }

interface Person {
	name: string;
}

let student1 = {name: "abc"};
let student2 = {name: "student2"}

function printStudent(s: Student) {
	console.log(s.name);
}

printStudent(student1);
printStudent(student2);

function sum(a: number): number
function sum(a: number, b: number): number
function sum(a: number, b?: number | string): number | string {
	return 'abc';
}

const res = sum(2);
console.log(res);
console.log(sum(3, 2));


class HelloTS {
	message: string;

	constructor(msg: string, age) {
		this.message = msg;
		this.age = age;
	}

	_age: number;

	get age() {
		return this._age;
	}

	set age(age: number) {
		console.log("setter " + age);
		this._age = age;
	}

}

let hello = new HelloTS('hello', 22);

console.log(hello.message);
console.log(hello.age);
hello.age = 33;
console.log(hello.age);


let myTuple: [string, number] = ['Ana', 22];
console.log(myTuple);
myTuple[0] = 'hello';
console.log(myTuple);
