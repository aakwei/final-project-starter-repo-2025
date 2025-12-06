---
title: Boom page 2
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