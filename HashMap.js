class HashMap {
	constructor(loadFactor = 0.75, capacity = 16) {
		this.loadFactor = loadFactor;
		this.capacity = capacity;
		this.buckets = new Array(this.capacity).fill(null).map(() => ([]));
		this.size = 0;
	}

	hash(key) {
		let hashCode = 0;
		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
		}
		return hashCode;
	}

	_getBucket(index) {
		if (index < 0 || index >= this.buckets.length) {
			throw new Error("Trying to access index out of bounds");
		}
		return this.buckets[index];
	}

	_grow() {
		const allEntries = this.buckets.flat();
		this.capacity *= 2;
		this.buckets = new Array(this.capacity).fill(null).map(() => []);
		this.size = 0;

		for (const [key, value] of allEntries) {
			this.set(key, value);
		}
	}

	set(key, value) {
		const index = this.hash(key);
		const bucket = this._getBucket(index);

		const exists = bucket.find((e) => e[0] === key);
		if (exists) {
			exists[1] = value;
			return;
		}

		bucket.push([key, value]);
		this.size++;

		if (this.size / this.capacity > this.loadFactor) {
			this._grow();
		}
	}

	get(key) {
		const index = this.hash(key);
		const bucket = this._getBucket(index);
		const entry = bucket.find((e) => e[0] === key);
		return entry ? entry[1] : null;
	}

	has(key) {
		const index = this.hash(key);
		const bucket = this._getBucket(index);
		return bucket.some((e) => e[0] === key);
	}

	remove(key) {
		const index = this.hash(key);
		const bucket = this._getBucket(index);
		const entryIndex = bucket.findIndex((e) => e[0] === key);

		if (entryIndex === -1) return false;

		bucket.splice(entryIndex, 1);
		this.size--;
		return true;
	}
}