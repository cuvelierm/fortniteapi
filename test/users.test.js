import users from '../lib/users';
import assert from 'assert';

describe('users', () => {
  it('should be an object', () => {
    assert.strictEqual(typeof users, 'object');
  });
  it('should have keys', () => {
    assert.deepEqual(Object.keys(users).sort(), ['id', 'matches', 'statsv1', 'statsv2'].sort());
  });
  describe('id', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof users.id, 'function');
    });
    it('should return', () => {
      assert.strictEqual(users.id('abcdef123456abcdef'), 'users/id?username=abcdef123456abcdef');
    });
  });
  describe('matches', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof users.matches, 'function');
    });
    it('should return', () => {
      assert.strictEqual(
        users.matches('abcdef123456abcdef'),
        'prod09/users/public/matches_v2?user_id=abcdef123456abcdef',
      );
    });
  });
  describe('statsv1', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof users.statsv1, 'function');
    });
    it('should return', () => {
      assert.strictEqual(
        users.statsv1('abcdef123456abcdef', 'pc'),
        'prod09/users/public/br_stats?user_id=abcdef123456abcdef&platform=pc',
      );
    });
  });
  describe('statsv2', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof users.statsv2, 'function');
    });
    it('should return', () => {
      assert.strictEqual(
        users.statsv2('abcdef123456abcdef'),
        'prod09/users/public/br_stats_v2?user_id=abcdef123456abcdef',
      );
    });
  });
});
