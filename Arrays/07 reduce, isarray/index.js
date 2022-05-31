let a = [
	{ "id": 55, "city": "arc" },
	{ "id": 75, "city": "rca" },
	{ "id": 175, "city": "bra" },
];

let b = a.reduce((accum, item) => {
	accum.push(item.id)
	return accum
}, [])

console.log(b)
console.log(Array.isArray(b))



// let a = [-3, 4, -5, 7, -6, 2, 14]

// let b = a.reduce((accum, item) => {
// 	if (item > accum) {
// 		accum = item
// 	}
// 	return accum
// })
// console.log('===============')
// console.log(b)
