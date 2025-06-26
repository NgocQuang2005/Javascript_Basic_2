function bai86(arrObj, vilie) {
  return Math.max(
    ...arrObj.map((value) =>
      typeof vilie === "function" ? vilie(value) : value[vilie]
    )
  );
}
console.log(bai86([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));
console.log(bai86([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"));
