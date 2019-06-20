import challenges from '../src/challenges';
import assert from 'assert';

describe('challenges', () => {
  it('should be an object', () => {
    assert.strictEqual(typeof challenges, 'object');
  });
  it('should have keys', () => {
    assert.deepEqual(Object.keys(challenges).sort(), ['list'].sort());
  });
  describe('list', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof challenges.list, 'function');
    });
    it('should return', () => {
      assert.strictEqual(challenges.list(), 'challenges/get?season=current');
    });
  });
});
