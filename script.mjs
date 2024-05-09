// //Part1 use arrays and objects
// // Loop through the characters of a given CSV string.
// // Store each “cell” of data in a variable.
// // When you encounter a comma, move to the next cell.
// // When you encounter the “\r\n” sequence, move to the next “row.”
// // Log each row of data.
// // You do not need to format the data, the following works well.
// // console.log(cell1, cell2, cell3, cell4);
// let csv_str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
// let cell1 = ``;
// let cell2 = ``;
// let cell3 = ``;
// let cell4 = ``; 
// let count = 0;
// let cell = ``;

// for(let char of str) {

// }

//part2
//create row when \n present + last row
// all rows goes in big array
//each comma separate an element

// let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
// let data = [];
// let row = [];
// let placeholder = ``;
// let counter = 0;

// for (let char of str) {
//     switch(char) {
//         //if comma add to row
//         case `,`:
//             counter++;
//             row.push(placeholder);
//             placeholder = ``;
//             break;
//         //if new line add to data
//         case `\n`:
//             counter++;
//             row.push(placeholder);
//             data.push(row);
//             placeholder = ``;
//             row = [];
//             break;
//         //if char add to placeholder or last car
//         default:
//             counter++;
//             placeholder += char;
//             if (counter == str.length) {
//                 row.push(placeholder);
//                 data.push(row);
//                 placeholder = ``;
//                 row = [];
//             }
//     }
// }
// console.log(data)

//part 3
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
let str3 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let row_obj = {};
let data_row = [];



console.log(data[0][0].toLowerCase());