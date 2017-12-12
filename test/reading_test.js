const assert = require('assert');
const Show = require('../model/show.model');

describe('Reading movies out of the database', () => {
  let film, film2;

  beforeEach((done) => {
    film = new Show({ time: '1' });
    film2 = new Show({ time: '2' });
 

    Promise.all([film.save(), film2.save()])
      .then(() => done());
  });

  it('finds all flims with time 1', (done) => {
    Show.find({ time: '1' })
      .then((show) => {
        assert(show[0]._id.toString() === film._id.toString());
        done();
      });
  });

  // it('find a film with a particular id', (done) => {
  //   Show.findOne({ _id: film._id })
  //     .then((show) => {
  //       assert(show.tijd === '1');
  //       done();
  //     });
  // });

  // it('can skip and limit the result set', (done) => {
  //   Show.find({})
  //     .sort({ time: 1 })
  //     .skip(1)
  //     .limit(2)
  //     .then((show) => {
  //       assert(show.length === 5);
  //       assert(show[0].title === 'film1');
  //       assert(show[1].title === 'film2');
  //       done();
  //     })
  // });
});