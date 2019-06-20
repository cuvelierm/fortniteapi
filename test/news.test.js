import news from '../lib/news';
import assert from 'assert';

describe('news', () => {
  it('should be an object', () => {
    assert.strictEqual(typeof news, 'object');
  });
  it('should have keys', () => {
    assert.deepEqual(Object.keys(news).sort(), ['br', 'stw'].sort());
  });
  describe('br', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof news.br, 'function');
    });
    it('should return', () => {
      assert.strictEqual(news.br(), 'br_motd/get');
    });
  });
  describe('stw', () => {
    it('should be a function', () => {
      assert.strictEqual(typeof news.stw, 'function');
    });
    it('should return', () => {
      assert.strictEqual(news.stw(), 'stw_motd/get');
    });
  });
});
