// ### 題目一：變數練習
// 情境：Alex 正在健身房鍛鍊，他正在使用跑步機慢跑，請用變數描述以下狀態：

// 1. 請宣告一個 `const` 變數名稱為 `alexAge`，並賦予值為 `25`。
// 2. 請宣告一個 `const` 變數名稱為 `alexMembershipID`，並賦予值為字串 `"GYM2024-12345"`。
// 3. 請宣告一個 `const` 變數名稱為 `isRunningOnTreadmill`，並賦予值為 `true`。
// 4. 使用 `console.log()` 輸出 `alexAge`、`alexMembershipID` 和 `isRunningOnTreadmill`。

// 1.1 範例
const alexAge = 25;
const alexMembershipID = 'GYM2024-12345';
const isRunningOnTreadmill = true;

console.log(alexAge, alexMembershipID, isRunningOnTreadmill);

// ### 題目二：變數命名練習
// - 瑜伽團課 - 300 元
// - 重訓團課 - 500 元
// - 重訓 1 對 1 課程 - 1500 元
// 情境：Alex 這個月的運動預算有 3000 元
// 請修改以下中文變數名稱，讓他符合變數語意

const yogaGroupClass = 300;
const weightTrainingGroupClass = 500;
const weightTraining1On1Class = 1500;
const alexExcerciseBudget = 3000;

// ### 題目三：變數計算
// 呈上題，Alex 想要規劃好自己的運動課程，需符合以下三個條件，請將花費總數計算在 AlexBudget 上，一起幫幫他吧！
// 條件一：一定至少要買 1 堂重訓團課和瑜伽團課
// 條件二：瑜伽團課只能一次買 3 堂
// 條件三：一定要花到 2400 以上，並購買 5 堂課程

let AlexBudget =
    alexExcerciseBudget -
    yogaGroupClass * 3 -
    weightTrainingGroupClass -
    weightTraining1On1Class;

console.log(`Alex 買完課程了，他一共剩下 ${AlexBudget} 元`);

// ### 題目四：線稿圖截圖，看圖宣告變數
// 請參考資料夾內 q4.webp 圖片
// 請依照你看到的內容來嘗試設計變數和值（至少 3 個）

let packagePlanPrice = 2520;
// 組合包優惠價
let packagePlanDiscount = 0.9;
// 折扣數
let packagePlanOriginalPrice = packagePlanPrice / packagePlanDiscount;
// 計算原價
const packageClassNum = 14;
// 課程堂數
const singleClassDuration = 50;
// 一堂課時間長度
let singleClassAvgPrice = packagePlanPrice / packageClassNum;
// 計算折扣後一堂課平均價格
let classTotalDuration = packageClassNum * singleClassDuration;
// 計算總時數

console.log(
    `14堂課原價為${packagePlanOriginalPrice}元，現在購買14堂組合包方案價格有9折優惠為${packagePlanPrice}，平均一堂課價格為${singleClassAvgPrice}元，而一堂課時間為${singleClassDuration}分鐘，總時數為${classTotalDuration}分鐘}`
);

// ### 題目五：布林值與變數定義，看是否有用對 const, let
// 情境：Alex 在往健身房的路上，望向城市的風景，請描述她看到的一切，並宣告變數與賦予值
// 4-1. Alex 在等紅綠燈，他抬頭看一下現在是紅燈，還有 28 秒綠燈（最多 3 個宣告）
let isAlexWaiting = true; // 是否等紅綠燈(值會變動)
let isRedLight = true; // 是否是紅燈(值會變動)
let remaingTimeToGreenLight = 28; // 還有多少秒數才綠燈(值會變動)

// 4-2. 目前一起等待的機車有 8 台

let motorNum = 8; // 機車數量(值會變動)

// 4.3. Alex 望向天空，看到天上有 5 朵白雲和 1 顆太陽

const sunNum = 1; // 太陽數量(值不會變動)
let cloudNum = 5; // 雲朵數量(值會變動)

// ### 題目六：情境題：簡單變數計算
// 情境：Alex 每天都會帶著 2000cc 的水壺
// 他早上喝了 500cc
// 中午又喝了 800cc
// 下午去健身前，先裝了 1000cc 的水
// 健身時，又喝掉了 700cc
// 那麼他的水壺還剩下多少 cc 的水？
// 以下的 Code 寫到一半，再請幫幫 Alex

let myWater = 2000; // 水壺容量
myWater -= 500; // 早上喝了 500cc
myWater -= 800; // 中午喝了 800cc
myWater += 1000; //健身前裝了 1000cc
myWater -= 700; // 健身時喝掉了 700cc

console.log(`Alex 的水壺還有 ${myWater}cc 的水`); // 最後剩1000cc

// ### 題目七：情境題：變數計算
// 情境：Anna 每週都會到單次計費型的健身房運動，週日運動結束後，想知道自己本週的消費金額，但結帳系統出了點問題，Anna 決定自己用 JS 來計算。
// Anna 的總金額（totalBill）先從零開始計算。
// 健身房計費為：每小時器械使用費 50 元，每堂團體課程費用 150 元
// 她本週用了器械 3 小時。
// 她本週參加了 2 堂團體課程。

let totalBill = 0;
const machineUsePrice = 50;
const groupClassPrice = 150;

let machineUsePriceTotal = machineUsePrice * 3; // 本週器械使用費總金額
let groupClassesTotal = groupClassPrice * 2; // 本週團體課總金額

let total = machineUsePriceTotal + groupClassesTotal; // 本周消費金額

totalBill += total; // 累計總金額

console.log(
    `Anna 本週器械使用費共 ${machineUsePriceTotal} 元，團體課費用共 ${groupClassesTotal} 元，一共消費金額是 ${total}元`
);

// ### 題目八：變數重新賦予值
// 情境：請依照以下程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更
let a = 8; // 範例：宣告了一個 a 的變數，並賦予了數字型別的值為 8
let b = 0; // 宣告一個b的變數，並賦予數字型別的值為0
a = 13; // 將變數a重新賦予數字型別的值13
a = b + 4; // 將變數a重新賦予數字型別的值為變數b的值+4，變數a的值為數字型別4
a - b; // 計算變數a的值減去變數b的值，但沒有重新賦值所以不會影響a的值
b += 1; // 將變數b重新賦予數字型別的值為變數b的值+1，變數b的值為數字型別1

// ### 題目九：型別查詢
// 請不要觀看 console.log，透過註解告知解答每個變數的型別
let c = 'world';
let d = 456;
let e = c + d;
let f = false;
let g = d + d;
let h = f + g;

// 請從以下新增註解，告知上面每行各別是哪些型別
// a 是 string
// b 是 number
// c 是 string，第125行為宣告一個c的變數，並賦予字串型別(string)的值為'world'
// d 是 number，第126行宣告一個d的變數，並賦予數字型別(number)的值為456
// e 是 string，第127行宣告一個e的變數，並賦值為變數c和變數d的值相加，而字串型別和數字型別相加時數字型別會被js自動轉型為字串型別，因此最後變數e的值為字串類型，值為'world456'
// f 是 boolean，第129行宣告一個f的變數，並賦予布林型別(boolean)的值為false
// g 是 number，第130行宣告一個g的變數，並賦值為變數d的值自身相加，數字型別的值相加會正常運算，最終的值為數字型別912
// h 是 number，第131行宣告一個h的變數，並賦值為變數f和變數g的值相加，布林型別與數字型別的值相加時，布林值會被轉換為數字(true為1，false為0），因此變數h是數字型別而其值為912(0+912=912)

// ### 題目十：傳值與傳參考
// 情境：請依照程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更

let numberArr1 = [5, 10, 15];
let numberArr2 = numberArr1;
numberArr2.push(20);
numberArr2 = [25, 30, 35];
console.log(numberArr1, numberArr2);

// 答案為[5, 10, 15, 20] [25, 30, 35]]
// 第146行為宣告一個numberArr1的變數，並賦予陣列型別的值為[5, 10, 15]
// 第147行為宣告一個numberArr2的變數，並賦予變數numberArr1的值同為陣列型別的值為[5, 10, 15]，此時numberArr2的值為[5, 10, 15]且與numberArr1指向相同的記憶體儲存空間
// 第148行為在numberArr2的陣列最末端插入一個值為20，此時numberArr2的值為[5, 10, 15, 20]，而因為與numberArr1指向相同的記憶體空間，所以numberArr1的值也會變成[5, 10, 15, 20]
// 第149行將numberArr2的值重新賦值，此時numberArr2指向新的記憶體空間而其值為[25, 30, 35]並且不會影響到numberArr1的值
// 第150行為利用console.log查看現在numberArr1的值以及numberArr2的值，numberArr1的值因為在第148行被新增而變成[5, 10, 15, 20],而numberArr2的值在被重新賦值後變為[25, 30, 35]
