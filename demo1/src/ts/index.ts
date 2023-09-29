// src/ts/index.ts
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
