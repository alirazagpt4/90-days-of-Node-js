function BankAccount(name) {
    let balance = 0; 
      console.log(`${name} this is your account.`)
    return {
        deposit(amount) {
            balance += amount;
            console.log(`${name} Your Deposited: ${amount}, new balance: ${balance}`);
        },
        withdraw(amount) {
            if (balance >= amount) {
                balance -= amount;
                console.log(`${name} Your Withdrawn: ${amount}, new balance: ${balance}`);
            } else {
                console.log(`${name} Insufficient balance!`);
            }
        },
        checkBalance() {
            console.log(`${name} Your Current Balance: ${balance}`);
            return balance;
        }
    };
}

const account = BankAccount("AliRaza");


account.deposit(1000);
account.withdraw(200);
const currentBalance = account.checkBalance();

console.log(account);
console.log(currentBalance);
