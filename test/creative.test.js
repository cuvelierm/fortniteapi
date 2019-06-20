import creative from '../lib/creative';
import assert from 'assert';

describe('creative', () => {
  it('should be an object', () => {
    assert.strictEqual(typeof creative, 'object');
  });
  it('should have keys', () => {
    assert.deepEqual(
      Object.keys(creative).sort(),
      ['list', 'matches', 'statsv1', 'statsv2'].sort(),
    );
  });
  describe('list', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof creative.list, 'function');
    });
    it('should return', () => {
      assert.strictEqual(
        creative.list('abcdef123456abcdef'),
        'creative/list?order=abcdef123456abcdef',
      );
    });
  });
  describe('matches', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof creative.matches, 'function');
    });
    it('should return', () => {
      assert.strictEqual(
        creative.matches('abcdef123456abcdef'),
        'creative/get?id=abcdef123456abcdef',
      );
    });
  });
  describe('statsv1', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof creative.statsv1, 'function');
    });
    it('should return', () => {
      assert.strictEqual(
        creative.statsv1('abcdef123456abcdef'),
        'creative/fetch?id=abcdef123456abcdef',
      );
    });
  });
  describe('statsv2', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof creative.statsv2, 'function');
    });
    it('should return', () => {
      assert.strictEqual(
        creative.statsv2('abcdef123456abcdef'),
        'creative/add?id=abcdef123456abcdef',
      );
    });
  });
});
