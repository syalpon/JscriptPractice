WScript.echo(10 == '10');  // true
WScript.echo(10 === '10'); // false
WScript.echo(20 != '20');  // false
WScript.echo(20 !== '20'); // true


let a = 10;
let b = 20;
a += b;         // a = a + b �Ɠ����Ӗ�
WScript.echo(a); // ����: 30

let c = '���';
let d = '��Y';
c += d;         // c = c + d �Ɠ����Ӗ�
WScript.echo(c); // ����: '��؈�Y'