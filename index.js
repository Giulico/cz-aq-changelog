"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('conventional-commit-types');

delete conventionalCommitTypes.types.ci; // Useless
delete conventionalCommitTypes.types.chore; // Useless
delete conventionalCommitTypes.types.test; // Use feature
delete conventionalCommitTypes.types.perf; // Use refactor
delete conventionalCommitTypes.types.fix; // Use refactor

conventionalCommitTypes.types.refactor.description = "Changes to fix bugs, improve performance and tests";
conventionalCommitTypes.types.style.description = "Changes that affect the style of your appication (scss, formatting, ecc)";
conventionalCommitTypes.types.build.description = "Changes that affect the build system or external dependencies (Webpack, npm, git, ecc)";

console.log(conventionalCommitTypes.types);

module.exports = engine({
  types: conventionalCommitTypes.types
});
