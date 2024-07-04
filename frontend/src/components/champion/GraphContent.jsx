import * as d3 from "d3";
import { useLayoutEffect, useRef } from "react";

const GraphContent = ({ props }) => {
    const ref = useRef();
    //const values = [["2024-06-17", 49.22], ["2023-06-17", 44.22], ["2022-06-17", 34.22], ["2021-06-17", 50.22], ["2023-02-17", 50.22]];
    const values = props.data
    values.sort((a, b) => {
        let dateA = new Date(a[0]); // Parse each date string into a Date object
        let dateB = new Date(b[0]);
        return dateA - dateB; // Compare the dates
    });


    useLayoutEffect(() => {
        setTimeout(() => {
            d3.select(ref.current).selectAll('svg').remove();

            const width = props.dim
            const height = props.dim
            const padding = props.dim / 10
            const svg = d3
                .select(ref.current)
                .append('svg')
                .attr('width', width)
                .attr('height', height);

            const datesArray = values.map((d) => {
                return new Date(d[0])
            })

            //each graph should spawn in the top left corner of its respective container element
            //scale used to create visual x-axis representation
            const xAxisScale = d3
                .scaleTime()
                .domain([d3.min(datesArray), d3.max(datesArray)])
                .range([padding, width - padding]);

            //scale used to create visual y-axis representation AND position elements
            const yAxisScale = d3
                .scaleLinear()
                .domain([0, 1])
                .range([height - padding, padding]);  
            
            svg.selectAll('circle')
                .data(values)
                .enter()
                .append('circle')//creates circle elements
                .attr('class', 'dataPoint')
                .attr('data-date', (d) => {
                    return d[0]
                })
                .attr('data-value', (d) => {
                    return d[1]
                })
                .attr('fill', "orange")
                .attr('cx', (d, i) => xAxisScale(datesArray[i])) //x position (positioned using index i since the x axis is scaled using dates)
                .attr('cy', (d) => yAxisScale(d[1] / 100)) //y position
                .attr('r', (d) => 5); //radius size of each point

            svg.selectAll("line")
                .data(values.slice(1)) //Start from the second data point
                .enter()
                .append("line")
                .attr("x1", (d, i) => xAxisScale(datesArray[i]))
                .attr("y1", (d, i) => yAxisScale(values[i][1] / 100)) //Use past data point
                .attr("x2", (d, i) => xAxisScale(datesArray[i + 1]))
                .attr("y2", (d) => yAxisScale(d[1] / 100)) //Use the current data point
                .style("stroke", "orange")
                .style("stroke-width", 3);

            const xAxis = d3.axisBottom(xAxisScale)
            const yAxis = d3.axisLeft(yAxisScale)
            yAxis.tickFormat(d3.format(".0%")); //display percentages

            //Remember svg = d3.select('svg');
            svg.append('g')
                .call(xAxis) //draws x axis within g element
                .attr('id', 'x-axis')
                //centers the x axis. translate(x, y)
                //height-padding must be in brackets
                .attr('transform', 'translate(0, ' + (height - padding) + ')')
                .selectAll("text") // Select all x-axis labels
                .attr("transform", "rotate(-30)") // Rotate labels
                .style("text-anchor", "end") // Align labels to the end of the tick
                .attr("dx", "-.8em") // Adjust horizontal position
                .attr("dy", ".15em"); // Adjust vertical position

            svg.append('g')
                .call(yAxis)
                .attr('id', 'y-axis')
                .attr('transform', 'translate(' + padding + ', 0)')
                .call(g => g.selectAll(".tick line").clone() //For grid lines
                    .attr("x2", width - padding - padding)
                    .attr("stroke", "orange")
                    .attr("stroke-opacity", 0.5));

        }, 150)

    });

    return (
        <svg id={props.id} ref={ref} className='w-full h-full flex justify-center items-center'>
            <h2>Test Graph</h2>
        </svg>
    )
}

export default GraphContent