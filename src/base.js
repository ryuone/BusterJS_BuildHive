/**
 * User: ryuone
 * Date: 12/06/03
 * License: MIT License
 */
function twice(x){
    return x * 2;
}

if (typeof require === "function" && typeof module !== "undefined") {
    module.exports.twice = twice;
}