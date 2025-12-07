import * as Plot from "npm:@observablehq/plot";

export const averageBigMacPrice = 9;
export const BigMacNYC = 12.48;
export const BigMacLA = 13.56;
export const BigMacDC = 10.66;
export const BigMacMA = 17.59;

export const bigMacData = [
  {city: "NYC", price: BigMacNYC},
  {city: "LA", price: BigMacLA},
  {city: "DC", price: BigMacDC},
  {city: "MA", price: BigMacMA}
].sort((a, b) => a.price - b.price);

export function bigMacChart({width}) {
  const maxPrice = Math.max(...bigMacData.map(d => d.price), averageBigMacPrice);
  
  return Plot.plot({
    x: {
      label: "City",
      domain: bigMacData.map(d => d.city)
    },
    y: {
      label: "Price ($)",
      domain: [4, maxPrice * 1.1]
    },
    marks: [
      Plot.ruleY([averageBigMacPrice], {
        stroke: "#666",
        strokeDasharray: "4,4",
        strokeWidth: 2
      }),
      Plot.dot(bigMacData, {
        x: "city",
        y: "price",
        fill: "#C62828",
        stroke: "#C62828",
        r: 6,
        tip: true
      }),
      Plot.text(bigMacData, {
        x: "city",
        y: "price",
        text: d => `$${d.price.toFixed(2)}`,
        fill: "black",
        fontSize: 10,
        textAnchor: "middle",
        dy: -12
      })
    ],
    width,
    height: 450
  });
}

