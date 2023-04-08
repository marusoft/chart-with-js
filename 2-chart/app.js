anychart.onDocumentReady(function () {
  // set the data as an array
  let dataSet = [
    ["2000", 320.09],
    ["2001", 331.81],
    ["2002", 378.46],
    ["2003", 440.53],
    ["2004", 493],
    ["2005", 533.2],
    ["2006", 558.34],
    ["2007", 589.59],
    ["2008", 656.76],
    ["2009", 705.92],
    ["2010", 738.01],
    ["2011", 752.29],
    ["2012", 725.21],
    ["2013", 679.23],
    ["2014", 647.79],
    ["2015", 633.83],
    ["2016", 639.86],
    ["2017", 646.75],
    ["2018", 682.49],
    ["2019", 731.75],
    ["2020", 766.58],
  ];

  // create an area chart
  let chart = anychart.area();

  // load the data to the chart
  chart.data(dataSet);

  // set the chart title
  chart.title("Military Budget of the USA");

  // set the container id for the chart
  chart.container("container");

  // initiate drawing the chart
  chart.draw();
});
