const acorn = require('acorn');

class ASTParser {
  createRule(ruleString) {
    // Check if the rule string is valid
    if (typeof ruleString !== 'string' || !ruleString.trim()) {
      throw new Error("Invalid rule string format");
    }

    // Parse the rule string using acorn
    const ast = acorn.parse(ruleString, { ecmaVersion: 'latest' });

    // Return the parsed AST
    return ast;
  }
}

module.exports = ASTParser;
