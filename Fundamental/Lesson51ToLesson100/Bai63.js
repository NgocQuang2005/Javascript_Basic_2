function b63(rgx) {
  return {
    source: rgx.source,
    flags: rgx.flags,
  };
}
const original = /hello\d+/gi;
console.log(b63(original));
