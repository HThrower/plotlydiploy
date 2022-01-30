function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] 
    }];
    Plotly.newPlot("plot", data);
  };
  
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: topFiveCityNames,
      y: topFiveCityGrowths,
      type: "bar"
    };
    var data = [trace];
    var layout = {
      title: "Most Rapidly Growing Cities",
      xaxis: {title: "City" },
      yaxis: {title: "Population Growth, 2016-2017"}
    };
    Plotly.newPlot("bar-plot", data, layout);
  };
  
  init();