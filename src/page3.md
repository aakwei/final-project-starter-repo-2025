---
title: The Path Forward
---

# 🎯 The Path Forward

This dashboard breaks down various perspectives on a more accurate, modern measurement of the livability gap and provides data-driven conclusions with calls to action. Having established the macroeconomic factors that shape the crisis and the microeconomic expenses that strain families, we now examine **recalculated standards** that reveal alarming truths about the average American's economic state. Through three interconnected analyses, we expose how official poverty measures fail to capture real economic hardship, reveal the structural traps in the public assistance system that penalize upward mobility, and demonstrate that even families earning six-figure incomes face persistent deficits in high-cost urban areas. These visualizations provide actionable insights for labor advocates, policymakers, and young adults, showing not just where intervention is most needed, but how systemic reforms could eliminate poverty traps and ensure financial solvency for working-class families.

## Official vs. Real Poverty Rates

**Official vs. Real Poverty Rates of Each State in the average of (2022, 2023, and 2024)**

This chart exposes the inaccuracy of the Official Poverty Measure (Orange Dots) by comparing it against the Supplemental Poverty Measure (Green Dots), which accounts for the actual cost of living. The gray vertical lines represent the reality gap between these two standards. Across most states, poverty rates are noticeably higher under SPM, especially in high-cost states like California and Washington, because SPM accounts for modern expenses such as housing, childcare, and taxes. Although a few states show slightly higher rates under OPM, the national average poverty rate is still higher under SPM, reinforcing that SPM captures economic hardship more accurately than the traditional OPM.

Instead of cluttered side-by-side bars across 50+ states, this visualization uses a dumbbell chart to clearly highlight the gap between OPM and SPM. The connecting gray line leverages the Gestalt principle of connectedness, directing attention to the size of the reality gap rather than just the raw values. Two horizontal reference lines (Orange for the OPM national average, Green for the SPM average) provide essential context, allowing instant identification of hidden poor states where OPM appears below average but SPM reveals a much higher true poverty rate. 

<div style='max-width: 100%; margin: 0 auto;'>
  <div class='tableauPlaceholder' id='viz1765126833507' style='position: relative'>
    <noscript>
      <a href='#'>
        <img alt='Dashboard 2 ' 
             src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Vi&#47;Vizfordashboard3&#47;Dashboard2&#47;1_rss.png' 
             style='border: none' />
      </a>
    </noscript>
    <object class='tableauViz' style='display:none;'>
      <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
      <param name='embed_code_version' value='3' />
      <param name='site_root' value='' />
      <param name='name' value='Vizfordashboard3&#47;Dashboard2' />
      <param name='tabs' value='no' />
      <param name='toolbar' value='yes' />
      <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Vi&#47;Vizfordashboard3&#47;Dashboard2&#47;1.png' />
      <param name='animate_transition' value='yes' />
      <param name='display_static_image' value='yes' />
      <param name='display_spinner' value='yes' />
      <param name='display_overlay' value='yes' />
      <param name='display_count' value='yes' />
      <param name='language' value='en-US' />
    </object>
  </div>

  <script type='text/javascript'>
    var divElement = document.getElementById('viz1765126833507');
    var vizElement = divElement.getElementsByTagName('object')[0];
    if ( divElement.offsetWidth > 800 ) { 
      vizElement.style.width='100%';
      vizElement.style.height='827px';
    } else if ( divElement.offsetWidth > 500 ) { 
      vizElement.style.width='100%';
      vizElement.style.height='827px';
    } else { 
      vizElement.style.width='100%';
      vizElement.style.height='727px';
    }
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  </script>
</div>

<br></br>

## Public Assistance by Employment Income

**Public Assistance by Employment Income in NY county, LA county, and DC county**

These 3 visualizations reveal the "benefits cliff" in the U.S. public assistance system, where rigid eligibility rules create sudden losses in aid that can punish families for earning more. Around $30,000 in income, total resources jump as ACA health subsidies begin to support economic stability as intended. Beyond this point, however, programs like SNAP and Medicaid for Children can disappear abruptly once a threshold is crossed, creating a "valley of death" where a small raise results in a net loss of resources and an effective tax rate above 100 percent. A clear solution is to replace these cutoffs with smooth phase-outs that taper benefits gradually, following the proven design of the Earned Income Tax Credit, which rises with income and then gently declines. If other programs followed this same slope-based structure, the poverty traps created by benefit cliffs could be eliminated.

The stacked bar chart shows both the total level of support and the policy mix within a single column, revealing that the safety net is made up of separate programs rather than one unified system and allowing viewers to identify exactly which program causes sudden drops in total aid. The x axis uses small income increments to expose the benefits cliff—instead of smoothing the data into averages, this approach makes sharp vertical drops visible and clearly shows how a small increase in income can trigger a sudden collapse in benefits.

```js
import {stackedBarChart, processPublicAssistanceData} from "./components/prdLA.js";
import {stackedBarChart as dcStackedBarChart, processPublicAssistanceData as processDCPublicAssistanceData} from "./components/prdDC.js";
import {stackedBarChart as nycStackedBarChart, processPublicAssistanceData as processNYCPublicAssistanceData} from "./components/prdNYC.js";
```

```js
const rawLA = await FileAttachment("data/prd_calculationsLAC.csv").text();
const {stackedData: laStackedData} = processPublicAssistanceData(rawLA);

const rawDC = await FileAttachment("data/prd_calculationsDC.csv").text();
const {stackedData: dcStackedData} = processDCPublicAssistanceData(rawDC);

const rawNYC = await FileAttachment("data/prd_calculationsNYC.csv").text();
const {stackedData: nycStackedData} = processNYCPublicAssistanceData(rawNYC);
```

<div class="grid grid-cols-3">
  <div class="card">
    <h3>LA County</h3>
    ${resize((width) => stackedBarChart(laStackedData, {width}))}
  </div>
  <div class="card">
    <h3>DC</h3>
    ${resize((width) => dcStackedBarChart(dcStackedData, {width}))}
  </div>
  <div class="card">
    <h3>NYC</h3>
    ${resize((width) => nycStackedBarChart(nycStackedData, {width}))}
  </div>
</div>

## Family Net Financial Resources by Employment Income

**Family Net Financial Resources by Employment Income in NY county, LA county, and DC county**

These visualizations map the true bottom line for a family by calculating Net Financial Resources (Income + Benefits - Taxes - Expenses). While the benefits cliff shown by the visible dip in the red line hurts low wage workers, the more alarming insight is that the entire line remains dangerously low. In these high cost counties, the red line often stays below the dashed zero marker, which represents a monthly deficit, even when a family earns one hundred thousand dollars. This shows that the problem is not only about losing benefits but about a fundamental misalignment between the cost of living and current wage and welfare levels. The system does not only trap the poor but also fails to provide solvency for the middle class, making a broad expansion of structural support necessary.

The zero reference line sets a clear breaking even benchmark and shifts the focus from earning more to whether a family is still in deficit. By showing most incomes remaining below this line, the chart makes the cost of living crisis visibly undeniable. Instead of plotting gross income directly, the visualization uses a simulated net resources metric that subtracts taxes and location specific expenses from earnings before display. This design choice turns the chart into a structural reality check by embedding hidden cost burdens directly into the line, revealing how even high salaries can result in negative disposable income after real living costs are applied.

```js
import {netResourcesChart, processNetResourcesData} from "./components/prdLA.js";
import {netResourcesChart as dcNetResourcesChart, processNetResourcesData as processDCNetResourcesData} from "./components/prdDC.js";
import {netResourcesChart as nycNetResourcesChart, processNetResourcesData as processNYCNetResourcesData} from "./components/prdNYC.js";
```

```js
const rawLANet = await FileAttachment("data/prd_calculationsLAC.csv").text();
const laNetResourcesData = processNetResourcesData(rawLANet);

const rawDCNet = await FileAttachment("data/prd_calculationsDC.csv").text();
const dcNetResourcesData = processDCNetResourcesData(rawDCNet);

const rawNYCNet = await FileAttachment("data/prd_calculationsNYC.csv").text();
const nycNetResourcesData = processNYCNetResourcesData(rawNYCNet);
```

<div class="grid grid-cols-3">
  <div class="card">
    <h3>LA County</h3>
    ${resize((width) => netResourcesChart(laNetResourcesData, {width}))}
  </div>
  <div class="card">
    <h3>DC</h3>
    ${resize((width) => dcNetResourcesChart(dcNetResourcesData, {width}))}
  </div>
  <div class="card">
    <h3>NYC</h3>
    ${resize((width) => nycNetResourcesChart(nycNetResourcesData, {width}))}
  </div>
</div>

The path forward requires recognizing that **recalculated standards** reveal a crisis far deeper than official measures suggest: poverty rates are systematically undercounted, the public assistance system creates structural traps that penalize upward mobility, and even six-figure incomes fail to provide financial solvency in high-cost urban areas. The visualizations demonstrate that solutions must address both the immediate gaps—replacing benefit cliffs with gradual phase-outs modeled after the Earned Income Tax Credit—and the fundamental misalignment between wages, benefits, and the true cost of living. By making the Urban Livability Gap tangible, accessible, and specific to their jurisdictions, we provide policymakers with the evidence needed to justify legislative action, design more equitable social policy, and address systemic urban inequality at scale, ensuring this project not only diagnoses problems but catalyzes solutions at every level.
