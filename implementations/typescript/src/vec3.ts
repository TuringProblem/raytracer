// ADT 
type Vec3 = {
  readonly x: number;
  readonly y: number;
  readonly z: number;
};
const zero: Vec3 = { x: 0, y: 0, z: 0 };
const length = (vec: Vec3): number => {
  return Math.sqrt(length_squared(vec));
}

const length_squared = (vec: Vec3): number => {
  return Math.pow(vec.x, 2) + Math.pow(vec.y, 2) + Math.pow(vec.z, 2);
}

const near_zero = (vec: Vec3): boolean => {
  const s = 1e-8;
  return (Math.abs(vec.x) < s) && (Math.abs(vec.y) < s) && (Math.abs(vec.z) < s);
}

const random = (): Vec3 => {
  return { Math.radom() }
}

console.log(zero);
