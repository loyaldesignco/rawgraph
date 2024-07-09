export const mapData = function (data, mapping) {
  return data.map((d) => ({
    start: d[mapping.start.value],
    duration: d[mapping.duration.value],
    category: d[mapping.category.value],
  }))
}
