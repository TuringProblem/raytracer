// will use this to store the colors, locations, directions, offsets, whatever
// (The book says this is silly - becuase you can do things like subtract a position by a color but we still gonna do it)
export type Point3 = Vec3;
export type Vec3 = {
  readonly x: number;
  readonly y: number;
  readonly z: number;
};

const zero: Vec3 = { x: 0, y: 0, z: 0 };

const vecLength = (vec: Vec3): number => {
  return Math.sqrt(length_squared(vec));
}

const length_squared = (vec: Vec3): number => {
  return Math.pow(vec.x, 2) + Math.pow(vec.y, 2) + Math.pow(vec.z, 2);
}

const near_zero = (vec: Vec3): boolean => {
  const s = 1e-8;
  return (Math.abs(vec.x) < s) && (Math.abs(vec.y) < s) && (Math.abs(vec.z) < s);
}

const dot = (u: Vec3, v: Vec3): number => {
  return u.x * v.x + u.y * v.y + u.z * v.z;
}

const cross = (u: Vec3, v: Vec3): Vec3 => {
  return {
    x: u.y * v.z - u.z * v.y,
    y: u.z * v.x - u.x * v.z,
    z: u.x * v.y - u.y * v.x
  }
}



const unitVector = (vec: Vec3): Vec3 => {
  const length = vecLength(vec);
  return {
    x: vec.x / length,
    y: vec.y / length,
    z: vec.z / length
  }
}

console.log(zero);

export { zero, vecLength, length_squared, near_zero, dot, cross, unitVector };

