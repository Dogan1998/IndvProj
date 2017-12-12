const assert = require('assert');
const Show = require('../model/show.model');

describe('Updating records', () => {
  let show;

  beforeEach((done) => {
    show = new Show({ time: 'test' });
    show.save()
      .then(() => done());
  });

  function assertDescription(operation, done) {
    operation
    .then(() => Show.find({}))
    .then((shows) => {
      assert(shows.length === 1);
      assert(shows[0].name === 'test');
      done();
    });
  }

  it('instance type using set and save', (done) => {
    show.set('time', 'test');
    assertDescription(show.save(), done());

  });

  it('A model instance can update', (done) => {
    assertDescription(show.update({ time: 'test'}), done());
  });

  it('A model class can update', (done) => {
    assertDescription(
      Show.update({ time: 'test' }, { time: 'test2' }),
      done()
    );
  });

  it('A model class can update one record', (done) => {
    assertDescription(
      Show.findOneAndUpdate({ time: 'test' }, { time: 'test2' }),
      done()
    );
  });

  it('A model class can find a record with an Id and update', (done) => {
    assertDescription(
    	Show.findByIdAndUpdate(show._id, { time: 'test' }),
      done()
    );
  });
});