const path = require('path');
const assert = require('assert');
const { default: Joker } = require('@amilajack/joker');

describe('todo add', () => {
    it('adds a new todo item', async () => {
      await new Joker()
      .run('node --version')
      .stdout('v12.13.0')
      .end();
    });
  });