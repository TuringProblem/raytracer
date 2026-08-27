import { zero } from "./vec3";

const main = () => {

  const image_width: number = 256;
  const image_height: number = 256;



  console.log(`P3\n${image_width} ${image_height}\n255`);
  for (let j = 0; j < image_height; j++) {
    for (let i = 0; i < image_width; i++) {
      const r: number = i / (image_width - 1);
      const g: number = j / (image_height - 1);
      const b: number = 0.0;

      const ir: number = ~~(255.999 * r);
      const ig: number = ~~(255.999 * g);
      const ib: number = ~~(255.999 * b);

      console.log(`${ir} ${ig} ${ib}`)
    }
  }
}


main();
