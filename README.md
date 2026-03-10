# HashMap

A custom implementation of a **HashMap** (and **HashSet**) in JavaScript, built from scratch as part of [The Odin Project](https://www.theodinproject.com/lessons/javascript-hashmap) curriculum.

---

## How It Works

### Hash Function

Every key goes through a `hash(key)` function that converts a string into a numeric bucket index. The algorithm multiplies a running hash by a prime number (`31`) and adds the character code of each character. The modulo `%` operator is applied **inside the loop** on every iteration — this prevents integer overflow for long keys while keeping the result within the bucket array bounds.

```js
hash(key) {
  let hashCode = 0;
  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
  }
  return hashCode;
}
```

### Collision Handling — Separate Chaining

Two different keys can produce the same hash code. When this happens, both entries live in the same bucket as a list of `[key, value]` pairs. On lookup, the bucket is searched by key — not by hash — to return the correct value.

```
Bucket 4 → [ ["frog", "green"], ["kite", "pink"] ]
```

### Dynamic Growth

The map starts with a capacity of `16` buckets and a load factor of `0.75`. Once the ratio of stored keys to total buckets exceeds `0.75`, the capacity doubles and all existing entries are rehashed into the new bucket array.

```
12 keys / 16 buckets = 0.75  →  triggers growth  →  32 buckets
```

---

## Project Structure

```
hashmap/
├── HashMap.js   # Core hash map implementation
├── HashSet.js   # Hash set built on top of HashMap
└── main.js      # Tests and usage examples
```

---

## Getting Started

**Requirements:** [Node.js](https://nodejs.org/) (no external dependencies)

```bash
# Clone the repo
git clone https://github.com/jormaedes/HashMap.git
cd HashMap

# Run the tests
node main.js
```

---

## Usage

### HashMap

```js
const HashMap = require('./HashMap');

const map = new HashMap();

// set / get
map.set('name', 'Igris');
map.get('name');        // 'Igris'

// overwrite
map.set('name', 'Angola');
map.get('name');        // 'Angola'

// check existence
map.has('name');        // true
map.has('unknown');     // false

// remove
map.remove('name');     // true
map.remove('name');     // false (already gone)

// inspect
map.length();           // number of stored keys
map.keys();             // ['banana', 'carrot', ...]
map.values();           // ['yellow', 'orange', ...]
map.entries();          // [['banana', 'yellow'], ['carrot', 'orange'], ...]

// clear everything
map.clear();
```

### HashSet

A set stores only keys — no values. Useful for checking membership without caring about associated data.

```js
const HashSet = require('./HashSet');

const set = new HashSet();

set.add('angola');
set.add('javascript');
set.add('angola');      // duplicate — ignored

set.length();           // 2
set.has('angola');      // true
set.remove('angola');
set.has('angola');      // false
set.keys();             // ['javascript']
```

---

## API Reference

### HashMap

| Method | Description |
|---|---|
| `set(key, value)` | Inserts or updates a key-value pair |
| `get(key)` | Returns the value for a key, or `null` |
| `has(key)` | Returns `true` if the key exists |
| `remove(key)` | Removes a key; returns `true` or `false` |
| `length()` | Returns the number of stored keys |
| `keys()` | Returns an array of all keys |
| `values()` | Returns an array of all values |
| `entries()` | Returns an array of `[key, value]` pairs |
| `clear()` | Removes all entries |

### HashSet

| Method | Description |
|---|---|
| `add(key)` | Adds a key to the set |
| `has(key)` | Returns `true` if the key exists |
| `remove(key)` | Removes a key; returns `true` or `false` |
| `length()` | Returns the number of keys |
| `keys()` | Returns an array of all keys |
| `clear()` | Removes all keys |
