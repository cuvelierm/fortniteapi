import request from 'request';
import challenges from './challenges';
import creative from './creative';
import items from './items';
import news from './news';
import users from './users';
import voting from './voting';
import weapons from './weapons';

let token = process.env.FORTNITEAPI_TOKEN || 'notDefinedYet';
let hardThrowErrors = true;
const basePath = 'https://fortnite-api.theapinetwork.com';
/**
 * Authenticates all future requests using this token
 * @param {String} authorizationToken Authorization token which can be found on https://console.fortniteapi.com
 */
const init = ({ authorizationToken, throwErrors = true }) => {
  token = authorizationToken;
  hardThrowErrors = throwErrors;
};

const convertToCalledPaths = paths => {
  const keys = Object.keys(paths);
  const callableKeys = keys.map(key => (...args) => {
    const urlForPath = key(args);
    const url = basePath + urlForPath;
    return request(
      { method: 'GET', url, headers: { Authorization: token } },
      (error, response, body) => {
        if (error && hardThrowErrors) throw new Error(error);
        if (error && !hardThrowErrors) return error;
        return body;
      },
    );
  });
  return callableKeys;
};

module.exports = {
  init,
  token,
  challenges: convertToCalledPaths(challenges),
  creative: convertToCalledPaths(creative),
  items: convertToCalledPaths(items),
  news: convertToCalledPaths(news),
  users: convertToCalledPaths(users),
  voting: convertToCalledPaths(voting),
  weapons: convertToCalledPaths(weapons),
};
