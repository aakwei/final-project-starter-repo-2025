import * as Plot from "npm:@observablehq/plot";

const occupations = [
  "Management", "Business & Finance", "Computer & Mathematical", "Architecture & Engineering",
  "Life/Physical/Social Science", "Community & Social Service", "Legal", "Education & Library",
  "Arts/Entertainment/Media", "Healthcare Practitioners", "Healthcare Support",
  "Protective Service", "Food Preparation", "Building Maintenance", "Personal Care",
  "Sales", "Office Support", "Farming", "Construction", "Maintenance & Repair",
  "Production", "Transportation"
];

const salaries = [
  172710, 111140, 124300, 124010,
  124080, 66450, 213280, 82760,
  102950, 112190, 40640,
  62820, 42760, 45280, 45020,
  72890, 55320, 43520, 73550, 64770,
  50120, 54070
];

const livingWage = 44.21 * 2080;
const povertyWage = 15.46 * 2080;
const minimumWage = 17.50 * 2080;

export const data = occupations.map((d, i) => ({
  occupation: d,
  salary: salaries[i]
})).sort((a, b) => a.salary - b.salary);

export function wageComparisonChart(data, {width}) {
  const maxSalary = Math.max(...data.map(d => d.salary));
  const minSalary = Math.min(...data.map(d => d.salary));
  const xRange = maxSalary - minSalary;
  const legendX = maxSalary - xRange * 0.12;
  
  // Get the first 3 occupations (lowest salaries, at top of chart when sorted ascending)
  const topOccupations = data.slice(0, 3).map(d => d.occupation);
  
  const legendData = [
    {label: "Living Wage", color: "#2E7D32", occupation: topOccupations[0]},
    {label: "Poverty Line", color: "#C62828", occupation: topOccupations[1]},
    {label: "Minimum Wage", color: "#F57C00", occupation: topOccupations[2]}
  ];
  
  // Ensure x-axis includes all reference lines
  const xMin = Math.min(minSalary, povertyWage, minimumWage, livingWage) * 0.85;
  const xMax = Math.max(maxSalary, livingWage) * 1.05;
  
  return Plot.plot({
    x: {label: "Annual Income ($)", grid: false, domain: [xMin, xMax]},
    y: {label: "Occupation", domain: data.map(d => d.occupation)},
    marginLeft: 180,
    marginRight: 40,
    marginTop: 60,
    marginBottom: 40,
    marks: [
      Plot.ruleX([livingWage], {stroke: "#2E7D32", strokeDasharray: "8,4", strokeWidth: 2}),
      Plot.ruleX([povertyWage], {stroke: "#C62828", strokeDasharray: "2,2", strokeWidth: 2}),
      Plot.ruleX([minimumWage], {stroke: "#F57C00", strokeDasharray: "6,3", strokeWidth: 2}),
      Plot.dot(data, {
        x: "salary",
        y: "occupation",
        stroke: (d) => d.salary < livingWage ? "#C62828" : "#2E7D32",
        fill: (d) => d.salary < livingWage ? "#C62828" : "#2E7D32",
        r: 4,
        tip: true
      }),
      Plot.text(legendData, {
        x: legendX,
        y: "occupation",
        text: (d) => "▬ " + d.label,
        fill: (d) => d.color,
        textAnchor: "start",
        fontSize: 11,
        dx: 8
      })
    ],
    width,
    height: 600
  });
}

