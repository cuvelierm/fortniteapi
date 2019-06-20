module.exports = {
  id: username => `users/id?username=${username}`,
  matches: uid => `prod09/users/public/matches_v2?user_id=${uid}`,
  statsv1: uid => `prod09/users/public/br_stats?user_id=${uid}&platform=${platform}`,
  statsv2: uid => `prod09/users/public/br_stats_v2?user_id=${uid}`,
};
