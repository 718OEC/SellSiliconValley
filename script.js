// --- 1. TOGGLE LOGIC ---
function setStrategy(type, btn) {
    document.querySelectorAll('.toggle-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.strat-content').forEach(c => c.classList.remove('active'));
    document.getElementById('strat-' + type).classList.add('active');
}

// --- 2. FAB & THEME ---
function toggleFab() {
    const wrap = document.getElementById('fabWrapper');
    const icon = document.getElementById('fabIcon');
    wrap.classList.toggle('active');
    icon.textContent = wrap.classList.contains('active') ? 'close' : 'map';
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    drawCharts(); // Redraw charts to update text colors
}

// Auto-detect system dark mode on load
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}

// --- 3. CHARTS ---
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    // Check for masterData instead of the old dummy data
    if (typeof masterData === 'undefined' || masterData.length === 0) {
        console.error("masterData not found. Ensure data.js is loaded first.");
        return;
    }

    const isDark = document.body.classList.contains('dark-mode');
    
    // Lighter text color for charts in Dark Mode (#A1A1A6 is standard HIG)
    const textC = isDark ? '#A1A1A6' : '#86868B';
    
    // Apple-esque brand colors matching CSS
    const cBlue = '#007AFF';
    const cPurple = '#AF52DE';
    const cTeal = '#30B0C7';

    const commonOptions = {
        backgroundColor: 'transparent',
        legend: { position: 'none' },
        chartArea: { width: '92%', height: '80%' },
        hAxis: { 
            textStyle: { color: textC, fontName: '-apple-system' }, format: 'yyyy', 
            gridlines: { color: 'transparent' }, baselineColor: 'transparent'
        },
        vAxis: { 
            textPosition: 'none', gridlines: { color: 'transparent' }, baselineColor: 'transparent'
        },
        lineWidth: 4,
        curveType: 'function', 
        animation: { startup: true, duration: 1200, easing: 'out' },
        tooltip: { trigger: 'focus', showColorCode: true }
    };

    const dateFmt = new google.visualization.DateFormat({ pattern: 'MMM yyyy' });

    // --- Price Chart ---
    const dataP = new google.visualization.DataTable();
    dataP.addColumn('date', 'Date');
    dataP.addColumn('number', 'Houses');
    dataP.addColumn('number', 'Condos');
    dataP.addColumn('number', 'Townhomes');
    // Using masterData here
    dataP.addRows(masterData.map(r => [r[0], r[1], r[2], r[3]]));
    dateFmt.format(dataP, 0);

    const chartP = new google.visualization.LineChart(document.getElementById('price_chart'));
    chartP.draw(dataP, { ...commonOptions, colors: [cBlue, cPurple, cTeal] });

    // --- DOM Chart ---
    const dataD = new google.visualization.DataTable();
    dataD.addColumn('date', 'Date');
    dataD.addColumn('number', 'Houses');
    dataD.addColumn('number', 'Condos');
    dataD.addColumn('number', 'Townhomes');
    // Using masterData here
    dataD.addRows(masterData.map(r => [r[0], r[4], r[5], r[6]]));
    dateFmt.format(dataD, 0);

    const chartD = new google.visualization.LineChart(document.getElementById('dom_chart'));
    chartD.draw(dataD, { ...commonOptions, colors: [cBlue, cPurple, cTeal] });

    // --- Volume Chart ---
    const dataV = new google.visualization.DataTable();
    dataV.addColumn('date', 'Date');
    dataV.addColumn('number', 'Volume');
    // Using masterData here
    dataV.addRows(masterData.map(r => [r[0], r[10]])); 
    dateFmt.format(dataV, 0);

    const chartV = new google.visualization.AreaChart(document.getElementById('volume_chart'));
    chartV.draw(dataV, { ...commonOptions, colors: [cBlue], areaOpacity: 0.15 });
}

// Redraw cleanly on screen resize
window.addEventListener('resize', drawCharts);  drawDOMChart(pageData, colors, textStyle, gridColor);
  drawVolumeChart(pageData, colors, textStyle, gridColor);
  drawHousesChart(pageData, colors, textStyle, gridColor);
  drawCondosChart(pageData, colors, textStyle, gridColor);
}
  // Note how the functions now accept 'pageData' as a parameter
function drawPriceChart(pageData, colors, textStyle, gridColor) {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Houses');
  data.addColumn('number', 'Condos');
  data.addColumn('number', 'Townhomes');
  
  // Uses the filtered data!
  data.addRows(pageData.map(r => [r[0], r[1], r[2], r[3]]));

  var options = {
    legend: { position: 'bottom', textStyle: textStyle },
    colors: colors,
    backgroundColor: { fill:'transparent' },
    chartArea: { width: '85%', height: '70%' },
    hAxis: { textStyle: textStyle, format: 'yyyy' },
    vAxis: { textStyle: textStyle, gridlines: { color: gridColor }, format: '$#,###' },
    lineWidth: 3, pointSize: 0,
    curveType: 'function',
    animation: { startup: true, duration: 1000, easing: 'out' }
  };
  var chart = new google.visualization.LineChart(document.getElementById('price_chart'));
  chart.draw(data, options);
function drawHousesChart(pageData, colors, textStyle, gridColor) {
  // Check if the HTML element actually exists on this page before drawing
  if (!document.getElementById('houses_chart')) return;

  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Single Family Houses');
  
  // Pulls only Date [0] and House Price [1]
  data.addRows(pageData.map(r => [r[0], r[1]]));

  var options = {
    legend: { position: 'bottom', textStyle: textStyle },
    colors: [colors[0]], // Uses Brand Blue
    backgroundColor: { fill:'transparent' },
    chartArea: { width: '85%', height: '70%' },
    hAxis: { textStyle: textStyle, format: 'yyyy' },
    vAxis: { textStyle: textStyle, gridlines: { color: gridColor }, format: '$#,###' },
    lineWidth: 3, pointSize: 0,
    curveType: 'function',
    animation: { startup: true, duration: 1000, easing: 'out' }
  };
  var chart = new google.visualization.LineChart(document.getElementById('houses_chart'));
  chart.draw(data, options);
}

function drawCondosChart(pageData, colors, textStyle, gridColor) {
  // Check if the HTML element actually exists on this page before drawing
  if (!document.getElementById('condos_chart')) return;

  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Condos & Townhomes');
  
  // Pulls only Date [0] and Condo Price [2]
  data.addRows(pageData.map(r => [r[0], r[2]]));

  var options = {
    legend: { position: 'bottom', textStyle: textStyle },
    colors: [colors[1]], // Uses Brand Gold
    backgroundColor: { fill:'transparent' },
    chartArea: { width: '85%', height: '70%' },
    hAxis: { textStyle: textStyle, format: 'yyyy' },
    vAxis: { textStyle: textStyle, gridlines: { color: gridColor }, format: '$#,###' },
    lineWidth: 3, pointSize: 0,
    curveType: 'function',
    animation: { startup: true, duration: 1000, easing: 'out' }
  };
  var chart = new google.visualization.LineChart(document.getElementById('condos_chart'));
  chart.draw(data, options);
}
}

function drawDOMChart(pageData, colors, textStyle, gridColor) {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Houses');
  data.addColumn('number', 'Condos');
  data.addRows(pageData.map(r => [r[0], r[4], r[5]]));

  var options = {
    legend: { position: 'bottom', textStyle: textStyle },
    colors: [colors[0], colors[1]], 
    backgroundColor: { fill:'transparent' },
    chartArea: { width: '85%', height: '70%' },
    hAxis: { textStyle: textStyle, format: 'yyyy' },
    vAxis: { textStyle: textStyle, gridlines: { color: gridColor }, title: 'Days on Market' },
    lineWidth: 2, pointSize: 0,
    curveType: 'function'
  };
  var chart = new google.visualization.LineChart(document.getElementById('dom_chart'));
  chart.draw(data, options);
}

function drawVolumeChart(pageData, colors, textStyle, gridColor) {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Houses Sold');
  data.addRows(pageData.map(r => [r[0], r[7]]));

  var options = {
    legend: { position: 'none' }, 
    colors: [colors[0]], 
    backgroundColor: { fill:'transparent' },
    chartArea: { width: '85%', height: '70%' },
    hAxis: { textStyle: textStyle, format: 'yyyy' },
    vAxis: { textStyle: textStyle, gridlines: { color: gridColor }, title: 'Sales Count' },
    lineWidth: 2, 
    areaOpacity: 0.1, 
  };
  var chart = new google.visualization.AreaChart(document.getElementById('volume_chart'));
  chart.draw(data, options);
}

window.addEventListener('resize', drawCharts);
