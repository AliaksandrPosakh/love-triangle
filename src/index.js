/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  preferences.forEach (function(value, index) {
    if (preferences[preferences[preferences[index]-1]-1] == index+1) {
       count++;
    }
    if (preferences[index] - 1 == index) {
      count--;
    }
  })
  count/=3;
  return count;
}
