# CC-API-Solo-Project
02/06-02/07課題のAPIソロプロジェクトです<br/>

植物を登録できるアプリを作りたかったのですが、うまくいきませんでした<br/>
カラムはid、名前、科、属、地方、認識場所、認識日時、ひとこと

エンドポイント<br/>
GET　/plants 　全てのデータを取得します<br/>
POST /plants 　データを挿入します<br/>
PUT /plants/:id 　指定したidのデータを更新します<br/>
DELETE /plants/;id 　指定したidのデータを削除します<br/>

knexで詰まっています。<br/>
localhost:3001/plantsにアクセスすると画面には以下の表示が出ます。<br/>
{"error":"An error occurred while retrieving plants."}

src/dataAccess/plantController.js 7行目の下記の箇所でエラーが発生しているようです。<br/>
await knex.select().from("planttable");<br/>
psql及びpgadmin上で<br/>
select * from planttable<br/>
を実行したところ、正常に動作するのでコンフィグファイル(src/dataAccess/knexfile.js)に誤りがあるのではないかと考えています。<br/>
ただ、一見してこのコンフィグファイルは間違っていないように思えることに加え、これを用いたマイグレーションが成功しているため、どこに原因があるかわかりません。
