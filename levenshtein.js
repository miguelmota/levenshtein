;(function(root) {
  'use strict'

  /*
   * @credit https://en.wikipedia.org/wiki/Levenshtein_distance#Recursive
   *
   * Inefficient implementation, for learning purposes.
   */
  function f(s, sl, t, tl) {
    if (sl === 0) {
      return tl
    }

    if (tl === 0) {
      return sl
    }

    var cost = 1

    if (s[sl-1] === t[tl-1]) {
      cost = 0
    }

    return Math.min(
      f(s, sl-1, t, tl-1) + 1 ,
      f(s, sl, t, tl-1) + 1,
      f(s, sl-1, t, tl-1) + cost
    )
  }

  function levenshtein(s, t) {
    if (typeof s === 'number' && !isNaN(s)) {
      s = s.toString()
    }

    if (typeof t === 'number' && !isNaN(t)) {
      t = t.toString()
    }

    if (!(typeof s === 'string' && typeof t === 'string')) {
      return null
    }

    return f(s, s.length, t, t.length)
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = levenshtein
    }
    exports.levenshtein = levenshtein
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return levenshtein
    })
  } else {
    root.levenshtein = levenshtein
  }

})(typeof window === 'object' ? window : this);
