WScript.echo(10 == '10');  // true
WScript.echo(10 === '10'); // false
WScript.echo(20 != '20');  // false
WScript.echo(20 !== '20'); // true


let a = 10;
let b = 20;
a += b;         // a = a + b と同じ意味
WScript.echo(a); // 結果: 30

let c = '鈴木';
let d = '一郎';
c += d;         // c = c + d と同じ意味
WScript.echo(c); // 結果: '鈴木一郎'