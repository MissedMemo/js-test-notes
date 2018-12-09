const sum = (tot, ...nums) => {
  return nums.length ? tot + sum(...nums) : tot;
};

const mult = (tot, ...nums) => {
  return nums.length ? tot * mult(...nums) : tot;
};

const mult2 = (tot, num, ...nums) => {
  return nums.length ? tot * mult(num, ...nums) : tot * num;
};

module.exports = { sum, mult, mult2 }
