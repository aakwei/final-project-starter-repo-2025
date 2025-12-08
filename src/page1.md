---
title: page 1
---

# 📊 The Bigger Picture

This dashboard examines the **macroeconomic** factors that shape America's urban livability crisis. We begin by analyzing how minimum wage policies have evolved at both the federal and state levels from 2000 to 2024, revealing the stark differences between state initiatives and federal stagnation. Next, we compare typical salaries across 22 major occupational categories to the living wage requirements in three of America's most expensive cities—Washington D.C., Los Angeles, and New York City—demonstrating how essential service jobs consistently fail to provide adequate compensation for families. Finally, we explore the critical factors that official poverty measurements ignore, exposing how safety net programs lift millions out of poverty while hidden costs push millions more into economic hardship. Together, these visualizations establish the foundation for understanding the structural gaps between what workers earn and what they need to survive in urban America.

<br></br>

## Minimum Wage Analysis

**Minimum Wage of Each State/Territory vs Federal Minimum Wage (2000-2024)**

<div style='max-width: 100%; margin: 0 auto;'>
  <div class='tableauPlaceholder' id='viz1764792117272' style='position: relative'>
  <noscript>
    <a href='#'>
      <img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Li&#47;LivingWageGapVersion1&#47;MinimumWageofEachStateTerritoryvsFederalMinimumWagefrom2000-2024&#47;1_rss.png' style='border: none' />
    </a>
  </noscript>
  <object class='tableauViz' style='display:none;'>
    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
    <param name='embed_code_version' value='3' />
    <param name='site_root' value='' />
    <param name='name' value='LivingWageGapVersion1&#47;MinimumWageofEachStateTerritoryvsFederalMinimumWagefrom2000-2024' />
    <param name='tabs' value='no' />
    <param name='toolbar' value='yes' />
    <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Li&#47;LivingWageGapVersion1&#47;MinimumWageofEachStateTerritoryvsFederalMinimumWagefrom2000-2024&#47;1.png' />
    <param name='animate_transition' value='yes' />
    <param name='display_static_image' value='yes' />
    <param name='display_spinner' value='yes' />
    <param name='display_overlay' value='yes' />
    <param name='display_count' value='yes' />
    <param name='language' value='en-US' />
  </object>
</div>

<script type='text/javascript'>
  var divElement = document.getElementById('viz1764792117272');
  var vizElement = divElement.getElementsByTagName('object')[0];
  vizElement.style.width = '100%';
  vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>
</div>

The minimum wage is the lowest hourly rate employers must pay their employees, which was introduced in 1938 with the Fair Labor Standards Act (FLSA). As the cost of simple things such as food and housing increases over time, we wanted to understand how the federal minimum wage and state minimum wages have changed over time. We limited our scope to data collected from 2000 to 2024. We used an area line graph with two lines to show how the minimum wage in the states changed and compared it to the federal minimum wage. The blue line represents the state's minimum wage and the grey line represents the federal minimum wage. There is a filter that allows you to see which state you want to look at and compare to another state. This visualization was made in order to highlight how the federal government has struggled to make needed changes to the minimum wage.

<br></br>

## Occupational Wage Analysis

**Living Wage vs Salaries (2 Adults, 2 Children) - DC, LA, and NYC**


### DC Living Wage vs Salaries (2 Adults, 2 Children)

```js
import {data, wageComparisonChart} from "./components/wageDC.js";
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => wageComparisonChart(data, {width}))}
  </div>
</div>

### LA Living Wage vs Salaries (2 Adults, 2 Children)

```js
import {data as laData, wageComparisonChart as laWageComparisonChart} from "./components/wageLA.js";
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => laWageComparisonChart(laData, {width}))}
  </div>
</div>

### NYC Living Wage vs Salaries (2 Adults, 2 Children)

```js
import {data as nycData, wageComparisonChart as nycWageComparisonChart} from "./components/wageNYC.js";
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => nycWageComparisonChart(nycData, {width}))}
  </div>
</div>

This visualization compares typical salaries across 22 major occupational categories in Washington D.C., Los Angeles, and New York City to three wage thresholds: the living wage, poverty line, and minimum wage. Each dot represents an occupation's median annual salary, positioned along a horizontal axis from below the poverty line to above the living wage. The charts show that in all three cities, many essential occupations—including Healthcare Support, Food Preparation, and Personal Care—fall below the living wage needed to support a family of two adults and two children. Despite different living wage requirements (DC: $91,956; LA: $104,229; NYC: $113,859), the pattern is consistent: essential service jobs consistently fail to provide adequate compensation. Color coding highlights which jobs provide economic security (green) versus those that leave families struggling (red), challenging the assumption that employment alone guarantees financial stability in high-cost urban areas.

<br></br>

## Beyond Official Poverty Measures

**Factors that Official Poverty Measurement Ignores and Change in Number of People in Supplemental Poverty After Including Each Element in 2024**

<div style='max-width: 100%; margin: 0 auto;'>
  <div class='tableauPlaceholder' id='viz1765125265771' style='position: relative'>
    <noscript>
      <a href='#'>
        <img alt='Factors that Official Poverty Measurement Ignores and Change in Number of People in Supplemental Poverty After Including Each Element in 2024 ' 
             src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;da&#47;dashboard1visualization3&#47;Sheet1&#47;1_rss.png' 
             style='border: none' />
      </a>
    </noscript>
    <object class='tableauViz' style='display:none;'>
      <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
      <param name='embed_code_version' value='3' />
      <param name='site_root' value='' />
      <param name='name' value='dashboard1visualization3&#47;Sheet1' />
      <param name='tabs' value='no' />
      <param name='toolbar' value='yes' />
      <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;da&#47;dashboard1visualization3&#47;Sheet1&#47;1.png' />
      <param name='animate_transition' value='yes' />
      <param name='display_static_image' value='yes' />
      <param name='display_spinner' value='yes' />
      <param name='display_overlay' value='yes' />
      <param name='display_count' value='yes' />
      <param name='language' value='en-US' />
    </object>
  </div>

  <script type='text/javascript'>
    var divElement = document.getElementById('viz1765125265771');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '100%';
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  </script>
</div>

This visualization breaks down the specific economic factors that the Official Poverty Measure ignores. The green bars on the top left represent the Safety Net Successes: programs like Refundable Tax Credits (EITC) and SNAP that lift millions of people out of poverty but get zero credit in the official count. Conversely, the red bars on the bottom right reveal the Hidden Burdens: costs like medical and work expenses that push over 15 million Americans into poverty who otherwise look financially stable. This data proves that to truly understand economic hardship, we must look beyond simple income and account for the real-world costs and benefits that shape a family's survival.

<br></br>
## Summary

These visualizations reveal that the macroeconomic picture of America's urban livability crisis is far more complex than official statistics suggest. While minimum wages have increased at the state level, federal stagnation and the persistent gap between wages and living costs demonstrate that policy responses have been insufficient. The reality that essential service jobs fail to meet living wage requirements, combined with the hidden factors that official poverty measures ignore, establishes a clear foundation for understanding why working-class families struggle to survive in America's most expensive cities.