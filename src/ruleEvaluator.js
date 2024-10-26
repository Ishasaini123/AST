class RuleEvaluator {
  static evaluateRule(ast, data) {
    if (!ast || !ast.body || ast.body.length === 0) {
      return false;
    }

    const evaluateNode = (node) => {
      if (node.type === 'Literal') {
        return node.value; // Return the literal value
      } else if (node.type === 'Identifier') {
        // Return the value from data object
        if (data.hasOwnProperty(node.name)) {
          return data[node.name];
        } else {
          throw new Error(`Identifier "${node.name}" is not defined in data`);
        }
      } else if (node.type === 'MemberExpression') {
        // Accessing properties from the data object
        const object = evaluateNode(node.object); // Assuming it's the data object
        return object[node.property.name]; // Return the value of the property
      } else if (node.type === 'BinaryExpression') {
        const left = evaluateNode(node.left);
        const right = evaluateNode(node.right);
        switch (node.operator) {
          case '>': return left > right;
          case '<': return left < right;
          case '===': return left === right;
          case '!==': return left !== right;
          case '>=': return left >= right;
          case '<=': return left <= right;
          default: throw new Error(`Unsupported operator: ${node.operator}`);
        }
      } else if (node.type === 'LogicalExpression') {
        const left = evaluateNode(node.left);
        const right = evaluateNode(node.right);
        switch (node.operator) {
          case '&&': return left && right;
          case '||': return left || right;
          default: throw new Error(`Unsupported logical operator: ${node.operator}`);
        }
      } else {
        throw new Error(`Unsupported node type: ${node.type}`);
      }
    };

    return evaluateNode(ast.body[0].expression); // Evaluate the root expression of the AST
  }
}

module.exports = RuleEvaluator;
