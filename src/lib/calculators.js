const REPAYMENT = (vars) => {
  const n = vars.term * 12;
  const r = vars.rate / (100 * 12);
  const principle = vars.price - vars.deposit;
  const top = principle * r;
  const bottom = 1 - (1 + r) ** -n;
  const result = top / bottom;
  return result;
};

const INTERESTONLY = (vars) => {
  const principle = vars.price - vars.deposit;
  return (principle * (vars.rate / 100)) / 12;
};
export const CALC = { REPAYMENT, INTERESTONLY };
