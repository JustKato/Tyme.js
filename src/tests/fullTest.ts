import TymeJS from "../index";

const a = new TymeJS();

console.log("π", a.format("m/d/Y"));
console.log(a.format("d/m/Y"));
console.log(a.format("d/m/Y h:i A"));
console.log(a.format("d/m/Y H:i:s"));

console.log("\nπΊπΈ\n", a.format("m/d/Y"));
console.log(a.format("m/d/Y"));
console.log(a.format("m/d/Y h:i A"));
console.log(a.format("m/d/Y H:i:s"));

console.log("\nπ₯\n", a.format("m/d/Y"));
console.log(a.format("Y-m-d"));
console.log(a.format("Y-m-d H:i:s"));

console.log(`\n`);


