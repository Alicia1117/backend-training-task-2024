// 樂呵呵健身房
//樂呵呵健身房目前有 8 位會員

const members = [
    'Alice',
    'Bob',
    'Charlie',
    'Diana',
    'Evan',
    'Fiona',
    'George',
    'Hannah',
];

//第一階段：新增課程購買記錄（優惠定價）
//撰寫函式 addPurchaseRecord，用於新增會員購買課程的記錄，並依購買數量套用優惠價格：

let purchaseRecords = [];

function addPurchaseRecord(name, courses) {
    let memberValidation = members.includes(name);
    let inputValidation =
        typeof name === 'string' && typeof courses === 'number';
    let coursePrice = 0;
    let totalCoursesPrice = 0;
    function addRecord() {
        purchaseRecords.push({ name, courses, coursePrice, totalCoursesPrice });
    }

    function calculatePrice() {
        totalCoursesPrice = coursePrice * courses;
    }

    function printRecord() {
        console.log(
            `新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${totalCoursesPrice} 元。`
        );
    }

    function recordContent() {
        calculatePrice();
        addRecord();
        printRecord();
    }
    if (memberValidation && inputValidation) {
        if (courses > 0 && courses <= 10) {
            coursePrice = 1500;
            recordContent();
        } else if (courses > 10 && courses <= 20) {
            coursePrice = 1300;
            recordContent();
        } else {
            coursePrice = 1100;
            recordContent();
        }
    } else {
        console.log('輸入錯誤，請輸入有效的會員名稱和課程數量。');
    }
}

addPurchaseRecord('Alice', 4);
addPurchaseRecord('Bob', 12);
console.log(purchaseRecords);

//第二階段：計算目前的總營業額
//新增函式 calculateTotalPrice，計算目前的總營業額為多少。
function calculateTotalPrice() {
    let totalPrice = 0;
    purchaseRecords.forEach(record => {
        totalPrice += record.totalCoursesPrice;
    });

    console.log(`目前總營業額為 ${totalPrice} 元`);
}
calculateTotalPrice();
//第三階段：篩選出還沒有購課的會員
//新增函式 filterNoPurchaseMember，篩選特定條件的會員記錄。例如：未購買過課程的會員，並依序列出

let noPurchaseMembers = [];
function filterNoPurchaseMember() {
    noPurchaseMembers = members.filter(member => {
        return !purchaseRecords.some(record => record.name === member);
    });

    console.log(`未購買課程的會員有：${noPurchaseMembers}`);
}

filterNoPurchaseMember();
