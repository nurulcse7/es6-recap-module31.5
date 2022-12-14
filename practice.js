/*============মাষ্ট শিখবে ES৬, একটা জাভাস্ক্রিপ্ট এর ফাইল খুলে নিচের জিনিসগুলা প্রাকটিস করে ফেলো।  ============*/

/*১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। 
     তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো। */
let age = 30;
const bookName = 'Al-Quran';


/*২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। 
    একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। 
    এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। */
const person1 = {
     name1: 'Nurul Islam',
     address: 'Gulshan',
     job: 'Web Developer',
     salary: 200000,
     phone: '01777777777',
     hobby: 'Blockchain Developer'
}
const totalAge = `${person1.name1}`;
// console.log(totalAge)

// const nationalAnthem = `
// Amar sonar bangla
// ami tomai valobasi
// chirodin tomar akash
// `
// const myAge = 30;
// const yourAge = 40;
// const totalAge = `Addition of ${myAge} and ${yourAge} is ${myAge + yourAge}`;
// console.log(totalAge); // Addition of 30 and 40 is 70

/*৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। 
     এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। */
const divisible = (num) => num / 5;
const result = divisible(10);
//  console.log(result) // 2

/*৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। 
     সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। 
     ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো */
const multiply2 = (a, b) => (a + 2) * (b + 2)

/*৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। 
     যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। */
const multiply = (a, b, c) => a * b * c;
const result1 = multiply(7, 8, 2);
// console.log(result1) // 112

/*৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে।
    ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে।
     ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। */
const multiply3 = (a, b) => {
     let value1 = a + 2;
     let value2 = b + 2;
     let value3=value1*value2;
     return value3
}


/*৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। */


/*৪.৫. জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? */


/*৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। 
    প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। */
const numbers2 = [3, 5, 6, 7, 8];
const towNum2 = numbers2.map(n => n * 5);
// console.log(towNum2) // [ 15, 25, 30, 35, 40 ]

/*৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো */
const numbers3 = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const odd = numbers3.filter(num => num % 2 === 1); // odd number of an array
// console.log(odd); // [ 5, 23, 45, 11, 9, 55, 61, 1 ]

/*৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। */
const products = [
     { id: 1, name: 'laptop', price: 65000 },
     { id: 2, name: 'mobile', price: 80000 },
     { id: 3, name: 'watch', price: 5000 },
     { id: 4, name: 'tablet', price: 23000 },
];
// 40000 টাকার নিচে প্রথম প্রোডাক্ট নেওয়ার জন্য
const productPrice = products.find(product => product.price === 5000);
//  console.log(productPrice); // { id: 3, name: 'watch', price: 5000 }

/*৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। */


/*৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। */
const person = {
     name: 'Nurul Islam',
     address: 'Gulshan',
     job: 'Web Developer',
     salary: 200000,
     phone: '01777777777',
     hobby: 'Blockchain Developer'
}
const { name, address, salary } = person;
//  console.log(salary) // 200000


/*৯.  [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন 
      এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। */
const bikeName = ['BMW', 'Royal Enfild', 'Yamaha', 'Kawasaki', 'Honda', 'Suzuki'];
const [Jhankar, Mezbaul, Rasel, Nurul, Mir, Sagor] = bikeName;
//  console.log(Nurul); // Kawasaki

/*১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। 
     যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে।
     আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে  ৭। */
const addition = (a, b, c = 7) => a + b + c;
const result2 = addition(7, 8, 2);
// console.log(result2) // 17

/*[অপশনাল]*/
/*১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে।
     আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। 
     এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )*/
let personalData = {
     name: 'Nurul Islam',
     job: 'Web Developer',
     salary: 200000,
     phone: '01777777777',
     hobby: 'Blockchain Developer',
     location: [
          {
               latitude: '34.5, 37.8',
               longitude: '98.77, 58.7',
               city: 'Dhaka',
               country: 'Banladesh',
          }
     ]
};
// const myCity = personalData.location.forEach(item => console.log(item.city)) // Dhaka
const myCity = personalData.location.map(town => town.city);
console.log(myCity); // [ 'Dhaka' ]

/*১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। */

let personalData1 = {
     name: 'Nurul Islam',
     job: 'Web Developer',
     salary: 200000,
     phone: '01777777777',
     hobby: 'Blockchain Developer',
     location: [
          {
               latitude: '34.5, 37.8',
               longitude: '98.77, 58.7',
               city: 'Dhaka',
               country: 'Banladesh',
          }
     ]
};
const myCity1 = personalData1?.location?.map(town => town?.city);
// console.log(myCity1); // [ 'Dhaka' ]