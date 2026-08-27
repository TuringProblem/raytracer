import { initVec3 } from "./vec3.js";
import { writeColor } from "./color.js";
var main = function() {
  var image_width = 256;
  var image_height = 256;
  console.log("P3\n".concat(image_width, " ").concat(image_height, "\n255"));
  for (var j = 0; j < image_height; j++) {
    for (var i = 0; i < image_width; i++) {

      const color = initVec3((i / (image_width - 1)), (j / (image_height - 1)), 0.0);
      writeColor(color);

      var ir = ~~(255.999 * r);
      var ig = ~~(255.999 * g);
      var ib = ~~(255.999 * b);
      console.log("".concat(ir, " ").concat(ig, " ").concat(ib));
    }
  }
};
main();
