import { HashMap } from "./HashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("=== After 12 entries (capacity 16, load 0.75) ===");
console.log("length:", test.length());       // 12
console.log("capacity:", test.capacity);     // 16

// Overwrite existing keys — length should stay 12
test.set("apple", "green");
test.set("dog", "black");
console.log("\n=== After overwriting 'apple' and 'dog' ===");
console.log("length:", test.length());       // still 12
console.log("apple:", test.get("apple"));    // green
console.log("dog:", test.get("dog"));        // black

// This insert triggers growth (13/16 > 0.75)
test.set("moon", "silver");
console.log("\n=== After adding 'moon' (triggers growth) ===");
console.log("length:", test.length());       // 13
console.log("capacity:", test.capacity);     // 32
console.log("load:", (test.length() / test.capacity).toFixed(4)); // ~0.41

console.log("\n=== Method checks ===");
console.log("has('grape'):", test.has("grape"));       // true
console.log("has('dragon'):", test.has("dragon"));     // false
console.log("get('moon'):", test.get("moon"));         // silver
console.log("remove('banana'):", test.remove("banana")); // true
console.log("remove('banana'):", test.remove("banana")); // false
console.log("length after remove:", test.length());    // 12
console.log("keys:", test.keys());
console.log("values:", test.values());
console.log("entries:", test.entries());

test.clear();
console.log("\n=== After clear() ===");
console.log("length:", test.length());       // 0