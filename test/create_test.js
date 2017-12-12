const assert = require('assert');
const Show = require('../model/show.model');

describe('Creating records', () => {
    it('saves a show', (done) => {
      const showtest = new Show({ time: '13:00'});

      showtest.save()
        .then(() => {
          assert(!showtest.isNew);
          done();
        });
    });
});


