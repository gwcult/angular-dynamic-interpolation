export class MultiMap<K, V> {
    #map = new Map<K, V[]>();

    push(key: K, val: V) {
        if (!this.#map.has(key)) {
            this.#map.set(key, []);
        }
        this.#map.get(key)?.push(val);
    }

    delete(key: K, val: V) {
        const arr = this.#map.get(key) || [];
        const index = arr.indexOf(val);
        if (index !== -1) {
            
            arr.splice(index, 1);
        }
        if (arr.length === 0) {
            this.#map.delete(key)
        }
    }

    getAll(key: K): V[] {
        return this.#map.get(key) || [];
    }
}