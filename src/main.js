const RuleCombiner = require('./ruleCombiner');
const RuleEvaluator = require('./ruleEvaluator');
const ASTParser = require('./astParser');

const rules = [
  "((age > 30 && department === 'Sales') || (age < 25 && department === 'Marketing')) && (salary > 50000 || experience > 5)",
  "((age > 30 && department === 'Marketing')) && (salary > 20000 || experience > 5)"
];

// Create an instance of ASTParser
const astParser = new ASTParser();

try {
  // Create combined rule AST
  const combinedAST = RuleCombiner.combineRules(rules, astParser);
  
  // Sample user data
  const userData = {
    age: 35,
    department: 'Sales',
    salary: 60000,
    experience: 3
  };

  // Evaluate the combined rule against user data
  const isEligible = RuleEvaluator.evaluateRule(combinedAST, userData);
  console.log(`Is user eligible? ${isEligible}`);
} catch (error) {
  console.error("Error processing rules:", error.message);
}
