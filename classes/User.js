export default class User {
  constructor(details) {
    this.firstname = details.firstname;
    this.lastname = details.lastname;
  }

  get name() {
    return `${this.firstname} ${this.lastname}`;
  }

  userDescription() {
    return `This is a short description of the user: ${this.name}`;
  }
}
