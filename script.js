// --- 0. DATA INITIALIZATION & ERA FILTERING ---
let chartData = [];

// Safely copy and filter the master data based on the HTML data-era attribute
if (typeof decadeData !== 'undefined') {
    chartData = [...decadeData]; 
    const era = document.body.getAttribute('data-era');

    if (era === '2000s') {
        chartData = chartData.filter(r => r[0].getFullYear() >= 2000 && r[0].getFullYear() <= 2009);
    } else if (era === '2010s') {
        chartData = chartData.filter(r => r[0].getFullYear() >= 2010 && r[0].getFullYear() <= 2019);
    } else if (era === '2020s') {
        chartData = chartData.filter(r => r[0].getFullYear() >= 2020 && r[0].getFullYear() <= 2024);
    }
    // If era === '2025' or is missing, chartData retains the full historical timeline.
}

// --- 1. HISTORICAL TIMELINE DATA ---
const historicalInsights = {
    1998: { 
        title: "1997: The Taxpayer Relief Act", 
        text: "The government exempted up to $500,000 in capital gains on home sales. Paired with the dawn of the internet age, Silicon Valley real estate became a hyper-lucrative investment vehicle overnight." 
    },
    1999: { 
        title: "1999: Dot-Com Mania", 
        text: "The NASDAQ doubled in a single year. Pre-revenue internet startups minted paper millionaires daily, pouring unprecedented cash into local housing." 
    },
    2000: { 
        title: "2000: The Dot-Com Peak", 
        text: "NASDAQ hit its all-time high in March, fueling immense wealth and peak home buying before the eventual collapse." 
    },
    2001: { 
        title: "2001: The Dot-Com Bust", 
        text: "The tech bubble burst. Stock portfolios vanished, layoffs swept the Valley, and home prices took a hit as the local economy contracted." 
    },
    2003: { 
        title: "2003: The 1% Fix", 
        text: "To stimulate the post-bust economy, the Fed slashed interest rates to 1%. Cheap debt flooded the market, planting the seeds for the subprime housing bubble." 
    },
    2005: { 
        title: "2005: The Housing Bubble", 
        text: "Predatory lending caused an influx of home purchases by unqualified buyers. Silicon Valley saw aggressive speculation and flipping." 
    },
    2007: { 
        title: "2007: Subprime Cracks", 
        text: "Major subprime lenders began filing for bankruptcy. Liquidity dried up, and Silicon Valley felt the initial shockwaves of the looming global financial crisis." 
    },
    2008: { 
        title: "2008: The Great Recession", 
        text: "Lehman Brothers collapsed and foreclosures spiked. Prices would eventually bottom out in 2009/2010 at ~$445k." 
    },
    2010: { 
        title: "2010: Web 2.0 Recovery", 
        text: "While national real estate floundered, Silicon Valley began its recovery early. Apple released the iPad, and companies like Netflix and Google ignited the Web 2.0 hiring boom." 
    },
    2012: { 
        title: "2012: Facebook IPO", 
        text: "The first major 'Tech IPO' of the new era minted millionaires overnight. When employee lock-up periods expired, cash flooded the housing market." 
    },
    2014: { 
        title: "2014: Tech Boom 2.0", 
        text: "Tech hardware and software converged. Construction on the $5B Apple Park was in full swing, driving massive job growth and heavy double-digit home appreciation." 
    },
    2015: { 
        title: "2015: Million Dollar Floor", 
        text: "March median home prices crossed the $1M threshold, officially paving the way to the ultra-luxury housing market we know today." 
    },
    2016: { 
        title: "2016: Election & IPO Lull", 
        text: "Global uncertainty and a stalling tech IPO market caused a brief pause in Silicon Valley real estate, with inventory sitting slightly longer than usual." 
    },
    2018: { 
        title: "2018: The 5% Scare", 
        text: "Mortgage rates hit 5% once more, causing fear, a dip in tech stocks, and a sharp localized market correction." 
    },
    2019: { 
        title: "2019: The IPO Dud", 
        text: "Highly anticipated mega-IPOs like Uber and Lyft went public but underperformed. The expected 'millionaire housing boom' never materialized, but low rates kept the market strong." 
    },
    2020: { 
        title: "2020: The Great Pivot", 
        text: "The pandemic forced a shift to remote work. Space became the ultimate premium, making the suburbs hotter than ever." 
    },
    2021: { 
        title: "2021: Free Money", 
        text: "Interest rates hit historic lows (sub-3%). Tech stocks soared, giving buyers near-infinite purchasing power and driving the steepest appreciation curve in history." 
    },
    2022: { 
        title: "2022: The Rate Shock", 
        text: "Inflation forced the Fed to aggressively hike rates. Tech companies began mass layoffs, and home prices corrected sharply in Q3/Q4." 
    },
    2023: { 
        title: "2023: The AI Renaissance", 
        text: "The launch of ChatGPT sparked an AI gold rush. Tech stocks—led by Nvidia—ballooned, reviving buyer purchasing power despite 7% mortgage rates." 
    },
    2024: { 
        title: "2024: Golden Handcuffs", 
        text: "Inventory hit record lows because homeowners refused to trade their pandemic-era 3% mortgages for new 7% rates, keeping prices artificially high." 
    },
    2025: { 
        title: "2025: The AI Bubble Peak?", 
        text: "2025 set new records for median prices as AI valuations hit unprecedented highs, despite growing fears of a market bubble." 
    }
};

const defaultInsight = {
    title: "History Rhymes: The AI Parallel",
    text: "Today's AI boom (or bubble) feels eerily similar to the Dot-Com surge of 1999/2000. Just like then, we are seeing immense wealth creation. But even when the Dot-Com bubble burst in 2001, home prices merely paused and didn't crash until the unrelated subprime bubble and crisis years later.<br><br><strong>The Lesson:</strong> Market crashes usually aren't a good time to buy simply because it's in a moment of economic uncertainty."
};

// --- 2. GLOBAL CHART STATE & MODULAR FILTER LOGIC ---
let filters = {
    price: 'All',
    dom: 'All'
};

let chartP = null, chartD = null, chartV = null;
let dataP = null, dataD = null, dataV = null;

function setFilter(chartType, propertyType, btn) {
    // 1. Update state
    filters[chartType] = propertyType;
    
    // 2. Isolate pill updates strictly to the row that was clicked
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

    // 3. Reset insight box only if Price chart was altered
    if (chartType === 'price') {
        document.getElementById('insight-title').innerHTML = defaultInsight.title;
        document.getElementById('insight-text').innerHTML = defaultInsight.text;
    }

    // 4. Redraw
    drawCharts();
}

// --- 3. STRATEGY & THEME TOGGLES ---
function setStrategy(type, btn) {
    document.querySelectorAll('.toggle-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.strat-content').forEach(c => c.classList.remove('active'));
    document.getElementById('strat-' + type).classList.add('active');
}

// --- 3.1 AUTOMATIC DEVICE THEME DETECTION ---
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    
    if (typeof drawCharts === "function") drawCharts(); 
});

// --- 4. CHARTS ---
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    // Failsafe: Ensure chartData exists before attempting to draw
    if (!chartData || chartData.length === 0) return;

    const isDark = document.body.classList.contains('dark-mode');
    const textC = isDark ? '#A1A1A6' : '#86868B';
    const gridC = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)';
      
    const cRed    = isDark ? '#FF453A' : '#FF3B30';
    const cBlue   = isDark ? '#0A84FF' : '#007AFF';
    const cGreen  = isDark ? '#32D74B' : '#34C759';
    const cYellow = isDark ? '#FFD60A' : '#FFCC00';

    const dateFmt = new google.visualization.DateFormat({ pattern: 'MMMM yyyy' });
    const currencyFmt = new google.visualization.NumberFormat({ prefix: '$', pattern: 'short' });

    // --- Exclusive Price Filter Logic ---
    let activeColumnsP = [0, 1, 2, 3]; 
    let activeColorsP = [cRed, cBlue, cGreen];
    if (filters.price === 'Houses') { activeColumnsP = [0, 1]; activeColorsP = [cRed]; } 
    else if (filters.price === 'Condos') { activeColumnsP = [0, 2]; activeColorsP = [cBlue]; } 
    else if (filters.price === 'Townhomes') { activeColumnsP = [0, 3]; activeColorsP = [cGreen]; }

    // --- Exclusive DOM Filter Logic ---
    let activeColumnsD = [0, 1, 2, 3]; 
    let activeColorsD = [cRed, cBlue, cGreen];
    if (filters.dom === 'Houses') { activeColumnsD = [0, 1]; activeColorsD = [cRed]; } 
    else if (filters.dom === 'Condos') { activeColumnsD = [0, 2]; activeColorsD = [cBlue]; } 
    else if (filters.dom === 'Townhomes') { activeColumnsD = [0, 3]; activeColorsD = [cGreen]; }

    // --- Build & Draw Price Chart ---
    if (!dataP) {
        dataP = new google.visualization.DataTable();
        dataP.addColumn('date', 'Date');
        dataP.addColumn('number', 'Houses');
        dataP.addColumn('number', 'Condos');
        dataP.addColumn('number', 'Townhomes');
        // REPLACED decadeData WITH chartData
        dataP.addRows(chartData.map(r => [r[0], r[1], r[2], r[3]]));
        dateFmt.format(dataP, 0);
        currencyFmt.format(dataP, 1);
        currencyFmt.format(dataP, 2);
        currencyFmt.format(dataP, 3);
    }

    const viewP = new google.visualization.DataView(dataP);
    viewP.setColumns(activeColumnsP);

    if (!chartP) {
        chartP = new google.visualization.LineChart(document.getElementById('price_chart'));
        
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

    // --- Build & Draw DOM Chart ---
    if (!dataD) {
        dataD = new google.visualization.DataTable();
        dataD.addColumn('date', 'Date');
        dataD.addColumn('number', 'Houses');
        dataD.addColumn('number', 'Condos');
        dataD.addColumn('number', 'Townhomes');
        // REPLACED decadeData WITH chartData
        dataD.addRows(chartData.map(r => [r[0], r[4], r[5], r[6]]));
        dateFmt.format(dataD, 0);
    }

    const viewD = new google.visualization.DataView(dataD);
    viewD.setColumns(activeColumnsD);

    if (!chartD) chartD = new google.visualization.LineChart(document.getElementById('dom_chart'));

    chartD.draw(viewD, {
        backgroundColor: 'transparent',
        legend: { position: 'none' },
        chartArea: { width: '85%', height: '82%' },
        hAxis: { textStyle: { color: textC, fontSize: 11 }, format: 'yyyy', gridlines: { color: 'transparent' }, baselineColor: 'transparent' },
        vAxis: { textStyle: { color: textC, fontSize: 11 }, gridlines: { color: gridC }, baselineColor: gridC },
        lineWidth: 3, curveType: 'function', colors: activeColorsD
    });

    // --- Build & Draw Volume Chart ---
    if (!dataV) {
        dataV = new google.visualization.DataTable();
        dataV.addColumn('date', 'Date');
        dataV.addColumn('number', 'Volume');
        // REPLACED decadeData WITH chartData
        dataV.addRows(chartData.map(r => [r[0], r[10]])); 
        dateFmt.format(dataV, 0);
    }

    if (!chartV) chartV = new google.visualization.AreaChart(document.getElementById('volume_chart'));

    chartV.draw(dataV, {
        backgroundColor: 'transparent',
        legend: { position: 'none' },
        chartArea: { width: '85%', height: '82%' },
        hAxis: { textStyle: { color: textC, fontSize: 11 }, format: 'yyyy', gridlines: { color: 'transparent' }, baselineColor: 'transparent' },
        vAxis: { textStyle: { color: textC, fontSize: 11 }, gridlines: { color: gridC }, baselineColor: gridC },
        lineWidth: 3, curveType: 'function', colors: [cYellow], areaOpacity: 0.15
    });
}

window.addEventListener('resize', drawCharts);
