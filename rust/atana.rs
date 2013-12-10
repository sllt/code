use std::float;
use std::num::atan;

fn angle(vector: (float,float)) -> float {
    let pi = float::consts::pi;
    match vector {
      (0f, y) if y < 0f => 1.5 * pi,
      (0f ,y) => 0.5*pi,
      (x, y) => atan(y/x)
    }

}

fn main() {
    let a=(5.0f,6.0f);
    let k = angle(a);

    println(fmt!("%f",k));
    let mut x = 5u;
    loop {
      x += x-3;
      if x % 5 == 0 { break ;}

      println(x.to_str());
    }
}
