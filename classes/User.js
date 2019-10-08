export default class User {
  constructor(details) {
    let { firstname, lastname } = details;
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get name() {
    return `${this.firstname} ${this.lastname}`;
  }

  userDescription() {
    return `This is a short description of the user: ${this.name}`
  }

}
