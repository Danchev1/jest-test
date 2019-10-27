import Model from '../classes/Model';

describe('Model.js', () => {
  let actors;
  beforeEach(() => {
    actors = [
      {
        id: 234,
        name: 'Forest Whitaker',
        oscars: 1
      },
      {
        id: 567,
        name: 'Tom Hanks',
        oscars: 1
      },
      {
        id: 745,
        name: 'Denzel Washington',
        oscars: 2
      }
    ];
  });

  test('Should create instance of Model', () => {
    expect(new Model()).toBeInstanceOf(Model);
  });

  test('Should have a data structure', () => {
    expect(new Model()).toEqual(
      expect.objectContaining({
        $collection: expect.any(Array),
        record: expect.any(Function),
        getAll: expect.any(Function),
        find: expect.any(Function),
        update: expect.any(Function),
        delete: expect.any(Function)
      })
    );
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

  test('Should return a collection', () => {
    let model = new Model(actors);
    expect(model.getAll()).toEqual(actors);
  });

  test('Should find item', () => {
    let model = new Model(actors);
    expect(model.find(567)).toEqual(actors[1]);
  });

  test('Should not find item', () => {
    let model = new Model(actors);
    expect(model.find(999)).toEqual(null);
  });

  test('Should update collection', () => {
    let newEntry = { id: 444, name: 'Johny Depp', oscars: 1 };
    let model = new Model(actors);
    model.update(745, newEntry);
    expect(model.find(444)).toEqual(newEntry);
  });

  test('Should delete item', () => {
    let model = new Model(actors);
    model.delete(745);
    expect(model.find(745)).toBeNull();
    expect(model.$collection.length).toBe(2);
  });
});
