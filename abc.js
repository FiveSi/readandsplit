const fs = require("fs");
// const data2 = data.repeat(1000);
// fs.writeFileSync("./a.txt", data);
// console.log(data2);
// fs.writeFileSync("./a.txt", data2);
const b = fs.readFileSync("./a.txt", "utf-8"); // read u a file //
// const b = fs.readFileSync("./a.txt");
const dataSize = 99; // data size with 1 file //
const killData = b.length / dataSize;
const killDatab = Math.ceil(b.length / dataSize, dataSize);
let dataB = 0;

for (dataB; dataB <= killDatab; dataB++) {
  const dataC = dataB * dataSize;
  console.log(dataC);
  const dataD = b.slice(dataC, dataC + dataSize);
  console.log(dataD);

  fs.writeFileSync(`./a_${dataB}.txt`, dataD);
}
