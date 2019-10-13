import Model from '../classes/Model';

describe('Model.js', () => {
  let actors;
  beforeEach(() => {
    actors = ['Forest Gump', 'Forest Whitaker'];
  });
  test('Should create instance', () => {
    expect(new Model()).toBeInstanceOf(Model);
  });

  test('Should have a data structure', () => {
    expect(new Model()).toEqual(expect.objectContaining({
      $collection: expect.any(Array),
      record: expect.any(Function),
      getAll: expect.any(Function),
      find: expect.any(Function),
      update: expect.any(Function)
    }));
  });

  test('`record` should add a new item to collection', () => {
    let model = new Model();
    model.record(actors[1]);
    expect(model.$collection).toEqual([actors[1]]);
  });

  test('Should have data when called', () => {
    let model = new Model(actors);
    expect(model.$collection).toEqual(actors);
  });

  test('Should return an empty collection', () => {
    let model = new Model();
    expect(model.getAll()).toEqual([]);
  });

  test('Should return an empty collection', () => {
    let model = new Model(actors);
    expect(model.getAll()).toEqual(actors);
  });

  test('Should find item', () => {
    let model = new Model(actors);
    expect(model.find('Forest Gump')).toBe('Forest Gump');
  });
  test('Should not find item', () => {
    let model = new Model(actors);
    expect(model.find('Forest')).toBe(undefined);
  });

  test('Should update collection', () => {
    let model = new Model(actors);
    expect(model.update('Jimmy Kimmel', 1)).toEqual('Jimmy Kimmel');
  });
});
