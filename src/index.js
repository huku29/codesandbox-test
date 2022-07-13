// var val1 = "val1";
// console.log(val1);

// //var変数は上書き可能
// val1 = "val1を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1);

// let var2 = "let変数";
// console.log(var2);

// //letは上書き可能
// var2 = "let変数上書き";
// console.log(var2);

// //letは再宣言できない
// let var2 = "var2再宣言";

// const var3 = "const変数";
// console.log(var3);

// const name = "じゃけ";
// const age = 28;

// const message1 = "私の名前は" + name +　"です。年齢は" + age + "です.";
// console.log(message1);

// // テンプレート文字列を使用
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

// 従来の関数
// function func1(str) {
//   return str;
// }

const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

//アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

//引数が一つの場合下記のように()なしでアロー関数が記載できる
// const func2 = str => {
//   return str;
// }
// console.log(func2("func2です"));

//中の処理が一行で終わるような単一式の場合returnを省略できる
// const func2 = (str) =>  str;
// console.log(func2("func2です"));

//引数が二個の場合のアロー関数
// const func3 = (num1,num2) =>{
//   return num1 + num2;
// };
// console.log(func3(10,20));

// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(10,20));

//分割代入について
// const myProfile = {
//   name: "じゃけ",
//   age: 28,
// };
// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message1);

//分割代入の書き方
//オブジェクトの場合ブランケットでプロパティ名を囲む
// const { name, age } = myProfile;
// const message2 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message2);

// //配列の場合
// const myProfile = ['じゃけ', 28];
// const message3 = 　`私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// //分割代入(配列の場合記載も大事)
// const [name,age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

//デフォルト値、引数
//じゃけが帰ってくる場合
// const sayHello = (name) => console.log(`こんにちは${name}さん!`);
// sayHello("じゃけ");
//ゲストが帰ってくる場合
//デフォルト値としてゲストを指定している
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん!`);
// sayHello();
//デフォルト値と引数の値がある場合、引数が優先される
// const sayHello = (name = "ゲスト" ) => console.log(`こんにちは${name}さん!`);
// sayHello("じゃけ");

//スプレット構文
//配列の展開
// const arr1 = [1,2];
// // console.log(arr1); → [1,2]
// // console.log(...arr1);　→ 1 2
// const sumFunc = (num1,num2) => console.log(num1 + num2);
//下記の二つは同じ値が返ってくる
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3); → [3,4,5]が返ってくる

//配列のコピー結合
// const arr4 = [10,20];
// const arr5 = [20,40];
// const arr6 = [...arr4];
// console.log(arr6); → [10,20]
// const arr7 = [...arr4,...arr5];
// console.log(arr7);→ [10,20,20,40]

//スプレッド構文の場合、元の値を変更せずに済む。
// const arr6 = [...arr4];
// arr6[0] =100;
// console.log(arr6);
// console.log(arr4);

//コピーだとイコールで良くねと思うかもしれないが、それだと元の値にも影響が出てきてします
//この場合、arr4の配列の値も変更されていることとなる
// const arr8 = arr4;

// arr8[0] = 100;

// console.log(arr8);

// mapやfilterを使った配列処理
// const nameArr = ["田中","山田","じゃけ"];
// //  for (let index = 0; index < nameArr.length; index++) {
// //    console.log(nameArr[index]);
// //  }

// //mapは配列対して使える関数
// //この場合returnを返して新しい配列を生成
//  const nameArr2 = nameArr.map((name) => {
//    return name;
//  })
//  console.log(nameArr2);
//  //単純に配列をループして何か処理するという使い方
//  nameArr.map((name) => console.log(name));

//  //filterはあるじょう条件を満たしている配列だけを返す
//  //filterメソッドの場合、returnに条件式を記載する
//  const numArr = [1,2,3,4,5];
//  const newNumArr = numArr.filter((num) => {
//    return num % 2 === 1;
//  });
//  console.log(newNumArr);

// //  何番目をつけたい場合
//  for (let index = 0; index < nameArr.length; index++) {
//    console.log(`${index + 1}番目は、${nameArr[index]}です`);
//  }
// // mapメソッドの場合
//  nameArr.map((name, index) => console.log(`${index + 1}番目は、${nameArr[index]}です`));

// // 〜さんを条件付きでつけたい場合
// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけ"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

// // 三項演算子
// // ある条件　? 条件がtrueの時:条件がfalseの時

// const num = 1300;
// // toLocaleString関数は三桁区切り（金額とかに使う）してくれる、文字列には使えない
// console.log(num.toLocaleString());

// // typeofはその変数の方がなんなのか表してくれる。
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum)

// ||は左側がfalseなら右側を返す役割を持つ
//jsではnullはfalse扱いとなる
// const num = null;
// const fee  = num || "金額未設定";
// console.log(fee);

// //&&の場合左側がtrueなら右側を返す
// const num2= null;
// const fee2  = num && "金額未設定";
// console.log(fee);
