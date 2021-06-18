const parseLabels = (arr) => {
  return [... new Set(arr)];
}

export default parseLabels;