# AGEING BETTER WITH ICTs (base234)
### @ https://www.hackerearth.com/challenges/hackathon/ageing-better-with-icts/
### hackathon Online <br />
#### starts on: Mar 15, 2021, 02:30 PM IST
#### ends on: Apr 16, 2021, 03:29 AM IST

#### Financial Tools for Longevity – (including solutions that support retirement planning for longer lives or protect against financial abuse).


## Table Attributes (Schema Creation)
### Life Expectancy (Selected Data, More data can be added if required i.e. Alcohol Consumptions, Hepatitis, Measles, etc)
<table>
  <tbody align="left">
    <tr>
      <th>Country</th>
      <td> - </td>
    </tr>
    <tr>
      <th>Year</th>
      <td> - </td>
    </tr>
    <tr>
      <th>Status</th>
      <td>Developed or Developing</td>
    </tr>
    <tr>
      <th>Life Expectancy</th>
      <td> - </td>
    </tr>
    <tr>
      <th>Adult Mortality</th>
      <td>Rates of both sexes (probability of dying between 15 and 60 years per 1000 population)</td>
    </tr>
    <tr>
      <th>Infant Death</th>
      <td>Number of infant deaths per 1000 populations</td>
    </tr>
    <tr>
      <th>Percentage Expenditure</th>
      <td>Expenditure on health as a percentage of Gross Domestic product per capita (%)</td>
    </tr>
  </tbody>
</table>


## Retirement Planning Calculations
### Required Inputs
<ul>
  <li>Current Age</li>
  <li>Retirement Age (Generally 60)</li>
  <li>Life Expectancy (in Years)</li>
  <li>Monthly Income</li>
  <li>Inflation Rate (Normally 3% - 15% in India) Generally 6% </li>
  <li>Expected Return on Investment (Pre-retirement)</li>
  <li>Expected Return on Investment (Post-retirement)</li>
  <li>Having any Existing Savings or Investment for Retirement ? </li>
</ul>

### Output Expected
<ul>
  <li>Annual Income required immediately after retirement.</li>
  <li>Additional Retirement Fund which needs to be accumulated.</li>
  <li>Monthly Savings required to accumulate the fund.</li>
</ul>


## Formula Approach for the above things
<ul>
    <li>
      <strong>FV = PV * (1+r)^n</strong>
      <ul>
        <li>FV = Future Value</li>
        <li>PV = Present Value</li>
        <li>r = expected inflation @6%</li>
        <li>n = time to retirement (60 years - 35 years) = 25 years</li>
      </ul>
  </li>
  <li>
    <strong>Example</strong>
    <br />
    <strong>PV = 3500, r = 6%, n = 25</strong>
    <br />
    <strong>FV = 3500 * (1 + 0.06) ^ 25 = Rs. 1,50,215.50</strong>
    <ul>
      <li>
        <strong>The annual income required immediately after retirement is = Rs. 18,02,586</strong>
        <ul>
          <li>Converting it to yearly = 150215.50 * 12 = Rs. 18,02,586</li>
        </ul>
      </li>
      <li>
        Calculation of Retirement Corpus to generate an annual income of Rs. 18,02,586 at the start of the retirement period.
      </li>
      <li>
        <strong>Retirement Period = 20 years (Life Expectancy - Age of Retirement)</strong>
        <ul>
          <li>Life Expectancy = 80 years</li>
          <li>Age of Retirement = 60 years</li>
        </ul>
      </li>
      <li>Retirement Period in months = 20 years * 12 = 240 months</li>
      <li>Rate of return on Corpus = 8%</li>
      <li>Inflation Rate = 6%</li>
      <li>Inflation Adjusted Rate of Return = (1 + 8%)/(1 + 6%) - 1 => 1.89%/12 => 0.001575 </li>
      <li>Payment for annual = Inflation Adjusted Rate of Return/12 => Rs. 18,02,586/12 => Rs. 1,50,215</li>
    </ul>
  </li>
</ul>
