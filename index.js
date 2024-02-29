let amount = 100;

for (let day = 1; day < 8; day++) {
  amount = amount / 10 + amount;
  console.log("day:", day);
  console.log("amount:", amount);
}
