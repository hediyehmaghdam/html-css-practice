let processing = function (password) {
    if (password.length > 8 && !password.includes('12345')) {
        return true
    } else {
        return false
    }
}
console.log(processing('hediyeh12345'))
console.log(processing('hedi32'))
console.log(processing('hediyeh1381'))
console.log(processing('hedi12345ujeui'))
console.log(processing('zaqwsx'))
console.log(processing('za123456'))

const test = ['Book1', 'Book2', 'Book3', 'Book4', 'Book5', 'Book6']


test.shift()
test[5] = 'Book New'
test.splice(1, 1)
test.forEach(function(item){
    console.log(`product Name is: ${item}`)
})







