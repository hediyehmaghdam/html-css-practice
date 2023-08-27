//let processing = function (password) {
    //if (password.length > 8 && !password.includes('12345')) {
   //     return true
    //} else {
    //    return false
    //}
//}
//console.log(processing('hediyeh12345'))
//console.log(processing('hedi32'))
//console.log(processing('hediyeh1381'))
//console.log(processing('hedi12345ujeui'))
//console.log(processing('zaqwsx'))
//console.log(processing('za123456'))

//const test = ['Book1', 'Book2', 'Book3', 'Book4', 'Book5', 'Book6']

//test.shift()
//test[5] = 'Book New'
//test.splice(1, 1)
//test.forEach(function(item){
//    console.log(`product Name is: ${item}`)
//})


const products = [{
    title: `book1`,
    price: 20
}, {
    title: `book2`,
    price: 30
}, {
    title: `book3`,
    price: 40
}, {
    title: `book4`,
    price:50
}]

const resDelet = function(item, productTitle) {
    const indexValue = item.findIndex(function(books){
        return books.title.toLowerCase() === productTitle.toLowerCase()
    });
    if (indexValue > -1) {
        item.splice(indexValue, 1);
    } else{
        console.log(`product not found!`)
    }
}
resDelet(products, `Book6`)
console.log(products)






