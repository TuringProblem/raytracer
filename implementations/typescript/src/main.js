"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vec3_1 = require("./vec3");
var main = function () {
    var values = vec3_1.zero;
    console.log(values);
    var image_width = 256;
    var image_height = 256;
    console.log("P3\n".concat(image_width, " ").concat(image_height, "\n255"));
    for (var j = 0; j < image_height; j++) {
        for (var i = 0; i < image_width; i++) {
            var r = i / (image_width - 1);
            var g = j / (image_height - 1);
            var b = 0.0;
            var ir = ~~(255.999 * r);
            var ig = ~~(255.999 * g);
            var ib = ~~(255.999 * b);
            console.log("".concat(ir, " ").concat(ig, " ").concat(ib));
        }
    }
};
main();
