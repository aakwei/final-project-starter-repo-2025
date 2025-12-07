---
title: Boom page 3
---

# Tell a story

blah blah blah 

## Public Assistance by Employment Income

```js
import {csvParse} from "d3-dsv";

// Load the CSV data
const raw = await FileAttachment("data/prd_calculations (1).csv").text();
const data = csvParse(raw, d => {
  // Calculate EITC (federal + state)
  const eitc = (+d["value.eitc.fed"] || 0) + (+d["value.eitc.state"] || 0);
  
  return {
    income: +d.income,
    EITC: eitc,
    SNAP: +d["value.snap"] || 0,
    "Medicaid for Children": +d["value.medicaid.child"] || 0,
    "Health Insurance Marketplace Subsidy": +d["value.aca"] || 0
  };
}).filter(d => d.income > 0);

// Melt data for stacking
const stackedData = [];
for (const d of data) {
  for (const category of ["EITC", "SNAP", "Medicaid for Children", "Health Insurance Marketplace Subsidy"]) {
    stackedData.push({
      income: d.income,
      program: category,
      value: d[category]
    });
  }
}
```

```js
function stackedBarChart({width}) {
  // Calculate max income and create ticks at 10k intervals
  const maxIncome = Math.max(...data.map(d => d.income));
  const xTicks = [];
  for (let i = 0; i <= maxIncome; i += 10000) {
    xTicks.push(i);
  }
  
  return Plot.plot({
    x: {
      label: "Employment Income",
      tickFormat: d => `$${d / 1000}K`,
      ticks: xTicks
    },
    y: {
      label: "Dollar Value",
      tickFormat: d => `$${d / 1000}K`
    },
    color: {
      legend: true,
      label: "Program",
      domain: [
        "EITC",
        "SNAP",
        "Medicaid for Children",
        "Health Insurance Marketplace Subsidy"
      ],
      range: [
        "#6b4226", // EITC
        "#d95f0e", // SNAP
        "#fdae61", // Medicaid for Children
        "#1a9850"  // Marketplace Subsidy
      ]
    },
    marks: [
      Plot.barY(stackedData, {
        x: "income",
        y: "value",
        fill: "program",
        order: "appearance",
        tip: true
      })
    ],
    width,
    height: 350
  });
}
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => stackedBarChart({width}))}
  </div>
</div>

