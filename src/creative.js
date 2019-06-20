module.exports = {
  list: order => `creative/list?order=${order}`,
  matches: islandCode => `creative/get?id=${islandCode}`,
  statsv1: islandCode => `creative/fetch?id=${islandCode}`,
  statsv2: islandCode => `creative/add?id=${islandCode}`,
};
