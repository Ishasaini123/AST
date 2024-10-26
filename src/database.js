const mysql = require('mysql2/promise');
require('dotenv').config();

class Database {
  constructor() {
    this.connection = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }

  async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS rules (
        rule_id INT AUTO_INCREMENT PRIMARY KEY,
        rule_string TEXT NOT NULL,
        rule_ast JSON NOT NULL
      )
    `;
    await this.connection.execute(query);
  }

  async insertRule(ruleString, ruleAst) {
    const query = `INSERT INTO rules (rule_string, rule_ast) VALUES (?, ?)`;
    await this.connection.execute(query, [ruleString, JSON.stringify(ruleAst)]);
  }
}

module.exports = Database;
