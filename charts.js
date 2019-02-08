
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

//timeline with control
google.charts.load('current', { 'packages': ['controls'] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    var dashboard = new google.visualization.Dashboard(
    document.getElementById('dashboard'));

    var control = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
            'containerId': 'control',
            'options': {
            // Filter by the date axis.
            'filterColumnIndex': 0,
            //'filterColumnLabel':'Name',
            ui:{
                'allowTyping': false,
                'allowMultiple': true,
                'orientation': 'horizontal',
                'showRangeValues': false,
                'label': 'Cottage'
            }
        },
        // Initial range: 2012-02-09 to 2012-03-20.
        //'state': {'range': {'start': new Date(1380740460000), 'end': new Date(1380740480000)}}
    });

    var chart = new google.visualization.ChartWrapper({
        'chartType': 'Timeline',
        'containerId': 'chart',
        'options': {
        //'filterColumnLabel': 'Name',
        'width': 900,
        'height': 600,
        'chartArea': {
                width: '80%', // make sure this is the same for the chart and control so the axes align right
                height: '80%'
            },
        'backgroundColor': '#ffd'
        },
        hAxis:{
            format:'HH:MM',
            slantedText:false,
            maxAlternation:1
        },
        'view': {
            'columns': [0,1,2,3]
        }
    });

    var data = new google.visualization.DataTable();
    data.addColumn({
        type: 'string',
        id: 'Cottage'
    })
    data.addColumn({
        type: 'string',
        id: 'Name'
    })
    data.addColumn({
        type: 'date',
        id: 'Start'
    });
    data.addColumn({
        type: 'date',
        id: 'End'
    });

    data.addRows([
        [ 'Magnolia',  'Ivy',  new Date(0,0,0,12,0,0),  new Date(0,0,0,14,0,0) ],
        [ 'Magnolia',  'Ken'  ,new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
        [ 'Magnolia',   'Princess',new Date(0,0,0,16,30,0), new Date(0,0,0,19,0,0) ],
        [ 'Gladiolus',  'Janine',  new Date(0,0,0,12,30,0), new Date(0,0,0,14,0,0) ],
        [ 'Gladiolus',   'Ken',    new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
        [ 'Gladiolus',    'Vy',    new Date(0,0,0,16,30,0), new Date(0,0,0,18,0,0) ],
        [ 'Petunia',    'Janine',     new Date(0,0,0,12,30,0), new Date(0,0,0,14,0,0) ],
        [ 'Petunia',      'Vy',      new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
        [ 'Petunia',     'Princess',       new Date(0,0,0,16,30,0), new Date(0,0,0,18,30,0) ]]);
    
    dashboard.bind(control, chart);
    dashboard.draw(data);
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