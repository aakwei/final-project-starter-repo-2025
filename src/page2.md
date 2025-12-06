---
title: Boom page 2
head: <script type="module" src="https://js.arcgis.com/4.34/embeddable-components/"></script>
---

# Microeconimc factors 🚀

We seek to visualize how typical salaries across major occupational categories compare to the living wage, poverty line, and minimum wage in three of the most economically significant and high-cost U.S. regions: Washington D.C., New York City, and Los Angeles. These urban centers are home to millions of workers, set trends for labor and policy, and are often used as testbeds for wage reforms. By focusing on households with 2 adults (1 working) and 2 children, we highlight how even relatively high-paying jobs can fall short of covering basic living costs—raising critical questions about wage adequacy, cost of living, and economic justice. All data in this section are based on the MIT living wage index, accessed from https://livingwage.mit.edu/


## DC Living Wage vs Salaries (2 Adults, 2 Children)

```js
import {data, wageComparisonChart} from "./components/wageDC.js";
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => wageComparisonChart(data, {width}))}
  </div>
</div>


## LA Living Wage vs Salaries (2 Adults, 2 Children)

```js
import {data as laData, wageComparisonChart as laWageComparisonChart} from "./components/wageLA.js";
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => laWageComparisonChart(laData, {width}))}
  </div>
</div>


## NYC Living Wage vs Salaries (2 Adults, 2 Children)

```js
import {data as nycData, wageComparisonChart as nycWageComparisonChart} from "./components/wageNYC.js";
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => nycWageComparisonChart(nycData, {width}))}
  </div>
</div>

Across these three urban cities, we see that at for all occupations, the wage lies above the minimum wage line and pverty line, which is to be expected. By having a full-time job, one will officially not be considered to be in poverty. However, it is concerning to see that in these cities, the wages for the large majority of occupation categories, 64% in DC, 77% in LA, and an overwhelming 86% in NYC, lies below the MIT living wage line.

"Computer & Mathematical", "Legal", and "Management" were the only three categories across these urban centers which provided a high enough wage for a "traditionally standard" or "nuclear" family of 4.

## Geographic Distribution

<div style="width: 100%; margin: 0;">
  <arcgis-embedded-map style="height:600px;width:100%;display: block;" item-id="a5741185c55040a6bde48e2f166ad64e" theme="dark" legend-enabled center="-74.87934787785171,40.7177733650891" scale="4622324.434309" portal-url="https://carnegiemellon.maps.arcgis.com"></arcgis-embedded-map>
</div>

DC, LA county, and NYC are not just edge cases, in fact, across the United States, majority of metropolitan areas, as seen in the map above, suffer from a similarly high cost of living.

County-level Cost of Living Index (COLI) data is available from sources like **C2ER** (Council for Community and Economic Research) and **EPI**. These indices compare local costs to a national baseline (100), showing how regions like the West Coast and Northeast are typically more expensive than the South and Midwest.
