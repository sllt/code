fn main() {
    let x=signum(3);

    println(fmt!("%d",x));

    match x {
    0 => println("hello world !"),
    1 => println("test"),
    -1 => println("1111"),
    _ => println("ddddd")
    
    }

}

fn signum(x: int) -> int {

  if x <0 { -1 }
  else if x>0 { 1 }
  else { 0 }
}
