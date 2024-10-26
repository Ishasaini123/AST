const { expect } = require('chai');
const ASTParser = require('../src/astParser');
const RuleEvaluator = require('../src/ruleEvaluator');

describe('RuleEvaluator', () => {
  it('should evaluate a rule AST against data correctly', () => {
    const rule = "data.age > 30";
    const ast = ASTParser.createRule(rule);
    const data = { age: 35 };
    const result = RuleEvaluator.evaluateRule(ast, data);
    expect(result).to.be.true;
  });
});
