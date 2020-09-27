// // d3.csv('cities.csv', d3.autoType).then(data => {
// // 	const svg = d3.select('body').append('svg')
// // 		.attr('width', 500)
// // 		.attr('height', 500);
// // 	svg.selectAll('circle')
// // 		.data(data)
// // 		.enter()
// // 		.append('circle')
// // 		.attr('cx', (d,i)=> (i+1) *20)
// // 		.attr('r', 5)
// // 		.attr('fill', 'skyblue')
// // 	console.log('cities', data);
// // 	d3.select('.city-count').text(cities.country)
// // })

d3.csv('cities.csv', d3.autoType).then(data => {
	data = data.filter(d => d.eu)
	const svg = d3.select('body').append('svg')
		.attr('width', 500)
		.attr('height', 500);
		svg.selectAll('circle')
			.data(data)
			.enter()
			.append('circle')
			.attr('cx', (d,i)=> (i+1) *20)
			.attr('r', 5)
			.attr('fill', 'skyblue')
		d3.select('.city-count').text(5)
		
})
