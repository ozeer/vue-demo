// src/ts/index.ts
function getFirstWord(msg: string) {
	console.log(msg.split(" ")[0]);
}

getFirstWord("Hello World");

type UserItem = {
	name: "Alan";
};

interface UserItemOp {
	name: string;
	age: number;
}

let petter: UserItemOp = {
	name: "Petter",
	age: 20,
};

console.log(petter)
