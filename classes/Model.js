export default class Model {
  constructor(data = []) {
    this.$collection = this.record(data);
  }

  record(item) {
    Array.isArray(item) || this.$collection.push(...item);
    Object.prototype.toString.call(item) === '[object Object]' || this.$collection.push(item);
  }

  getAll() {
    return this.$collection.map(item => this.bufferCopy(item));
  }

  find(id) {
    let found = this.$collection.find(record => record.id === id);
    return found ? this.bufferCopy(found) : null;
  }

  update(id, newValue) {
    return this.find(id).value = newValue;
  }

  bufferCopy(item) {
    return JSON.parse(JSON.stringify(item))
  }

}
