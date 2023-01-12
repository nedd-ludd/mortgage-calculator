import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

export default function MortgatePaymentTabs({ results }) {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  const twoDecimal = (num) => (Math.round(num * 100) / 100).toFixed(2);

  return (
    <Box>
      <Box component="section" className="repayment-interest-tabs">
        <Box>
          <Tabs value={tabIndex} onChange={handleTabChange}>
            <Tab label="Repayment" />
            <Tab label="Interest Only" />
          </Tabs>
        </Box>
        <Box sx={{ padding: 2 }}>
          {tabIndex === 0 && (
            <Box>
              <Typography>£{twoDecimal(results.monthlyRepayment)}</Typography>
              <Typography>a month</Typography>
              <Typography>or</Typography>

              <Typography>£{twoDecimal(results.annualRepayment)}</Typography>
              <Typography>a year</Typography>
            </Box>
          )}
          {tabIndex === 1 && (
            <Box>
              <Typography>
                £{twoDecimal(results.monthlyInterestOnly)}
              </Typography>
              <Typography>a month</Typography>
              <Typography>or</Typography>

              <Typography>£{twoDecimal(results.annualInterestOnly)}</Typography>
              <Typography>a year</Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}
