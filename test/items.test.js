import items from '../lib/items';
import assert from 'assert';

describe('items', () => {
  it('should be an object', () => {
    assert.strictEqual(typeof items, 'object');
  });
  it('should have keys', () => {
    assert.deepEqual(
      Object.keys(items).sort(),
      ['store', 'upcoming', 'list', 'random', 'popular', 'id'].sort(),
    );
  });
  describe('store', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof items.store, 'function');
    });
    it('should return', () => {
      assert.strictEqual(items.store(), 'store/get');
    });
  });
  describe('upcoming', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof items.upcoming, 'function');
    });
    it('should return', () => {
      assert.strictEqual(items.upcoming(), 'upcoming/get');
    });
  });
  describe('list', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof items.list, 'function');
    });
    it('should return', () => {
      assert.strictEqual(items.list(), 'items/list');
    });
  });
  describe('random', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof items.random, 'function');
    });
    it('should return', () => {
      assert.strictEqual(items.random(), 'items/random');
    });
  });
  describe('popular', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof items.popular, 'function');
    });
    it('should return', () => {
      assert.strictEqual(items.popular(), 'items/popular');
    });
  });
  describe('id', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof items.id, 'function');
    });
    it('should return', () => {
      const random = Math.random(0, 100000000);
      assert.strictEqual(items.id(random), `item/get?id=${random}`);
    });
  });
});
