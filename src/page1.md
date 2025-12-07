---
title: page 1
---

# 📊 The "Official" Story 

Before we can understand the true depth of America's urban livability crisis, we must first examine what the official statistics tell us. This dashboard presents the baseline facts as reported by government sources and official economic indicators: federal and state minimum wage data, official cost-of-living statistics, and the numbers that policymakers and official sources cite when discussing wages and living costs across America's largest cities. Here, we establish the foundation of the "official story"—the data that shapes public policy debates and forms the starting point for understanding the gap between what workers earn and what they need to survive. These visualizations reveal the surface-level picture that will be deconstructed in the dashboards that follow, showing us not just what the numbers say, but setting the stage for understanding why they often fail to capture the full reality of working-class life in urban America.

## Minimum Wage Analysis

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

<br><br>
This visualization tracks the evolution of minimum wage policies across all 50 states and U.S. territories over the past two decades, comparing state-level minimum wages against the federal baseline. The data reveals a clear upward trajectory: both federal and state minimum wages have steadily increased since 2000, with the federal minimum wage rising from $5.15 to $7.25 per hour, while many states have implemented even more aggressive increases. Notably, over half of all states now maintain minimum wage rates that exceed the federal standard—a trend that has accelerated in recent years. On the surface, these numbers tell a story of progress and improved worker welfare, suggesting that policymakers are recognizing the need to ensure workers can earn a living wage. But are they? While these official statistics show wages rising, they tell us nothing about whether these increases have kept pace with the actual cost of living in America's urban centers. The numbers look promising in isolation, but they represent only one side of the equation—what workers earn, not what they need to survive.



## Occupational Wage Analysis

We seek to visualize how typical salaries across major occupational categories compare to the living wage, poverty line, and minimum wage in three of the most economically significant and high-cost U.S. regions: Washington D.C., New York City, and Los Angeles. These urban centers are home to millions of workers, set trends for labor and policy, and are often used as testbeds for wage reforms. By focusing on households with 2 adults (1 working) and 2 children, we highlight how even relatively high-paying jobs can fall short of covering basic living costs—raising critical questions about wage adequacy, cost of living, and economic justice. All data in this section are based on the MIT living wage index, accessed from https://livingwage.mit.edu/

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

## Additional Analysis

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