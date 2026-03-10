class HashSet {
	constructor(loadFactor = 0.75, capacity = 16) {
		this._map = new HashMap(loadFactor, capacity);
	}

	add(key) {
		this._map.set(key, true);
	}

	has(key) {
		return this._map.has(key);
	}

	remove(key) {
		return this._map.remove(key);
	}

	length() {
		return this._map.length();
	}
}

export { HashSet };