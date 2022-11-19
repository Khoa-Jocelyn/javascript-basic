/** 
 * ==== VARIABLES ====
 * Thay vi khai bao theo kieu: float a = 0.0, int b = 0, string c = "", bool d = true
 * chung ta chi can khai bao let a = 0.0, let b = 0, let c = "", let d = true
 * let trong javascript se tu dong nhan dien kieu du lieu so khi khai bao
 */
let a = 0.0;
let b = 0;
let c = "";
let d = true;
/** let a = 0.0, b = 0, c = "", d = true */
console.log(`Variable a has data type: ${typeof(a)}`);
console.log(`Variable b has data type: ${typeof(b)}`);
console.log(`Variable c has data type: ${typeof(c)}`);
console.log(`Variable d has data type: ${typeof(d)}`);

/**
 * ==== CONSTANTS ====
 * De khai bao hang so chi can khai bao const a = 0
 * hang so thi khong the thay doi gia tri
 */
const e = 0;
/** e = 1 => error*/
console.log(`Variable e has data type: ${typeof(e)}`);