const test = require('tape')
const levenshteinDistance = require('../levenshtein')

test('levenshtein', function (t) {
  'use strict'

  t.plan(13)

  t.equal(levenshteinDistance(), null)
  t.equal(levenshteinDistance({}, 'foo'), null)
  t.equal(levenshteinDistance('ab', []), null)
  t.equal(levenshteinDistance(4), null)
  t.equal(levenshteinDistance(45, 55), 1)
  t.equal(levenshteinDistance(55, 55), 0)
  t.equal(levenshteinDistance(3, 123), 2)
  t.equal(levenshteinDistance('foo', 'foo'), 0)
  t.equal(levenshteinDistance('foo', 'fob'), 1)
  t.equal(levenshteinDistance('flaw', 'lawn'), 2)
  t.equal(levenshteinDistance('kitten', 'sitting'), 3)
  t.equal(levenshteinDistance('foobar', 'fudbaz'), 3)
  t.equal(levenshteinDistance('asdf', 'qwerasd'), 5)
})
