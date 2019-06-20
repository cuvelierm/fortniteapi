import voting from '../src/voting';
import assert from 'assert';

describe('voting', () => {
  it('should be an object', () => {
    assert.strictEqual(typeof voting, 'object');
  });
  it('should have keys', () => {
    assert.deepEqual(Object.keys(voting).sort(), ['list', 'item', 'update'].sort());
  });
  describe('list', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof voting.list, 'function');
    });
    it('should return', () => {
      assert.strictEqual(voting.list(), 'voting/list');
    });
  });
  describe('item', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof voting.item, 'function');
    });
    it('should return', () => {
      assert.strictEqual(
        voting.item('abcdef123456abcdef', 5),
        'voting/vote?itemid=abcdef123456abcdef&stars=5',
      );
    });
  });
  describe('update', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof voting.update, 'function');
    });
    it('should return', () => {
      assert.strictEqual(
        voting.update('abcdef123456abcdef', 5, '123456abcdef123456'),
        'voting/vote?itemid=abcdef123456abcdef&stars=5&votingId=123456abcdef123456',
      );
    });
  });
});
