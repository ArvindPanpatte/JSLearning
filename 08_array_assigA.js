const arraySeasonalFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log("*******************Array Assignment******************");
console.log(`1. Given Array : ${arraySeasonalFruits}`);
// console.table(arraySeasonalFruits);
// console.log(arraySeasonalFruits.length);
console.log(`In the given Array First element is : ${arraySeasonalFruits[0]}\nIn the given Array last element is : ${arraySeasonalFruits[4]}`);
console.log("_____________________________________________________\n");

console.log(`2. Given Array Before addition of Papaya : ${arraySeasonalFruits}`);
arraySeasonalFruits.unshift("Papaya");
console.log(`In the given Array after addition of "Papaya" is : ${arraySeasonalFruits}`);
console.log("_____________________________________________________\n");

console.log(`3. Given Array Before removing of "Mango" : ${arraySeasonalFruits}`);
arraySeasonalFruits.splice(4,1);
console.log(`In the array after removing of "Mango" is :${arraySeasonalFruits}`);
console.log("_____________________________________________________\n");

console.log(`4. Given Array Before adding "Pineapple" : ${arraySeasonalFruits}`);
arraySeasonalFruits.push("Pineapple");
console.log(`In the array after adding "Pineapple" is :${arraySeasonalFruits}`);
console.log("_____________________________________________________\n");

console.log(`5. Given Array Before adding "Dragon Fruit" before "Water Melon" : ${arraySeasonalFruits}`);
arraySeasonalFruits.splice(4,0,"Dragon Fruit")
console.log(`In the array after adding "Dragon Fruit" before "Water Melon" is :${arraySeasonalFruits}`);
console.log("_____________________________________________________\n");

console.log(`6. Given Array Before replacing "Orange" with "Kiwi" : ${arraySeasonalFruits}`);
arraySeasonalFruits.splice(2,1,"Kiwi")
console.log(`In the array after replacing "Orange" with "Kiwi" is :${arraySeasonalFruits}`);
console.log("_____________________________________________________\n");

console.log(`7. Before selection : ${arraySeasonalFruits}`);
const subArray=arraySeasonalFruits.slice(1,5);
console.log(`Selected elements from index 1 to 4 :${subArray}`);
console.log("_____________________________________________________\n");

console.log(`8. Given Array : ${arraySeasonalFruits}`);
const element=[];
for (let index = 4; index<=arraySeasonalFruits.length-1; index++){
    element[index]=arraySeasonalFruits[index];   
}
console.log(`Last 3 Elements: ${element}`);
