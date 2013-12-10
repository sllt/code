rust基本语法学习
----------------------------

参考内容: (The Rust Language
Tutorial)[http://static.rust-lang.org/doc/0.8/tutorial.html]

rust版本:0.8


第一个rust程序
保存hello.rs

    fn main() {
        println("hello world !");
    }

编译：``rustc hello.rs``

基本类型：

    let a = 1;       // 默认int类型
    let b = 10i;     // int
    let c = 100u;    // uint
    let d = 1000i32; // 32位int
类型转换：
    let x: float = 4.0;
    let y: uint = x as uint;
    assert!(y == 4u);

格式化字符串：``println(fmt!("%s is %d", "the answer", 43));``

if语句：

    fn main() {
        let a="hello";
        if a == "hello" {
          println("hello world !");
        } else if a == "world" {
            println("world !")
        } else {
            println("q")
        }

    }

匹配：

    match my_number {
      0     => println("zero"),
      1 | 2 => println("one or two"),
      3..10 => println("three to ten"),
      _     => println("something else")
    }

    use std::float;
    use std::num::atan;
    fn angle(vector: (float, float)) -> float {
        let pi = float::consts::pi;
        match vector {
          (0f, y) if y < 0f => 1.5 * pi,
          (0f, y) => 0.5 * pi,
          (x, y) => atan(y / x)
        }
    }

loop是一个无限循环，用break跳出：

    let mut x = 5u;
    loop {
        x += x - 3;
        if x % 5 == 0 { break; }
        println(x.to_str());
    }

