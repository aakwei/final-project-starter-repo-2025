---
title:  page 2
---

# Microeconimc factors 🚀

While minimum wage trends show upward movement, understanding the true cost burden requires examining how essential expenses are distributed across different categories. The following visualization breaks down the total cost of living by state, revealing which factors—housing, healthcare, food, transportation, and childcare—contribute most significantly to the financial burden workers face.

## Cost of Living Breakdown

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
<br></br>

## Healthcare Price VS Median Household Income Over Time (Normalized)

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
