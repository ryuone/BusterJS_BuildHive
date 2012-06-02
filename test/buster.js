/**
 * User: ryuone
 * Date: 12/06/03
 * License: MIT License
 */
var config = module.exports;

config["My node tests"] = {
    rootPath: "../",
    environment: "browser", // "browser" or "node"
    sources: [
        "src/base.js"
    ],
    tests: [
        "test/*test.js"
    ]
};
