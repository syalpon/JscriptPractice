//コメントの仕方
//関数の呼び出し方
Main("Hello, world!");
If();
For();



//関数の定義
function Main(s) {
    WScript.echo(s);
    return 0;
}

//if文
function If()
{
    if( 1 == 1 )
    {
        WScript.echo("ture");
    }
    else
    {
        WScript.echo("false");
    }
}

//For文
function For()
{
    for(var i=0;i<10;i++)
    {
        WScript.echo(i);
    }
}
