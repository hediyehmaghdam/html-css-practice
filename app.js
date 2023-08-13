let userAccount = {
    fullName: 'hediyeh',
    income: 0,
    outgo: 0
}

let addIncome = function(account, amount){
   account.income = account.income + amount
}

let addOutgo = function(account, outgo){
    account.outgo = account.outgo + outgo
}

let getAccountData = function(account) {
    let balance = account.income - account.outgo
    return `account name: ${account.fullName} - balance= ${balance}`
}

addIncome(userAccount, 2000)
addOutgo(userAccount,250)
console.log(getAccountData(userAccount))