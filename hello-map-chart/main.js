let myGraph = document.getElementById('myGraph');
d3.csv(dataURL).then(
    getCSV_Data
);

function unpack(rows, key) {
    // map方法: element-wised 會取出資料集特定欄位所形成的陣列
    return rows.map(function (row) {
        return row[key];
    });
}

function getCSV_Data(rows) {
    let trace1 = {};
    trace1.type = "choropleth";
    trace1.locationmode = "country names";
    trace1.locations = unpack(rows, 'location');
    trace1.z = unpack(rows, 'alcohol');
    trace1.text = unpack(rows, 'location');
    trace1.autocolorscale = true;

    // 新增一筆Taiwan資料
    trace1.locations.push('Taiwan');
    trace1.z.push(15);
    trace1.text.push('Welcome to 台灣!')

    let data = [];
    data.push(trace1);

    let layout = {
        title: 'Pure alcohol consumption among adults (age 15+) in 2010', margin: {
            t: 50,
            l: 0,
        },
        geo: {
            projection: {
                type: 'robinson'
            }
        }
    };
    Plotly.newPlot(myGraph, data, layout);
}


Plotly.newPlot(myGraph, data, layout);
