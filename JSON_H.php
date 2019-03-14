<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.getJSON demo</title>
  <style>
  img {
    height: 100px;
    float: left;
  }
  </style>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>
<p id="xxx"></p>
<script>
function loadJSON(callback) {   

var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
xobj.open('GET', 'member.json', true); // Replace 'my_data' with the path to your file
xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      }
};
xobj.send(null);  
};

function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
    document.getElementById("xxx").innerHTML = actual_JSON.Name;
 });
}
init();
</script>
 
</body>
</html>