const Expect = require('chai').expect;
const CreateLink = require('./create-link');

describe('create-link', function() {
  it('create a link tag without attributes', function() {
    const output = CreateLink('foo', 'https://bar.uk');
    Expect(output).to.equal('<a href="https://bar.uk">foo</a>');
  });

  it('create a link tag with attributes', function() {
    const output = CreateLink('foo', 'https://bar.uk', { target: '_blank' });
    Expect(output).to.equal('<a href="https://bar.uk" target="_blank">foo</a>');
  });
});