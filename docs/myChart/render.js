import * as d3 from 'd3'

export function render(node, data, visualOptions) {
  const { width, height, background } = visualOptions
  const svg = d3.select(node).attr('width', width).attr('height', height).style('background', background)

  const xScale = d3.scaleTime().domain(d3.extent(data, d => d.start)).range([0, width])
  const yScale = d3.scaleBand().domain(data.map(d => d.category)).range([0, height]).padding(0.1)

  svg.selectAll('rect')
    .data(data)
    .enter().append('rect')
    .attr('x', d => xScale(d.start))
    .attr('y', d => yScale(d.category))
    .attr('width', d => xScale(d.start) + d.duration * 24 * 60 * 60 * 1000 - xScale(d.start))
    .attr('height', yScale.bandwidth())
    .attr('fill', 'steelblue')
}
