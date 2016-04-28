import chai from 'chai';

import nest from '../../src/lib/nest';

/* eslint-disable prefer-arrow-callback, func-names */

chai.should();

describe('nest', function () {
  it('returns a nested, breadth-first view of the sitemap', function () {
    nest(
    'url1',
      {
        url1: {
          links: ['url2', 'url5'],
          assets: ['url4', 'url5'],
        },
        url2: {
          links: ['url1', 'url3'],
          assets: ['foo'],
        },
        url3: {
          links: ['url4'],
          assets: [],
        },
        url4: {
          links: [],
          assets: [],
        },
        url5: {
          links: ['url4'],
          assets: [],
        },
      }).should.eql({
        url1: {
          url2: {
            url3: {},
          },
          url5: {
            url4: {},
          },
        },
      });
  });
});
