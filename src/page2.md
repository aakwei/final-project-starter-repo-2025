---
title:  The Income Equation
---

# ⚖️ The Income Equation 

This dashboard examines the **microeconomic expenses** that further strain the cost of living for working-class families. While the previous dashboard revealed macroeconomic trends in wages and poverty measures, this analysis breaks down the individual contributors to an American's spending—housing, food, transportation, healthcare, childcare, and taxes—to identify which impose the most significant burdens. Through three interconnected visualizations, we trace how essential living costs have diverged from income growth over four decades, revealing the specific expense categories that are driving families into financial hardship and demonstrating why nominal price increases often mask the true erosion of purchasing power.

<br></br>

## Cost of Living Breakdown

**Distribution of Living Cost Annually**

<div style='max-width: 100%; margin: 0 auto;'>
  <div class='tableauPlaceholder' id='viz1765085017612' style='position: relative'>
    <noscript>
      <a href='#'>
        <img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Li&#47;LivingWageGapVersion1&#47;Sheet6&#47;1_rss.png' style='border: none' />
      </a>
    </noscript>
    <object class='tableauViz' style='display:none;'>
      <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
      <param name='embed_code_version' value='3' />
      <param name='site_root' value='' />
      <param name='name' value='LivingWageGapVersion1&#47;Sheet6' />
      <param name='tabs' value='no' />
      <param name='toolbar' value='yes' />
      <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Li&#47;LivingWageGapVersion1&#47;Sheet6&#47;1.png' />
      <param name='animate_transition' value='yes' />
      <param name='display_static_image' value='yes' />
      <param name='display_spinner' value='yes' />
      <param name='display_overlay' value='yes' />
      <param name='display_count' value='yes' />
      <param name='language' value='en-US' />
    </object>
  </div>

  <script type='text/javascript'>
    var divElement = document.getElementById('viz1765085017612');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '100%';
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  </script>
</div>

In our dataset taken from the Economic Policy Institute, there are 7 listed factors that contribute to the cost of living: housing, food, child care, transportation, healthcare, taxes, and other necessities. These costs can vary from each state making it difficult to see which one of the seven are the main contributors to the cost of living. For this visualization, we decided to focus on six of the seven. We decided to plot the information out on a box-and-whiskers plot (aka a box plot) so that we can not only see if there are any skews in our dataset, but also to compare the spread and median costs of each factor. When we have our box plots side to side, we see that the median for all of the cost of living factors are in the center of the box, indicating that there is no noticeable skew in each factor.

This box-and-whiskers plot reveals the annual distribution of living costs across various categories, with **Childcare** and **Housing** showing the greatest variability and highest extreme costs—many outliers exceed $50,000 annually, indicating severe affordability challenges in high-cost areas. **Transportation** and **Healthcare** exhibit high median costs ($14,000-$15,000 and $13,000-$14,000 respectively) but with different patterns: Transportation has a tight, consistent distribution while Healthcare shows more variability with numerous high-cost outliers. **Food** and **Other Necessities** generally represent lower annual expenses ($7,000-$8,000 median) with less overall spread, though they still contribute significantly to the total cost burden when combined with the more expensive categories.


<br></br>

## Growth of Essential Living Costs Compared to Median Household Income

**Growth of Essential Living Costs Compared to Median Household Income (1984 = 100)**

```js

import {csvParse} from "d3-dsv";

// ─────────────────────────────────────────────

// LOAD & PROCESS — HEALTHCARE CPI

// ─────────────────────────────────────────────

const rawCpi = await FileAttachment("data/CPIMEDNS.csv").text();

const cpiData = csvParse(rawCpi, d => ({

  date: new Date(d.observation_date),

  index: d.CPIMEDNS ? +d.CPIMEDNS : null

})).filter(d => d.index !== null);

// Rebase using 1960 = 100

const baseCpi = cpiData.find(d => d.date.getFullYear()==1960)?.index ?? 1;

const rebasedCpi = cpiData.map(d => ({

  date:d.date,

  index:(d.index/baseCpi)*100,

  type:"Healthcare CPI"

}));

// ─────────────────────────────────────────────

// LOAD & PROCESS — MEDIAN HOUSEHOLD INCOME

// ─────────────────────────────────────────────

const rawIncome = await FileAttachment("data/MEHOINUSA646N.csv").text();

const incomeData = csvParse(rawIncome, d => ({

  date:new Date(d.observation_date),

  income:+d.MEHOINUSA646N

})).filter(d=>d.income);

const baseIncome = incomeData[0].income;

const rebasedIncome = incomeData.map(d=>({

  date:d.date,

  index:(d.income/baseIncome)*100,

  type:"Median Household Income"

}));

// ─────────────────────────────────────────────

// LOAD — TRANSPORTATION CPI (CUSR0000SAS4)

// ─────────────────────────────────────────────

const rawCUSR = await FileAttachment("data/CUSR0000SAS4.csv").text();

const cusr = csvParse(rawCUSR, d => ({

  date:new Date(d.observation_date),

  value:+d.CUSR0000SAS4

})).filter(d=>d.value);

const baseCusr = cusr.find(d=>d.date.getFullYear()==1984)?.value ?? 1;

const rebasedCusr = cusr.map(d=>({

  date:d.date,

  index:(d.value/baseCusr)*100,

  type:"Transportation CPI"

}));

// ─────────────────────────────────────────────

// LOAD — CHILDCARE & TUITION CPI (SEEB)

// ─────────────────────────────────────────────

const rawSEEB = await FileAttachment("data/CUUR0000SEEB.csv").text();

const seeb = csvParse(rawSEEB, d => ({

  date:new Date(d.observation_date),

  value:+d.CUUR0000SEEB

})).filter(d=>d.value);

const baseSEEB = seeb.find(d=>d.date.getFullYear()==1984)?.value ?? 1;

const rebasedSEEB = seeb.map(d=>({

  date:d.date,

  index:(d.value/baseSEEB)*100,

  type:"Childcare and Tuition CPI"

}));

// ─────────────────────────────────────────────

// FOOD COST CPI (CPIUFDSL)

// ─────────────────────────────────────────────

const rawFood = await FileAttachment("data/CPIUFDSL.csv").text();

const food = csvParse(rawFood,d=>({

  date:new Date(d.observation_date),

  value:+d.CPIUFDSL

})).filter(d=>d.value);

const baseFood = food.find(d=>d.date.getFullYear()==1984)?.value ?? 1;

const rebasedFood = food.map(d=>({

  date:d.date,

  index:(d.value/baseFood)*100,

  type:"Food Cost CPI"

}));

// ─────────────────────────────────────────────

// HOUSING CPI (CUUR0000SAH1)

// ─────────────────────────────────────────────

const rawHousing = await FileAttachment("data/CUUR0000SAH1.csv").text();

const housing = csvParse(rawHousing,d=>({

  date:new Date(d.observation_date),

  value:+d.CUUR0000SAH1

})).filter(d=>d.value);

const baseHousing = housing.find(d=>d.date.getFullYear()==1984)?.value ?? 1;

const rebasedHousing = housing.map(d=>({

  date:d.date,

  index:(d.value/baseHousing)*100,

  type:"Housing Cost CPI"

}));

// ─────────────────────────────────────────────

// MERGE INTO ONE ARRAY FOR PLOTTING

// ─────────────────────────────────────────────

const unifiedData = [

  ...rebasedCpi,

  ...rebasedIncome,

  ...rebasedCusr,

  ...rebasedSEEB,

  ...rebasedFood,

  ...rebasedHousing

];

// ─────────────────────────────────────────────

// PLOT

// ─────────────────────────────────────────────

function healthcarePriceChart({width}) {

  const startDate = new Date("1984-01-01");
  
  const filteredData = unifiedData.filter(d => d.date >= startDate);

  return Plot.plot({

    title:"Growth of Essential Living Costs Compared to Median Household Income (1984 = 100)",

    y:{label:"Index (1984 = 100)",grid:true},

    x: {
      label: "Year",
      domain: [startDate, new Date(Math.max(...filteredData.map(d => d.date.getTime())))]
    },

    color:{

      label:"Category",

      legend:true,

      domain:[

        "Healthcare CPI",

        "Childcare and Tuition CPI",

        "Transportation CPI",

        "Housing Cost CPI",

        "Median Household Income",

        "Food Cost CPI"],

      range:[

        "#C62828",

        "#9C27B0",

        "#1976D2",

        "#795548",

        "#2E7D32",

        "#FF9800"

      ]

    },

    marks:[

      Plot.line(filteredData,{

        x:"date",

        y:"index",

        stroke:"type",

        strokeWidth:2,

        tip:true

      })

    ],

    width,

    height:420

  });

}
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => healthcarePriceChart({width}))}
  </div>
</div>

Based on the cost of living breakdown in the first visualization, which identified the main expense categories, this chart compares how these essential costs have changed relative to median household income over time. All values are normalized to 1984 = 100, allowing direct comparison of growth rates across categories. The visualization reveals a troubling divergence: while median household income has grown steadily (shown in green), essential living costs have far outpaced it. Healthcare CPI (red) and Childcare and Tuition CPI (purple) show the steepest increases, rising dramatically above income growth. Housing and Transportation costs also exceed income growth, while Food Cost CPI remains relatively stable. This divergence shows that even as incomes rise, families are falling further behind in covering essential expenses, with healthcare and childcare creating the largest gaps.

By rebasing all values to 1984 = 100, the visualization creates a common baseline that allows direct comparison of growth rates across fundamentally different metrics (dollar amounts for income versus index values for CPI).

<br></br>

## Big Mac Price Versus CPI Adjusted Price

**Big Mac Price Versus CPI Adjusted Price (1986-2025)**

```js
import {csvParse} from "d3-dsv";

// Load Big Mac price data
const rawBigMac = await FileAttachment("data/bigmacindex.csv").text();
const bigMacData = csvParse(rawBigMac, d => ({
  year: +d.Year,
  nominalPrice: +d["Nominal Big Mac Price (USD)"]
})).filter(d => d.nominalPrice && d.year >= 1986 && d.year <= 2016);

// Load CPI data (CUSR0000SAS4 - general CPI component)
const rawCPI = await FileAttachment("data/CUSR0000SAS4.csv").text();
const cpiData = csvParse(rawCPI, d => ({
  date: new Date(d.observation_date),
  cpi: +d.CUSR0000SAS4
})).filter(d => d.cpi && d.date.getFullYear() >= 1986 && d.date.getFullYear() <= 2016);

// Get CPI for January of each year
const cpiByYear = {};
for (const d of cpiData) {
  const year = d.date.getFullYear();
  const month = d.date.getMonth();
  if (month === 0) { // January
    cpiByYear[year] = d.cpi;
  }
}

// Get base CPI (1986)
const baseCPI = cpiByYear[1986] || 1;

// Calculate CPI-adjusted prices
const bigMacWithCPI = bigMacData.map(d => {
  const yearCPI = cpiByYear[d.year] || baseCPI;
  const cpiAdjustedPrice = (d.nominalPrice / yearCPI) * baseCPI;
  return {
    year: d.year,
    nominalPrice: d.nominalPrice,
    cpiAdjustedPrice: cpiAdjustedPrice
  };
});
```

```js
function bigMacPriceChart({width}) {
  // Prepare data for plotting
  const nominalData = bigMacWithCPI.map(d => ({
    year: new Date(d.year, 0, 1),
    price: d.nominalPrice,
    type: "Nominal Big Mac Price"
  }));
  
  const cpiAdjustedData = bigMacWithCPI.map(d => ({
    year: new Date(d.year, 0, 1),
    price: d.cpiAdjustedPrice,
    type: "CPI Adjusted Price"
  }));
  
  const combinedData = [...nominalData, ...cpiAdjustedData];
  
  return Plot.plot({
    title: "Big Mac Price Versus CPI Adjusted Price",
    x: {
      label: "Year",
      domain: [new Date(1986, 0, 1), new Date(2016, 11, 31)],
      tickRotate: -45
    },
    y: {
      label: "Price ($)",
      grid: true,
      domain: [0, 6]
    },
    color: {
      domain: ["Nominal Big Mac Price", "CPI Adjusted Price"],
      range: ["#1976D2", "#2E7D32"],
      legend: true
    },
    marks: [
      Plot.line(nominalData, {
        x: "year",
        y: "price",
        stroke: "#1976D2",
        strokeWidth: 2,
        tip: true
      }),
      Plot.line(cpiAdjustedData, {
        x: "year",
        y: "price",
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
    ${resize((width) => bigMacPriceChart({width}))}
  </div>
</div>

From the above visualization, only Food CPI seems to grow slower than median household income, suggesting that food costs might be more manageable relative to other essential expenses. However, is food actually cheaper? We use the "Big Mac Index"—often mockingly deemed a "more accurate" indicator of inflation—to see if food costs are actually affordable. This visualization compares the nominal Big Mac price to its CPI-adjusted price over four decades, using the Big Mac as a proxy for purchasing power and inflation. The blue line shows the nominal price (actual dollars), while the green line shows the CPI-adjusted price (constant 1986 dollars). The divergence between the two lines shows whether Big Mac prices rose faster than general inflation. When the nominal line rises above the adjusted line, prices increase faster than the overall CPI, indicating a loss of purchasing power for this item. This demonstrates how nominal price increases can mask real economic changes: what looks like a price increase may actually be inflation, or it may exceed inflation, reducing real purchasing power.

The visualization clearly shows a growing divergence where the nominal Big Mac price has steadily increased over time, rising from around $1.60 in the late 1980s to over $5.00 by 2017, while its CPI-adjusted price has remained relatively stable, hovering between $1.50 and $2.00 throughout the same period. This trend indicates that the real cost of a Big Mac has risen faster than general inflation, leading to a loss of purchasing power for this staple item and demonstrating that even when official food cost indices appear manageable, actual food affordability has declined.

<br></br>

## Summary
The microeconomic analysis reveals that the income equation is fundamentally broken: essential living costs have systematically outpaced income growth, with healthcare and childcare creating the most severe affordability gaps. The box plot visualization establishes which expense categories contribute most significantly to the cost burden, while the time series analysis demonstrates how these costs have diverged from median household income over four decades. Even when Food CPI appears relatively stable compared to income growth, the Big Mac index reveals that even basic food items have become less affordable—linking back to this finding, everything is too expensive, especially our very favorite Big Mac, demonstrating that what appears to be economic progress may actually represent a decline in real economic security for working-class families.