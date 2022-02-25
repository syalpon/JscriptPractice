WScript.echo(10 == '10');  // true
WScript.echo(10 === '10'); // false
WScript.echo(20 != '20');  // false
WScript.echo(20 !== '20'); // true


let a = 10;
let b = 20;
a += b;         // a = a + b ‚Æ“¯‚¶ˆÓ–¡
WScript.echo(a); // Œ‹‰Ê: 30

let c = '—é–Ø';
let d = 'ˆê˜Y';
c += d;         // c = c + d ‚Æ“¯‚¶ˆÓ–¡
WScript.echo(c); // Œ‹‰Ê: '—é–Øˆê˜Y'