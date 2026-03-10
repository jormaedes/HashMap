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
}

export { HashSet };