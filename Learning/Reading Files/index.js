import { readFileSync } from "fs";
import { readFile } from "fs/promises";

// You can use the readFileSync function from the "fs" module
const data = readFileSync("data.json", "utf-8");
const obj = JSON.parse(data);

console.log(obj);


// The readFile function is asynchronous
const new_data = await readFile("data.json", "utf-8");
console.log(JSON.parse(new_data));