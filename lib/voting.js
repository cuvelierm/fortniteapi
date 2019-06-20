module.exports = {
  list: () => `voting/list`,
  item: (itemid, stars) => `voting/vote?itemid=${itemid}&stars=${stars}`,
  update: (itemid, votingid, stars) => `voting/vote?itemid=${itemid}&stars=${stars}&votingId=${votingid}`,
};
