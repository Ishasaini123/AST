const { expect } = require('chai');
const ASTParser = require('../src/astParser');
const RuleCombiner = require('../src/ruleCombiner');

describe('RuleCombiner', () => {
  it('should combine multiple rules into a single AST', () => {
    const rule1 = "data.age > 30";
    const rule2 = "data.department === 'Sales'";
    const combinedAST = RuleCombiner.combineRules([rule1, rule2]);
    expect(combinedAST).to.be.an('object');
  });
});
