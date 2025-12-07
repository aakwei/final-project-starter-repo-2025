---
title: page 3
---

# Tell a story

blah blah blah 

<div class='tableauPlaceholder' id='viz1765122742063' style='position: relative'>
  <noscript>
    <a href='#'>
      <img alt='Official vs. Real Poverty Rates of Each State in the average of (2022, 2023, and 2024) ' 
           src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Vi&#47;Vizfordashboard3&#47;Sheet1&#47;1_rss.png' 
           style='border: none' />
    </a>
  </noscript>
  <object class='tableauViz' style='display:none;'>
    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
    <param name='embed_code_version' value='3' />
    <param name='site_root' value='' />
    <param name='name' value='Vizfordashboard3&#47;Sheet1' />
    <param name='tabs' value='no' />
    <param name='toolbar' value='yes' />
    <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Vi&#47;Vizfordashboard3&#47;Sheet1&#47;1.png' />
    <param name='animate_transition' value='yes' />
    <param name='display_static_image' value='yes' />
    <param name='display_spinner' value='yes' />
    <param name='display_overlay' value='yes' />
    <param name='display_count' value='yes' />
    <param name='language' value='en-US' />
  </object>
</div>

<script type='text/javascript'>
  var divElement = document.getElementById('viz1765122742063');
  var vizElement = divElement.getElementsByTagName('object')[0];
  vizElement.style.width='100%';
  vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
</script>

## LA County - Public Assistance by Employment Income

```js
import {stackedBarChart, processPublicAssistanceData} from "./components/prdLA.js";
```

```js
const rawLA = await FileAttachment("data/prd_calculationsLAC.csv").text();
const {stackedData: laStackedData} = processPublicAssistanceData(rawLA);
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => stackedBarChart(laStackedData, {width}))}
  </div>
</div>

## DC - Public Assistance by Employment Income

```js
import {stackedBarChart as dcStackedBarChart, processPublicAssistanceData as processDCPublicAssistanceData} from "./components/prdDC.js";
```

```js
const rawDC = await FileAttachment("data/prd_calculationsDC.csv").text();
const {stackedData: dcStackedData} = processDCPublicAssistanceData(rawDC);
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => dcStackedBarChart(dcStackedData, {width}))}
  </div>
</div>

## NYC - Public Assistance by Employment Income

```js
import {stackedBarChart as nycStackedBarChart, processPublicAssistanceData as processNYCPublicAssistanceData} from "./components/prdNYC.js";
```

```js
const rawNYC = await FileAttachment("data/prd_calculationsNYC.csv").text();
const {stackedData: nycStackedData} = processNYCPublicAssistanceData(rawNYC);
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => nycStackedBarChart(nycStackedData, {width}))}
  </div>
</div>

## LA County - Net Resources by Employment Income

```js
import {netResourcesChart, processNetResourcesData} from "./components/prdLA.js";
```

```js
const rawLANet = await FileAttachment("data/prd_calculationsLAC.csv").text();
const laNetResourcesData = processNetResourcesData(rawLANet);
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => netResourcesChart(laNetResourcesData, {width}))}
  </div>
</div>

## DC - Net Resources by Employment Income

```js
import {netResourcesChart as dcNetResourcesChart, processNetResourcesData as processDCNetResourcesData} from "./components/prdDC.js";
```

```js
const rawDCNet = await FileAttachment("data/prd_calculationsDC.csv").text();
const dcNetResourcesData = processDCNetResourcesData(rawDCNet);
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => dcNetResourcesChart(dcNetResourcesData, {width}))}
  </div>
</div>

## NYC - Net Resources by Employment Income

```js
import {netResourcesChart as nycNetResourcesChart, processNetResourcesData as processNYCNetResourcesData} from "./components/prdNYC.js";
```

```js
const rawNYCNet = await FileAttachment("data/prd_calculationsNYC.csv").text();
const nycNetResourcesData = processNYCNetResourcesData(rawNYCNet);
```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => nycNetResourcesChart(nycNetResourcesData, {width}))}
  </div>
</div>
