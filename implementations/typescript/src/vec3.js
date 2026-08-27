"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitVector = exports.cross = exports.dot = exports.near_zero = exports.length_squared = exports.vecLength = exports.zero = void 0;
var zero = { x: 0, y: 0, z: 0 };
exports.zero = zero;
var vecLength = function (vec) {
    return Math.sqrt(length_squared(vec));
};
exports.vecLength = vecLength;
var length_squared = function (vec) {
    return Math.pow(vec.x, 2) + Math.pow(vec.y, 2) + Math.pow(vec.z, 2);
};
exports.length_squared = length_squared;
var near_zero = function (vec) {
    var s = 1e-8;
    return (Math.abs(vec.x) < s) && (Math.abs(vec.y) < s) && (Math.abs(vec.z) < s);
};
exports.near_zero = near_zero;
var dot = function (u, v) {
    return u.x * v.x + u.y * v.y + u.z * v.z;
};
exports.dot = dot;
var cross = function (u, v) {
    return {
        x: u.y * v.z - u.z * v.y,
        y: u.z * v.x - u.x * v.z,
        z: u.x * v.y - u.y * v.x
    };
};
exports.cross = cross;
var unitVector = function (vec) {
    var length = vecLength(vec);
    return {
        x: vec.x / length,
        y: vec.y / length,
        z: vec.z / length
    };
};
exports.unitVector = unitVector;
console.log(zero);
