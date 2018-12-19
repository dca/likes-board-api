
module.exports = {
  "setupTestFrameworkScriptFile": "jest-extended",
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "testPathIgnorePatterns": [
    "<rootDir>/dist/",
    "<rootDir>/node_modules/"
  ],
  "modulePaths": [
    "<rootDir>"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "verbose": true,
  "coverageDirectory": "coverage",
  "collectCoverage": true,
  "coveragePathIgnorePatterns": [
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
    "<rootDir>/test/"
  ],
  "coverageReporters": [
    "lcov"
  ],
  "moduleNameMapper": {
    "@src/(.*)": "<rootDir>/src/$1",
    "@test/(.*)": "<rootDir>/test/$1"
  },
  "globals": {
    "ts-jest": {
    }
  }
}
