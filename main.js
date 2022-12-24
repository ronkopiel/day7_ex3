let practiceFile = [273.15];
practiceFile.push(42);
practiceFile.push('hello');
practiceFile.push(false,-4.6,"87");
// console.log(practiceFile);

let cargoHold = ['oxygen tanks','space suits','parrot','instruction manual','meal packs','slinky','security blanket']
cargoHold[cargoHold.indexOf('slinky')] = 'space tether';
// console.log(cargoHold);
console.log(cargoHold.pop(),cargoHold);
console.log(cargoHold.shift(),cargoHold);
cargoHold.unshift(1138);
cargoHold.push('20 meters')
console.log(cargoHold);
console.log(`the final array is:[${cargoHold}] and its length is:${cargoHold.length}`);

cargoHold.splice(3,0,'keys');
console.log(cargoHold);
cargoHold.splice(cargoHold.indexOf('instruction manual'),1);
console.log(cargoHold);
cargoHold.splice(2,3,`cat`,`fob`,`string cheese`);
console.log(cargoHold);

let holdCabinet1 = ['duct tape','gum',3.14,false,6.022e23];
let holdCabinet2 = ['orange drink','nerf toys','camera',42,'parsnip']
console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);
console.log(holdCabinet1.slice(0,1));
console.log(holdCabinet2.slice(0,1));
console.log(holdCabinet1);
console.log(holdCabinet2);
holdCabinet1.reverse();
console.log(holdCabinet1);
holdCabinet2.sort();
console.log(holdCabinet2);

let str = 'in space, no one can hear you code'
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));
console.log(str);

let arr= ['B','n','n',5]
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));
console.log(arr);

let element1 = ['hydrogen','H',1.008];
let element2 = ['helium','He',4.003];
let elemen26 = ['iron','Fe',55.85];

let table = [];
table.push(element1)
table.push(element2);
table.push(elemen26);
console.log(table);
console.log(table[1]);
console.log(table[1][1]);
console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);

let mamal1 = ['husky','dog'];
let mamal2 = ['persian','cat'];
let reptile1 = ['freshwater','crocodile']
let reptile2 = ['cobra','snake']
let mamals = [];
mamals.push(mamal1);
mamals.push(mamal2);

let reptiles = [];
reptiles.push(reptile1);
reptiles.push(reptile2);

let animals =[]
animals.push(mamals);
animals.push(reptiles);

console.log(animals[0][0][0]);
console.log(animals[0][1][1]);
console.log(animals[1][0][0]);
console.log(animals[1][1][0]);