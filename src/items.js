module.exports = {
  store: () => 'store/get',
  upcoming: () => 'upcoming/get',
  list: () => 'items/list',
  random: () => 'items/random',
  popular: () => 'items/popular',
  id: itemid => `item/get?id=${itemid}`,
};
