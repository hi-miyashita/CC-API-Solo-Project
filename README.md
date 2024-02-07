# CC-API-Solo-Project
02/06-02/07課題のAPIソロプロジェクトです

植物を登録できるアプリを作りたかったのですが、うまくいきませんでした。
カラムはid、名前、科、属、地方、認識場所、認識日時、ひとこと

エンドポイント
GET　/plants 　全てのデータを取得します
POST /plants 　データを挿入します
PUT /plants/:id 　指定したidのデータを更新します
DELETE /plants/;id 　指定したidのデータを削除します

knexで詰まっています。
http://localhost:3001/plantsにアクセスすると画面には以下の表示が出ます。
{"error":"An error occurred while retrieving plants."}

plantController.js 7行目の下記の箇所でエラーが発生しているようです。
await knex.select().from("planttable");
