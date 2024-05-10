//Part1 use arrays and objects
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let rows = csvStr.split(`\n`);

rows.forEach((row)=>{
    console.log(row);
})

//part2
//create row when \n present + last row
//all rows goes in big array
//each comma separate an element

let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let data = [];
let row = [];
let placeholder = ``;
let counter = 0;

for (let char of str) {
    switch(char) {
        //if comma add to row
        case `,`:
            counter++;
            row.push(placeholder);
            placeholder = ``;
            break;
        //if new line add to data
        case `\n`:
            counter++;
            row.push(placeholder);
            data.push(row);
            placeholder = ``;
            row = [];
            break;
        //if char add to placeholder or last car
        default:
            counter++;
            placeholder += char;
            if (counter == str.length) {
                row.push(placeholder);
                data.push(row);
                placeholder = ``;
                row = [];
            }
    }
}
console.log(data)

//part 3
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
let str3 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let row_obj = {};
let data_row = [];
let i = str3.indexOf(`\n`);
let cell = ``;
let key = [];
let count = 0;
let key_index = 0;
for (let j = 0; j <= i; j++) {
    let char = str3[j];
    if (char == `,`) {
        key.push(cell);
        cell = ``;
       
    } else if (char == `\n`){
        key.push(cell);
        cell = ``;
    } else {
        cell += char.toLowerCase();
    }
}
//convert key array to keys for object
for (let i = 0; i < key.length; i++) {
    row_obj[key[i]] = key[i];
}

for (let j = i + 1; j < str3.length; j++) {
    switch (str3[j]) {
        case `,`:
            count++;
            row_obj[key[key_index]]= cell;
            key_index++;
            cell = ``;
            break;
        case `\n`:
            count++;
            row_obj[key[key_index]]= cell;
            data_row.push(row_obj);
            cell = ``;
            key_index = 0;
            row_obj = {};
            break;
        default:
            count++;
            cell += str3[j];
            if (count == str3.length - i-1) {
                row_obj[key[key_index]] = cell;
                data_row.push(row_obj);
                row_obj = {};
                cell = ``;
                key_index = 0;
            }
    }
}
console.log(data_row);

//part 4 
// Remove the last element from the sorted array.
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
data_row.sort().pop();
data_row.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" });
data_row.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
// console.log(data_row);
//use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.
let sum_age = 0;
data_row.forEach((row)=>{
    sum_age += Number(row.age)
})
// console.log(sum_age/data_row.length);

//part 5
//transform the final set of data back into CSV format.
let str5 = [];
let keys = [];
data_row.forEach((row)=>{
    for (const key in row) {
        str5.push(row[key]);
    }
})
for (const key in data_row[0]) {
    keys.push(key);
}
let csv_str = keys.concat(str5);
let new_csv = csv_str.join(`,`);

console.log(new_csv);