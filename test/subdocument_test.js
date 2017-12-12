// const assert = require('assert');
// const Show = require('../model/show.model');

// describe('Subdocuments', () => {
//   it('can create a subdocument', (done) => {
//     const testShow = new Show({
//       time: '13:00',
//       movie: { name: 'test' }
//     });

//     testShow.save()
//       .then(() => Show.findOne({ time: '13:00' }))
//       .then((show) => {
//         assert(show.movie === 'test');
//         done();
//       });
//   });

  


//     it('Can add subdocuments to an existing record', (done) => {
//       const testShow = new Show({
//         time: '13:00',
//         movie: {}
//       });
  
//       testShow.save()
//         .then(() => Show.findOne({ time: '13:00' }))
//         .then((show) => {
//           show.movie.set({ movie: 'test'});
//           return show.save();
//         })
//         .then(() => Show.findOne({ time: '13:00'}))
//         .then((show) => {
//           assert(show.movie.name === 'test');
//           done();
//         });
//     });
  
//     it('can remove an existing subdocument', (done) => {
//       const testShow = new Show({
//         time: '13:00',
//         movie: { name: 'test'}
//       });
  
//       testShow.save()
//         .then(() => Show.findOne({time: '13:00'}))
//         .then((show) => {
//           show.movie.remove();
//           return show.save();
//         })
//         .then(() => Show.findOne({ time: '13:00'}))
//         .then((show) => {
//           assert(show.movie === null);
//           done();
//         });
//     });
//   });