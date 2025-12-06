import * as Plot from "npm:@observablehq/plot";

const occupations = [
  "Management", "Business & Finance", "Computer & Mathematical", "Architecture & Engineering",
  "Life/Physical/Social Science", "Community & Social Service", "Legal", "Education & Library",
  "Arts/Entertainment/Media", "Healthcare Practitioners", "Healthcare Support",
  "Protective Service", "Food Preparation", "Building Maintenance", "Personal Care",
  "Sales", "Office Support", "Farming", "Construction", "Maintenance & Repair",
  "Production", "Transportation"
];

const salariesLA = [
  160360, // Management
  101390, // Business & Financial Operations
  142270, // Computer & Mathematical
  121910, // Architecture & Engineering
  103010, // Life, Physical, & Social Science
  69470,  // Community & Social Service
  166300, // Legal
  80940,  // Education, Training, & Library
  97180,  // Arts, Design, Entertainment, Sports, & Media
  128010, // Healthcare Practitioners & Technical
  40280,  // Healthcare Support
  69330,  // Protective Service
  40300,  // Food Preparation & Serving Related
  44510,  // Building & Grounds Cleaning & Maintenance
  44170,  // Personal Care & Service
  59650,  // Sales & Related
  54960,  // Office & Administrative Support
  38590,  // Farming, Fishing, & Forestry
  74240,  // Construction & Extraction
  66960,  // Installation, Maintenance, & Repair
  51340,  // Production
  50010   // Transportation & Material Moving
];




const livingWage = 50.11 * 2080;
const povertyWage = 15.46 * 2080;
const minimumWage = 16.50 * 2080;

export const data = occupations.map((d, i) => ({
  occupation: d,
  salary: salariesLA[i]
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
    {label: "Poverty Line", color: "#F57C00", occupation: topOccupations[1]},
    {label: "Minimum Wage", color: "#C62828", occupation: topOccupations[2]}
  ];
  
  // Ensure x-axis includes all reference lines
  const xMin = Math.min(minSalary, povertyWage, minimumWage) * 0.9;
  const xMax = Math.max(maxSalary, livingWage) * 1.05;
  
  return Plot.plot({
    x: {label: "Annual Income ($)", grid: true, domain: [xMin, xMax]},
    y: {label: "Occupation", domain: data.map(d => d.occupation)},
    marginLeft: 180,
    marginRight: 40,
    marginTop: 60,
    marginBottom: 40,
    marks: [
      Plot.ruleX([livingWage], {stroke: "#2E7D32", strokeDasharray: "4", strokeWidth: 2}),
      Plot.ruleX([povertyWage], {stroke: "#F57C00", strokeDasharray: "4", strokeWidth: 2}),
      Plot.ruleX([minimumWage], {stroke: "#C62828", strokeDasharray: "4", strokeWidth: 2}),
      Plot.dot(data, {
        x: "salary",
        y: "occupation",
        stroke: "blue",
        fill: "blue",
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

