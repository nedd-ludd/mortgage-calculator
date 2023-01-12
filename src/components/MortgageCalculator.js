import { useState } from "react";
import { Typography } from "@mui/material";
import MortgatePaymentTabs from "./common/MortgatePaymentTabs.js";
import BarSlider from "./common/BarSlider.js";
import { CALC } from "../lib/calculators.js";
import { useEffect } from "react";

const formVariables = {
  price: {
    key: "price",
    name: "Price of property",
    prefix: "£",
    suffix: "",
    max: 500000,
    step: 10000,
  },
  deposit: {
    key: "deposit",
    name: "Deposit available",
    prefix: "£",
    suffix: "",
    max: 100000,
    step: 5000,
  },
  term: {
    key: "term",
    name: "Mortgage term",
    prefix: "",
    suffix: "years",
    max: 40,
    step: 1,
  },
  rate: {
    key: "rate",
    name: "Interest rate",
    prefix: "",
    suffix: "%",
    max: 15.0,
    step: 0.25,
  },
};

export default function MortgageCalculator() {
  const [results, setResults] = useState({
    monthlyRepayment: 0,
    annualRepayment: 0,
    monthlyInterestOnly: 0,
    annualInterestOnly: 0,
  });

  const [formData, setformData] = useState({
    price: 0,
    deposit: 0,
    term: 0,
    rate: 0,
  });

  const setData = (key, value) => {
    setformData({ ...formData, [key]: value });
  };

  useEffect(() => {
    // Only performs calc when all data is there
    if (formData.price && formData.deposit && formData.term && formData.rate) {
      const monthlyRep = CALC.REPAYMENT(formData);
      const annualRep = monthlyRep * 12;
      const monthlyInt = CALC.INTERESTONLY(formData);
      const annualInt = monthlyInt * 12;
      setResults({
        monthlyRepayment: monthlyRep,
        annualRepayment: annualRep,
        monthlyInterestOnly: monthlyInt,
        annualInterestOnly: annualInt,
      });
    }
  }, [formData]);
  //TODO dont actually need a "term" section when calulating interest only
  return (
    <>
      <Typography variant="h3" component="h1">
        Mortgage Calculator
      </Typography>
      <Typography variant="h5">Calculate your mortgage payment</Typography>
      <Typography>
        This is a guide to how much you would have to pay monthly or annually.
        Adjust the sliders to change the; property price, deposit, mortgage
        term, and interest rate.
      </Typography>
      <MortgatePaymentTabs results={results}></MortgatePaymentTabs>
      {Object.keys(formVariables).map((key) => (
        <BarSlider vars={formVariables[key]} setData={setData} />
      ))}
    </>
  );
}
