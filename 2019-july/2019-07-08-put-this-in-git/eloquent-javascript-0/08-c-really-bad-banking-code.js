const accounts = {
  a: 100,
  b: 0,
  c: 20
}

function getAccount() {
  let accountName = prompt("Enter an account name");
  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }
  return accountName;
}

function transfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1){
      accounts[from] += amount;
    }
  }
}
console.log("-----accounts");
console.log(accounts);
transfer("a", 10);
console.log("-----accounts");
console.log(accounts);
