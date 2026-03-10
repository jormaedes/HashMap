class HashSet {
	constructor(loadFactor = 0.75, capacity = 16) {
		this._map = new HashMap(loadFactor, capacity);
	}
}

export { HashSet };