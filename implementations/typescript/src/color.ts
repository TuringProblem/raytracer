import type { Vec3 } from "./vec3";

export type Color = Vec3;
export const writeColor = (color: Color): string => {
  const r: number = color.x;
  const g: number = color.y;
  const b: number = color.z;

  const rByte: number = ~~(255.999 * r);
  const gByte: number = ~~(255.999 * g);
  const bByte: number = ~~(255.999 * b);

  return `${rByte} ${gByte} ${bByte}\n`;
}



