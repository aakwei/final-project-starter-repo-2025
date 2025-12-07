---
title: Boom page 2
---

# Microeconimc factors 🚀

While minimum wage trends show upward movement, understanding the true cost burden requires examining how essential expenses are distributed across different categories. The following visualization breaks down the total cost of living by state, revealing which factors—housing, healthcare, food, transportation, and childcare—contribute most significantly to the financial burden workers face.

## Cost of Living Breakdown

<div style='max-width: 100%; margin: 0 auto;'>
  <div class='tableauPlaceholder' id='viz1764963652547' style='position: relative'>
    <noscript>
      <a href='#'>
        <img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Li&#47;LivingWageGapVersion1&#47;TotalCostofLivingPerStateSplitbyCostReasons&#47;1_rss.png' style='border: none' />
      </a>
    </noscript>
    <object class='tableauViz' style='display:none;'>
      <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
      <param name='embed_code_version' value='3' />
      <param name='site_root' value='' />
      <param name='name' value='LivingWageGapVersion1&#47;TotalCostofLivingPerStateSplitbyCostReasons' />
      <param name='tabs' value='no' />
      <param name='toolbar' value='yes' />
      <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Li&#47;LivingWageGapVersion1&#47;TotalCostofLivingPerStateSplitbyCostReasons&#47;1.png' />
      <param name='animate_transition' value='yes' />
      <param name='display_static_image' value='yes' />
      <param name='display_spinner' value='yes' />
      <param name='display_overlay' value='yes' />
      <param name='display_count' value='yes' />
      <param name='language' value='en-US' />
    </object>
  </div>

  <script type='text/javascript'>
    var divElement = document.getElementById('viz1764963652547');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '100%';
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  </script>
</div>

<br><br>
This stacked bar chart reveals the composition of living costs across all 50 states, breaking down total expenses into five essential categories: housing, healthcare, food, transportation, and childcare. Each state's bar represents its total cost of living, with the colored segments showing the proportional contribution of each expense category. The visualization makes immediately clear that housing costs dominate the financial burden in most states, often comprising the largest segment of the bar, followed by healthcare and food costs. Transportation and childcare expenses, while significant, typically represent smaller but still substantial portions of the total. What becomes apparent is not just the absolute dollar amounts—which vary dramatically from state to state—but the structural composition of these costs: even in states with lower total expenses, the same fundamental categories consume workers' incomes, just at different scales. This breakdown sets the stage for understanding why minimum wage increases, while positive on paper, may still fall short when confronted with the multi-faceted reality of essential living expenses.

Across these three urban cities, we see that at for all occupations, the wage lies above the minimum wage line and pverty line, which is to be expected. By having a full-time job, one will officially not be considered to be in poverty. However, it is concerning to see that in these cities, the wages for the large majority of occupation categories, 64% in DC, 77% in LA, and an overwhelming 86% in NYC, lies below the MIT living wage line.

"Computer & Mathematical", "Legal", and "Management" were the only three categories across these urban centers which provided a high enough wage for a "traditionally standard" or "nuclear" family of 4.

## Healthcare Price VS Median Household Income Over Time (Normalized)

```js
import {csvParse} from "d3-dsv";

// Load healthcare CPI data
const rawCpi = await FileAttachment("data/CPIMEDNS.csv").text();
const cpiData = csvParse(rawCpi, d => ({
  date: new Date(d.observation_date),
  index: d.CPIMEDNS ? +d.CPIMEDNS : null
})).filter(d => d.index !== null);

// Get the value in January 1960 to use as rebasing baseline for healthcare CPI
const baseValue = cpiData.find(d => d.date.getFullYear() === 1960 && d.date.getMonth() === 0)?.index ?? 1;

// Rebase healthcare CPI so 1960 = 100
const rebasedCpiData = cpiData.map(d => ({
  date: d.date,
  index: (d.index / baseValue) * 100,
  type: "Healthcare CPI"
}));

// Load median household income data
const rawIncome = await FileAttachment("data/MEHOINUSA646N.csv").text();
const incomeData = csvParse(rawIncome, d => ({
  date: new Date(d.observation_date),
  income: d.MEHOINUSA646N ? +d.MEHOINUSA646N : null
})).filter(d => d.income !== null);

// Get the value in 1984 (first year) to use as rebasing baseline for income
const baseIncome = incomeData[0]?.income ?? 1;

// Rebase income so 1984 = 100
const rebasedIncomeData = incomeData.map(d => ({
  date: d.date,
  index: (d.income / baseIncome) * 100,
  type: "Median Household Income"
}));
```

```js
function healthcarePriceChart({width}) {
  const startDate = new Date("1984-01-01");
  const cpiLine = rebasedCpiData.filter(d => 
    d.index !== null && 
    d.index !== undefined && 
    d.date >= startDate
  );
  const incomeLine = rebasedIncomeData.filter(d => d.index !== null && d.index !== undefined);
  
  // Get the max date for x-axis domain
  const maxDate = new Date(Math.max(
    ...cpiLine.map(d => d.date.getTime()),
    ...incomeLine.map(d => d.date.getTime())
  ));
  
  return Plot.plot({
    y: {
      label: "Index (Base Year = 100)",
      grid: true
    },
    x: {
      label: "Year",
      domain: [startDate, maxDate]
    },
    marks: [
      Plot.line(cpiLine, {
        x: "date",
        y: "index",
        stroke: "#C62828",
        strokeWidth: 2,
        tip: true
      }),
      Plot.line(incomeLine, {
        x: "date",
        y: "index",
        stroke: "#2E7D32",
        strokeWidth: 2,
        tip: true
      })
    ],
    width,
    height: 400
  });
}
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => healthcarePriceChart({width}))}
  </div>
</div>
