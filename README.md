# Levenshtein distance

> Calculate the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) between two strings.

The Levenshtein distance between two strings is the minimum number of single-character edits (insertions, deletions or substitutions) required to change one string into the other.

# Demo

[https://lab.miguelmota.com/levenshtein](https://lab.miguelmota.com/levenshtein)

# Install

```bash
npm install levenshteinjs
```

# Usage

```javascript
const levenshteinDistance = require('levenshteinjs');

console.log(levenshteinDistance('foo', 'foo')) // 0
console.log(levenshteinDistance('foo', 'fob')) // 1
console.log(levenshteinDistance('flaw', 'lawn')) // 2
console.log(levenshteinDistance('kitten', 'sitting')) // 3
```

# Test

```bash
npm test
```

# License

MIT
