let processing = function(password) {
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
    


