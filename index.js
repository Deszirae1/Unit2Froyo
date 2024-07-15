// prompt the user for a list of flavors separated by commas - save this STRING in a variable

const usersOrder = prompt(
    "Please enter your desired flavors, separated by commas", 
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee" 
);

console.log(usersOrder);

//step 2: take the variable in step one and turn in into an ARRAY. We just want the flavors which were separated by the commas in the string from step 1. 

const ordersArray = usersOrder.split(",");
console.log(ordersArr); 

//step 3: now that we have an ARRAY, lets go through that array and create our condensed list (this is the list where the flavors appear once with their order count)
// our condnsed list should be an OBJECT that we create dynamically 

const ordersCondensed = {}; 


for (let i = o; i < ordersArr.length; i++) {
    //check if the flavor is in our object as a key 
    if (ordersCondensed[ordersArr(i)]) {
        ordersCondensed.[ordersArr[i]] += 1;
    } else {
     ordersCondensed[ordersArr[i]] = 1;
    }
}

console.log(ordersCondensed); 

//step 4: turn that condensed list into a table with console.table 


// const orders = {
//     vanilla: 3,
//     strawberry: 1,
//     coffee: 2,
// };

// console.log(orders);
// console.dir(orders);
// console.table(orders);
