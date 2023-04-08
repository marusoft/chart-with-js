# Introduction to Chart in JavaScript
-------------------------------------
[https://www.chartjs.org/docs/latest/getting-started/](https://www.chartjs.org/docs/latest/getting-started/)

[https://levelup.gitconnected.com/building-area-charts-with-javascript-580891398e0](https://levelup.gitconnected.com/building-area-charts-with-javascript-580891398e0)

[https://www.anychart.com/](https://www.anychart.com/)
[https://docs.anychart.com/Quick_Start/Modules#base](https://docs.anychart.com/Quick_Start/Modules#base)

### Getting Started
[Anychart](https://www.anychart.com/)

- Create an html file (`index.html`)
- Reference [Anychart](https://docs.anychart.com/Quick_Start/Modules#base) `cdn` in the `<head>` section before any other modules.
  
  ```html
  <head>
    <script src="https://cdn.anychart.com/releases/8.11.0/js/anychart-base.min.js"></script>
  </head>
  ```
- create a container for the chart and give it an `id`
  ```html
  <div id="container"></div>
  ```
- create a JavaScript file
- Write some JavaScript code to draw the chart
  
 ```js
  anychart.onDocumentReady(function () {
  // set the data as an array
  let dataSet = [
  ];

  // create an area chart
  let chart = anychart.area();

  // load the data to the chart
  chart.data(dataSet);

  // set the chart title
  chart.title("Title of the chart");

  // set the container id for the chart
  chart.container("your container id");

  // initiate drawing the chart
  chart.draw();
  
});

```

### How to Customize a JavaScript Area Chart
- fine-tune the X-scale, 
  ```js
  chart.xScale().mode('continuous');
  ```
- add a crosshair, 
- change the color of areas, 
- add a legend and axes titles, and 
- configure the hover mode.