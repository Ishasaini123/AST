const { expect } = require('chai');
const ASTParser = require('../src/astParser');

describe('ASTParser', () => {
  it('should create a valid AST from a rule string', () => {
    const rule = "data.age > 30";
    const ast = ASTParser.createRule(rule);
    expect(ast).to.be.an('object');
  });
});
