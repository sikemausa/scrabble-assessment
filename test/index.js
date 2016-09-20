const assert = require('chai').assert;
import Game from '../lib/components/Game.js';

describe('Test suite', function(){
  it('should work', function(){
      assert.equal(1,1);
  });
});

describe('scoreWord', function(){
  it('should be a function', function(){
    let game = new Game();
    assert.isFunction(game.scoreWord);
  });

  it('should return an 8 for  "hello"', function(){
    let game = new Game();
    let score = game.scoreWord("hello");
    assert.equal(score, 8);

  });

  it('should return 0 for and empty string or a non-string', function(){
    let game = new Game();
    let score = game.scoreWord("");
    assert.equal(score, 0);
  });

  it('should strip any whitespace from the word', function(){
    let game = new Game();
    let score = game.scoreWord("H    I S   T   E   V   E");
    assert.equal(score, 13);
  });

  it('should take a second argument as a multiplier', function(){
    let game = new Game();
    let score = game.scoreWord("hello", 2);
    assert.equal(score, 16);
  });
});
