import weapons from '../lib/weapons';
import assert from 'assert';

describe('weapons', () => {
  it('should be an object', () => {
    assert.strictEqual(typeof weapons, 'object');
  });
  it('should have keys', () => {
    assert.deepEqual(Object.keys(weapons).sort(), ['list'].sort());
  });
  describe('list', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof weapons.list, 'function');
    });
    it('should return', () => {
      assert.strictEqual(weapons.list(), 'weapons/get');
    });
  });
});
