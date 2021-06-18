const parseUniqueCount = (arr) => {
  const counts = {};
  arr.forEach((job) => {
    var num = job;
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  });
  return counts;
}

export default parseUniqueCount;