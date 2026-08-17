// --- FAB NAV LOGIC ---
function toggleFab() {
    const container = document.getElementById('fabContainer');
    const icon = document.getElementById('fabIcon');
    container.classList.toggle('active');
    
    if (container.classList.contains('active')) {
        icon.textContent = 'close';
    } else {
        icon.textContent = 'map'; 
    }
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    toggleFab(); // Close menu
    alert('Link copied to clipboard!');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const container = document.getElementById('fabContainer');
    if (!container.contains(event.target) && container.classList.contains('active')) {
        toggleFab();
    }
});
// ---------------------

function toggleTheme() {
    const themeIcon = document.getElementById("themeIcon");
    
    if (themeIcon) {
        // 1. Trigger the spin-out CSS animation
        themeIcon.classList.add("spin-out");
        
        // 2. Wait exactly halfway through the CSS rotation (200ms)
        setTimeout(() => {
            // Swap the actual theme
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            
            // Swap the icon text visually 
            themeIcon.textContent = isDark ? "light_mode" : "dark_mode";
            
            // 3. Remove the rotation class so it spins back into view smoothly
            themeIcon.classList.remove("spin-out");
            
            // Redraw the Google Charts with the new theme colors if the function exists
            if (typeof drawCharts === 'function') {
                drawCharts();
            }
        }, 200);
    } else {
        // Fallback just in case the icon ID gets deleted
        document.body.classList.toggle('dark-mode');
        if (typeof drawCharts === 'function') drawCharts();
    }
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}

google.charts.load('current', {'packages':['corechart']});
let chartsLoaded = false;
google.charts.setOnLoadCallback(() => { chartsLoaded = true; checkIntersection(); });

function checkIntersection() {
    if (!chartsLoaded) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                drawCharts();
                observer.disconnect();
            }
        });
    });
    const target = document.querySelector('.chart-box');
    if (target) observer.observe(target);
}

function drawCharts() {
  if (typeof masterData === 'undefined' || !masterData.length) {
      console.warn("Chart data not found. Ensure data.js is loaded.");
      return;
  }

  // 1. Read the start and end years from the HTML <body> tag
  const startYear = parseInt(document.body.getAttribute('data-start')) || 1998;
  const endYear = parseInt(document.body.getAttribute('data-end')) || 2025;

  // 2. Filter the master dataset to only include this page's decade
  const pageData = masterData.filter(row => {
      const year = row[0].getFullYear();
      return year >= startYear && year <= endYear;
  });

  const isDark = document.body.classList.contains('dark-mode');
  const colors = isDark ? ['#006AFF', '#FFD237', '#A6E5FF'] : ['#006AFF', '#FFD237', '#001751'];
  const textStyle = { color: isDark ? '#b0c4de' : '#546e7a' };
  const gridColor = isDark ? '#334' : '#e0e0e0';

  // 3. Pass the filtered pageData to the drawing functions
  drawPriceChart(pageData, colors, textStyle, gridColor);
  drawDOMChart(pageData, colors, textStyle, gridColor);
  drawVolumeChart(pageData, colors, textStyle, gridColor);
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

window.addEventListener('resize', drawCharts);
