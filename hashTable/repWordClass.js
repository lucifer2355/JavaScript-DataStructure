class HashTable {
  constructor() {
    this.size = 1000;
    this.buckets = Array(1000).fill(null);
  }

  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    this.buckets[keyHash] = value;
  }

  get(key) {
    const keyHash = this.hash(key);
    return this.buckets[keyHash];
  }
}

const word = "hello";

function findFirstRep(str) {
  const table = new HashTable();
  for (const char of str) {
    if (table.get[char]) {
      return char;
    }

    table.set(char, 1);
  }
}

//! T => O(n)

console.log(findFirstRep(word));
