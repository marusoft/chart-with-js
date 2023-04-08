anychart.onDocumentReady(function () {
  // add the data as an array
  var dataSet = [
    ["2000", 320.09, 9.23],
    ["2001", 331.81, 11.68],
    ["2002", 378.46, 13.94],
    ["2003", 440.53, 16.97],
    ["2004", 493, 20.96],
    ["2005", 533.2, 27.34],
    ["2006", 558.34, 34.52],
    ["2007", 589.59, 43.53],
    ["2008", 656.76, 56.18],
    ["2009", 705.92, 51.53],
    ["2010", 738.01, 58.72],
    ["2011", 752.29, 70.24],
    ["2012", 725.21, 81.47],
    ["2013", 679.23, 88.35],
    ["2014", 647.79, 84.7],
    ["2015", 633.83, 66.42],
    ["2016", 639.86, 69.25],
    ["2017", 646.75, 66.53],
    ["2018", 682.49, 61.39],
    ["2019", 731.75, 65.1],
    ["2020", 766.58, 61.71],
  ];

  // create a dataset for mapping
  var budgetData = anychart.data.set(dataSet);

  // create an area chart
  var chart = anychart.area();

  // map the data
  var seriesData_1 = budgetData.mapAs({ x: 0, value: 1 });
  var seriesData_2 = budgetData.mapAs({ x: 0, value: 2 });

  // create the first series, set the data and name
  var series1 = chart.area(seriesData_1);
  series1.name("USA");

  // create the second series, set the data and name
  var series2 = chart.area(seriesData_2);
  series2.name("Russia");

  // set the chart title
  chart.title("Military Budgets of the USA and Russia");

  // set the container id for the chart
  chart.container("container");

  // initiate drawing the chart
  chart.draw();
  // get rid of the gaps to the right and left of the area.
  chart.xScale().mode("continuous");
  // vertical crosshair line of a hovered data point.
  let crosshair = chart.crosshair();
  crosshair.enabled(true).yStroke(null).xStroke("#fff");
  crosshair.yLabel().enabled(false);
// change the color of the
});
