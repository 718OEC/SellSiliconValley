const resinvData = [
  [new Date(1998, 0, 1), 359975, 355000, 405000, 461500, 19200, 32600, 41700, 5.6, 6.43, 6.91, 13.75, 12.54, 11.04],
  [new Date(1999, 0, 1), 409750, 400000, 475000, 570000, 20820, 38400, 45200, 5.42, 6.33, 6.35, 14.02, 13.23, 12.04],
  [new Date(2000, 0, 1), 542000, 530125, 657500, 725000, 20100, 40200, 49302, 4.62, 4.81, 5.57, 16.17, 16.63, 13.54],
  [new Date(2001, 0, 1), 533375, 557500, 632500, 795000, 25068, 41400, 57024, 5.18, 4.57, 5.81, 14.96, 15.73, 13.19],
  [new Date(2002, 0, 1), 550000, 596500, 667500, 800000, 24150, 42135, 59489, 4.77, 4.74, 5.47, 15.72, 15.57, 13.76],
  [new Date(2003, 0, 1), 560000, 595000, 688050, 785000, 27900, 40650, 52784, 4.16, 4.35, 4.42, 17.44, 15.89, 14.91],
  [new Date(2004, 0, 1), 639750, 654250, 742000, 799990, 24600, 40800, 49760, 3.41, 3.75, 4.41, 21.01, 19.08, 15.84],
  [new Date(2005, 0, 1), 745000, 690000, 871250, 895000, 24600, 40000, 49981, 3.05, 3.43, 3.82, 22.58, 21.81, 18.01],
  [new Date(2006, 0, 1), 770000, 798000, 838000, 942500, 26400, 37800, 52671, 2.7, 3.02, 3.55, 24.87, 21.75, 18.75],
  [new Date(2007, 0, 1), 858500, 825000, 916500, 965000, 28800, 48360, 54250, 3.03, 3.78, 3.82, 24.13, 19.86, 18.13],
  [new Date(2008, 0, 1), 682500, 600500, 852000, 875000, 32400, 42000, 57440, 0.83, 4.2, 4.65, 20.97, 21.26, 17.22],
  [new Date(2009, 0, 1), 552500, 420000, 635000, 700000, 31200, 46932, 56430, -1.14, 2.72, 5.01, 18.14, 15.82, 13.58],
  [new Date(2010, 0, 1), 609000, 465000, 535000, 693000, 31200, 40954, 57270, 2.06, 4.43, 4.94, 17.26, 15.4, 13.13],
  [new Date(2011, 0, 1), 572000, 475000, 510000, 750000, 33600, 44250, 64200, 1.4, 3.78, 5.11, 16.53, 17.44, 12.38],
  [new Date(2012, 0, 1), 698500, 600000, 700000, 850000, 33600, 46560, 61035, 2.94, 4.4, 4.85, 18.72, 15.37, 14.24],
  [new Date(2013, 0, 1), 814875, 720000, 919500, 960000, 33600, 50124, 64920, 3.6, 3.85, 4.47, 19.3, 19, 15.17],
  [new Date(2014, 0, 1), 893875, 792500, 1062500, 1110000, 41250, 54036, 66996, 4.31, 3.88, 4.28, 22.61, 19.16, 15.82],
  [new Date(2015, 0, 1), 998250, 952000, 1000000, 1307500, 37200, 57285, 69996, 3.77, 3.92, 4.01, 20.21, 19.59, 17.35],
  [new Date(2016, 0, 1), 1085500, 1050300, 1400000, 1500000, 41100, 56480, 81398, 3.44, 3.61, 3.88, 21.26, 19.8, 17.33],
  [new Date(2017, 0, 1), 1259000, 1255000, 1588750, 1596000, 46830, 77298, 84431, 3.34, 3.78, 3.79, 21.61, 20.33, 17.96],
  [new Date(2018, 0, 1), 1377500, 1400000, 1650000, 1880000, 50760, 62073, 86379, 2.84, 3.03, 3.49, 26.6, 25.79, 19.33],
  [new Date(2019, 0, 1), 1314500, 1350000, 1692000, 1762500, 50760, 74400, 98556, 3.03, 3.55, 3.85, 24.09, 20.6, 17.95],
  [new Date(2020, 0, 1), 1466000, 1372000, 1830000, 1828000, 59306, 93702, 100739, 3.2, 3.37, 3.79, 21.82, 22.06, 17.54],
  [new Date(2021, 0, 1), 1750000, 1450000, 1730625, 1927500, 60528, 82052, 99639, 3.21, 3.54, 3.54, 22.27, 20.14, 19.39],
  [new Date(2022, 0, 1), 1754000, 1482500, 1715000, 2003500, 58800, 82428, 101361, 2.9, 3.58, 3.44, 23.79, 20.11, 19.14],
  [new Date(2023, 0, 1), 1810625, 1400000, 1605000, 1900000, 60000, 89077, 106470, 3.11, 3.48, 3.5, 21.81, 20.84, 17.77],
  [new Date(2024, 0, 1), 1997500, 1600000, 1650000, 2080000, 60000, 87358, 111104, 2.91, 3.88, 3.94, 23.17, 18.75, 16.78],
  [new Date(2025, 0, 1), 2007500, 1490000, 1835832, 1800000, 64800, 88493, 114654, 3.22, 3.4, 4.25, 21.4, 21.87, 15.79],
  ];
let filters = { price: 'All', cap: 'All', grm: 'All' };
let chartP = null, chartC = null, chartG = null;
let dataP = null, dataC = null, dataG = null;

// Initialize Google Charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

// --- 1. HISTORICAL TIMELINE INSIGHTS ---
const historicalInsights = {
    1997: { title: "1997: The Taxpayer Relief Act", text: "The government exempted up to $500,000 in capital gains on home sales. Paired with the dawn of the internet age, Silicon Valley real estate became a hyper-lucrative investment vehicle overnight." },
    1999: { title: "1999: Dot-Com Mania", text: "The NASDAQ doubled in a single year. Pre-revenue internet startups minted paper millionaires daily, pouring unprecedented cash into local housing." },
    2000: { title: "2000: The Dot-Com Peak", text: "NASDAQ hit its all-time high in March, fueling immense wealth and peak home buying before the eventual collapse." },
    2001: { title: "2001: The Dot-Com Bust", text: "The tech bubble burst. Stock portfolios vanished, layoffs swept the Valley, and home prices took a hit as the local economy contracted." },
    2003: { title: "2003: The 1% Fix", text: "To stimulate the post-bust economy, the Fed slashed interest rates to 1%. Cheap debt flooded the market, planting the seeds for the subprime housing bubble." },
    2005: { title: "2005: The Housing Bubble", text: "Predatory lending caused an influx of home purchases by unqualified buyers. Silicon Valley saw aggressive speculation and flipping." },
    2007: { title: "2007: Subprime Cracks", text: "Major subprime lenders began filing for bankruptcy. Liquidity dried up, and Silicon Valley felt the initial shockwaves of the looming global financial crisis." },
    2008: { title: "2008: The Great Recession", text: "Lehman Brothers collapsed and foreclosures spiked. Prices would eventually bottom out in 2009/2010." },
    2010: { title: "2010: Web 2.0 Recovery", text: "While national real estate floundered, Silicon Valley began its recovery early. Apple released the iPad, and companies like Netflix and Google ignited the Web 2.0 hiring boom." },
    2012: { title: "2012: Facebook IPO", text: "The first major 'Tech IPO' of the new era minted millionaires overnight. When employee lock-up periods expired, cash flooded the housing market." },
    2014: { title: "2014: Tech Boom 2.0", text: "Tech hardware and software converged. Construction on the $5B Apple Park was in full swing, driving massive job growth and heavy double-digit home appreciation." },
    2015: { title: "2015: Million Dollar Floor", text: "March median home prices crossed the $1M threshold, officially paving the way to the ultra-luxury housing market we know today." },
    2016: { title: "2016: Election & IPO Lull", text: "Global uncertainty and a stalling tech IPO market caused a brief pause in Silicon Valley real estate, with inventory sitting slightly longer than usual." },
    2018: { title: "2018: The 5% Scare", text: "Mortgage rates hit 5% once more, causing fear, a dip in tech stocks, and a sharp localized market correction." },
    2019: { title: "2019: The IPO Dud", text: "Highly anticipated mega-IPOs like Uber and Lyft went public but underperformed. The expected 'millionaire housing boom' never materialized, but low rates kept the market strong." },
    2020: { title: "2020: The Great Pivot", text: "The pandemic forced a shift to remote work. Space became the ultimate premium, making the suburbs hotter than ever." },
    2021: { title: "2021: Free Money", text: "Interest rates hit historic lows (sub-3%). Tech stocks soared, giving buyers near-infinite purchasing power and driving the steepest appreciation curve in history." },
    2022: { title: "2022: The Rate Shock", text: "Inflation forced the Fed to aggressively hike rates. Tech companies began mass layoffs, and home prices corrected sharply in Q3/Q4." },
    2023: { title: "2023: The AI Renaissance", text: "The launch of ChatGPT sparked an AI gold rush. Tech stocks—led by Nvidia—ballooned, reviving buyer purchasing power despite 7% mortgage rates." },
    2024: { title: "2024: Golden Handcuffs", text: "Inventory hit record lows because homeowners refused to trade their pandemic-era 3% mortgages for new 7% rates, keeping prices artificially high." },
    2025: { title: "2025: The Great Divergence", text: "Single Family houses hit new records ($2.0M+), while 2-4 unit multi-family properties corrected sharply, expanding yields significantly." }
};

const defaultInsight = {
    title: "History Rhymes: The AI Parallel",
    text: "Today's AI boom feels eerily similar to the Dot-Com surge of 1999/2000. Just like then, we are seeing immense wealth creation. But even when the Dot-Com bubble burst in 2001, home prices merely paused and didn't crash until the unrelated subprime bubble years later.<br><br><strong>The Lesson:</strong> Market crashes usually aren't a good time to buy simply because it's in a moment of economic uncertainty."
};

// --- 2. MODULAR FILTER LOGIC ---
function setFilter(chartType, propertyType, btn) {
    filters[chartType] = propertyType;
    
    const container = btn.closest('.filter-row');
    const pills = container.querySelectorAll('.filter-pill');

    pills.forEach(p => {
        p.classList.remove('active', 'passive');
        if (propertyType === 'All') {
            if(p.innerText.includes('All')) p.classList.add('active');
        } else {
            if (p === btn) p.classList.add('active');
            else p.classList.add('passive');
        }
    });

    if (chartType === 'price') {
        document.getElementById('insight-title').innerHTML = defaultInsight.title;
        document.getElementById('insight-text').innerHTML = defaultInsight.text;
    }

    drawCharts();
}

// --- 3. STRATEGY & DOCK DRAWER TOGGLES ---
function setStrategy(type, btn) {
    document.querySelectorAll('.strategy-container .toggle-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.strategy-container .strat-content').forEach(c => c.classList.remove('active'));
    document.getElementById('strat-' + type).classList.add('active');
}

function toggleDrawer(e) {
    if (e) e.stopPropagation(); 
    const drawer = document.getElementById('era-drawer');
    drawer.classList.toggle('open');
}

document.addEventListener('click', (e) => {
    const drawer = document.getElementById('era-drawer');
    const toggleBtn = document.getElementById('era-toggle');
    if (drawer && drawer.classList.contains('open')) {
        if (!drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
            drawer.classList.remove('open');
        }
    }
});

// --- 4. AUTO DARK MODE ---
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    if (typeof drawCharts === "function" && resinvData.length > 0) drawCharts(); 
});

// --- 5. CORE DRAWING FUNCTION ---
function drawCharts() {
    if (!resinvData || resinvData.length === 0) return;

    const isDark = document.body.classList.contains('dark-mode');
    const textC = isDark ? '#A1A1A6' : '#86868B';
    const gridC = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)';
      
    // The 4 Apple HIG Semantic Colors
    const cRed    = isDark ? '#FF453A' : '#FF3B30'; // Houses
    const cBlue   = isDark ? '#0A84FF' : '#007AFF'; // Duplex
    const cGreen  = isDark ? '#32D74B' : '#34C759'; // Triplex
    const cYellow = isDark ? '#FFD60A' : '#FFCC00'; // Fourplex

    const dateFmt = new google.visualization.DateFormat({ pattern: 'yyyy' });
    const currencyFmt = new google.visualization.NumberFormat({ prefix: '$', pattern: 'short' });

    // Filter Logic setup
    let activeColsP = [0, 1, 2, 3, 4]; 
    let activeColorsP = [cRed, cBlue, cGreen, cYellow];
    if (filters.price === 'Houses') { activeColsP = [0, 1]; activeColorsP = [cRed]; } 
    else if (filters.price === 'Duplex') { activeColsP = [0, 2]; activeColorsP = [cBlue]; } 
    else if (filters.price === 'Triplex') { activeColsP = [0, 3]; activeColorsP = [cGreen]; }
    else if (filters.price === 'Fourplex') { activeColsP = [0, 4]; activeColorsP = [cYellow]; }

    let activeColsC = [0, 1, 2, 3]; // Data Table indexes (0=Date, 1=Dup, 2=Tri, 3=Four)
    let activeColorsC = [cBlue, cGreen, cYellow];
    if (filters.cap === 'Duplex') { activeColsC = [0, 1]; activeColorsC = [cBlue]; } 
    else if (filters.cap === 'Triplex') { activeColsC = [0, 2]; activeColorsC = [cGreen]; }
    else if (filters.cap === 'Fourplex') { activeColsC = [0, 3]; activeColorsC = [cYellow]; }

    let activeColsG = [0, 1, 2, 3]; // Data Table indexes (0=Date, 1=Dup, 2=Tri, 3=Four)
    let activeColorsG = [cBlue, cGreen, cYellow];
    if (filters.grm === 'Duplex') { activeColsG = [0, 1]; activeColorsG = [cBlue]; } 
    else if (filters.grm === 'Triplex') { activeColsG = [0, 2]; activeColorsG = [cGreen]; }
    else if (filters.grm === 'Fourplex') { activeColsG = [0, 3]; activeColorsG = [cYellow]; }

    // --- Build Price Chart (Cols: Date, SFR, Dup, Tri, Four) ---
    if (!dataP) {
        dataP = new google.visualization.DataTable();
        dataP.addColumn('date', 'Date');
        dataP.addColumn('number', 'SFR');
        dataP.addColumn('number', 'Duplex');
        dataP.addColumn('number', 'Triplex');
        dataP.addColumn('number', 'Fourplex');
        dataP.addRows(resinvData.map(r => [r[0], r[1], r[2], r[3], r[4]]));
        dateFmt.format(dataP, 0);
        currencyFmt.format(dataP, 1);
        currencyFmt.format(dataP, 2);
        currencyFmt.format(dataP, 3);
        currencyFmt.format(dataP, 4);
    }

    const viewP = new google.visualization.DataView(dataP);
    viewP.setColumns(activeColsP);

    if (!chartP) {
        chartP = new google.visualization.LineChart(document.getElementById('price_chart'));
        
        // Interactive Scrubbing for Insights
        google.visualization.events.addListener(chartP, 'onmouseover', function(e) {
            if (e.row != null) {
                const hoveredDate = dataP.getValue(e.row, 0);
                const year = hoveredDate.getFullYear();
                const insight = historicalInsights[year] || defaultInsight;
                document.getElementById('insight-title').innerHTML = insight.title;
                document.getElementById('insight-text').innerHTML = insight.text;
            }
        });
    }

    chartP.draw(viewP, {
        backgroundColor: 'transparent',
        legend: { position: 'none' },
        chartArea: { width: '85%', height: '82%' },
        hAxis: { textStyle: { color: textC, fontSize: 11 }, format: 'yyyy', gridlines: { color: 'transparent' }, baselineColor: 'transparent' },
        vAxis: { textStyle: { color: textC, fontSize: 11 }, gridlines: { color: gridC }, baselineColor: gridC, format: 'short' },
        lineWidth: 3, curveType: 'function', colors: activeColorsP
    });

    // --- Build Cap Rate Chart (Cols: Date, Dup, Tri, Four) ---
    if (!dataC) {
        dataC = new google.visualization.DataTable();
        dataC.addColumn('date', 'Date');
        dataC.addColumn('number', 'Duplex');
        dataC.addColumn('number', 'Triplex');
        dataC.addColumn('number', 'Fourplex');
        // Indexes 8, 9, 10 in resinvData
        dataC.addRows(resinvData.map(r => [r[0], r[8], r[9], r[10]]));
        dateFmt.format(dataC, 0);
    }

    const viewC = new google.visualization.DataView(dataC);
    viewC.setColumns(activeColsC);

    if (!chartC) chartC = new google.visualization.LineChart(document.getElementById('cap_chart'));

    chartC.draw(viewC, {
        backgroundColor: 'transparent',
        legend: { position: 'none' },
        chartArea: { width: '85%', height: '82%' },
        hAxis: { textStyle: { color: textC, fontSize: 11 }, format: 'yyyy', gridlines: { color: 'transparent' }, baselineColor: 'transparent' },
        vAxis: { textStyle: { color: textC, fontSize: 11 }, gridlines: { color: gridC }, baselineColor: gridC },
        lineWidth: 3, curveType: 'function', colors: activeColorsC
    });

    // --- Build GRM Chart (Cols: Date, Dup, Tri, Four) ---
    if (!dataG) {
        dataG = new google.visualization.DataTable();
        dataG.addColumn('date', 'Date');
        dataG.addColumn('number', 'Duplex');
        dataG.addColumn('number', 'Triplex');
        dataG.addColumn('number', 'Fourplex');
        // Indexes 11, 12, 13 in resinvData
        dataG.addRows(resinvData.map(r => [r[0], r[11], r[12], r[13]])); 
        dateFmt.format(dataG, 0);
    }

    const viewG = new google.visualization.DataView(dataG);
    viewG.setColumns(activeColsG);

    if (!chartG) chartG = new google.visualization.LineChart(document.getElementById('grm_chart'));

    chartG.draw(viewG, {
        backgroundColor: 'transparent',
        legend: { position: 'none' },
        chartArea: { width: '85%', height: '82%' },
        hAxis: { textStyle: { color: textC, fontSize: 11 }, format: 'yyyy', gridlines: { color: 'transparent' }, baselineColor: 'transparent' },
        vAxis: { textStyle: { color: textC, fontSize: 11 }, gridlines: { color: gridC }, baselineColor: gridC },
        lineWidth: 3, curveType: 'function', colors: activeColorsG
    });
}

window.addEventListener('resize', () => {
    if (resinvData.length > 0) drawCharts();
});
