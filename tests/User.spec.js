import User from '../classes/User';

describe('User.js', () => {
  test('Should return full name', () => {
    let user = new User({
      firstname: 'Shoolboy',
      lastname: 'Q'
    });

    expect(user.name).toBe('Shoolboy Q');
  });

  test('Should match user description', () => {
    let userDesc = new User({
      firstname: 'John',
      lastname: 'Whick'
    }).userDescription();

    expect(userDesc).toMatchSnapshot();
  });
});
