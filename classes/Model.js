export default class Model {
  constructor(data = []) {
    this.$collection = data;
  }

  record(item) {
    Array.isArray(item) && this.$collection.push(...item);
    Object.prototype.toString.call(item) === '[object Object]' &&
      this.$collection.push(item);
  }

  getAll() {
    return this.$collection.map(item => JSON.parse(JSON.stringify(item)));
  }

  find(id) {
    let found = this.$collection.find(record => record.id === id);
    return found ? JSON.parse(JSON.stringify(found)) : null;
  }

  update(id, newValue) {
    let index = this.$collection.findIndex(item => item.id === id);
    this.$collection[index] = newValue;
  }

  delete(id) {
    let index = this.$collection.findIndex(item => item.id === id);
    this.$collection.splice(index, 1);
  }
}
