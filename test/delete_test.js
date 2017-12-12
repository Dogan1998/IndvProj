const assert = require('assert');
const Show = require('../model/show.model');

describe('Deleting an show', () => {
  let show;

  beforeEach((done) => {
    show = new Show({ time: '13' });
    show.save()
      .then(() => done());
  });

  it('model instance remove', (done) => {
    show.remove()
      .then(() => Show.findOne({ time: '13'}))
      .then((show) => {
        assert(show === null);
        done();
      });
  });

  it('class method remove', (done) => {
    Show.remove({ time: '13'})
      .then(() => Show.findOne({ time: '13'}))
      .then((show) => {
        assert(show === null);
        done();
      });
  });

  it('class method findAndRemove', (done) => {
    Show.findOneAndRemove({ time: '13' })
      .then(() => Show.findOne({ time: '13'}))
      .then((movie) => {
        assert(movie === null);
        done();
    });
  })

  it('class method findByIdAndRemove', (done) => {
    Show.findByIdAndRemove(show._id)
      .then(() => Show.findOne({ tijd: '13'}))
      .then((show) => {
        assert(show === null);
        done();
    });
  });
})