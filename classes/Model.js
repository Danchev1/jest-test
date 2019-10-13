export default class Model {
  constructor(data = []) {
    this.$collection = data;
  }

  record(item) {
    Array.isArray(item) ? this.$collection.push(...item) : this.$collection.push(item);
  }

  getAll() {
    return this.$collection.map(item => item);
  }

  find(item) {
    return this.$collection.find(record => record === item);
  }

  update(item, index) {
    return this.$collection[index] = item;
  }

}
