const decode = (encoded, first) => {
  const out = [first];
  encoded.forEach((x, i) => out.push(out[i] ^ x));
  return out;
};

console.log(decode([1, 2, 3], 1));
