
//history table
google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);

function drawTable() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Salary');
    data.addColumn('boolean', 'Full Time Employee');
    data.addRows([
      ['Mike',  {v: 10000, f: '$10,000'}, true],
      ['Jim',   {v:8000,   f: '$8,000'},  false],
      ['Alice', {v: 12500, f: '$12,500'}, true],
      ['Bob',   {v: 7000,  f: '$7,000'},  true]
    ]);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
  }

google.charts.setOnLoadCallback(drawInv);
function drawInv() {
    var cssClassNames = {
        'headerRow': 'italic-darkblue-font large-font bold-font',
        'tableRow': 'bold-green-font',
        'oddTableRow': 'beige-background',
        'selectedTableRow': 'orange-background large-font',
        'hoverTableRow': '',
        'headerCell': 'gold-border',
        'tableCell': '',
        'rowNumberCell': ''};
    
   
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Salary');
    data.addColumn('boolean', 'Full Time Employee');
    data.addRows([
      ['Mike',  {v: 10000, f: '$10,000'}, true],
      ['Jim',   {v:8000,   f: '$8,000'},  false],
      ['Alice', {v: 12500, f: '$12,500'}, true],
      ['Bob',   {v: 7000,  f: '$7,000'},  true]
    ]);

    var table = new google.visualization.Table(document.getElementById('inv_div'));

    var formatter = new google.visualization.ColorFormat();
    formatter.addRange(0,7500, 'white', 'orange');
    formatter.addRange(20000, null, 'red', '#33ff33');
    formatter.format(data, 1); // Apply formatter to second column

    var options = {'showRowNumber': true, 'allowHtml': true, width: '100%', height: '100%','cssClassNames': cssClassNames};
    table.draw(data, options);
}


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization_query);
function drawVisualization_query() {
    var query = new google.visualization.Query(
        'http://spreadsheets.google.com/tq?key=pCQbetd-CptGXxxQIG7VFIQ&pub=1');

    // Apply query language statement.
    query.setQuery('SELECT A,D WHERE D > 100 ORDER BY D');
    
    // Send the query with a callback function.
    query.send(handleQueryResponse);
  }

  function handleQueryResponse(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

    var data = response.getDataTable();
    visualization = new google.visualization.LineChart(document.getElementById('visualization'));
    visualization.draw(data, {legend: 'bottom'});
  }