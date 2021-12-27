// コマンドライン引数の取得
var args = WScript.Arguments;
// コマンドライン引数を全て文字列配列へ変換
var array = [];
for (var c = 0; c < args.length; c++ ) {
    array.push (args(c));
}

//ファイルオープン
/// isArray:booleanで戻り値を配列にするか文字列にするか　
function readFile (filename, isArray)
{
    var file = new ActiveXObject ("ADODB.Stream");
    file.Type             = 2;         // テキストモード 1:バイナリデータ
    file.charset         = "UTF-8";    
    file.LineSeparator     = -1;        // CRLF 13:CR 10:LF
    file.Open ();
    try {
        file.loadFromFile (filename);
    } catch (e) {
        WScript.echo ("エラー");
        WScript.Quit (-1);
    }
 
    var reader = null;
    if (isArray) {
        reader = [];
        while (!file.EOS)
            reader.push (file.ReadText (-2)); // 行単位
    } else
        reader = file.ReadText (-1); // 全部
 
    file.Close ();
    return reader;
}

//各行を文字列として抽出
var file_text_data = readFile(array[0],false);
var words = file_text_data.split('\n');

//jsだけ抽出
var jsfile = [];
for(var i=0;i<words.length;i++)
{
    //拡張子の取得
    var k = words[i].split('.').pop().replace("\r","").replace("\n","");
    if ( k == "js" )
    {
        jsfile.push(words[i]);
    }
    //WScript.echo(words[i]);
}

for(var i=0;i<jsfile.length;i++)
{
    WScript.echo("CScript -nologo " + jsfile[i]);
}
