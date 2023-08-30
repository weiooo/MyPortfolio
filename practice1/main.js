let myGraph = document.getElementById('myGraph');

let trace1 = {};
// trace1的屬性
trace1.mode = "markers+lines"; // markers
trace1.type = "scatter";
trace1.name = "Mahipalpur, New Delhi";
// trace1.marker = {
//     size: 8
// }
trace1.x = [];
trace1.y = [];
trace1.text = [];
// 調整text位置與字型大小
trace1.textposition = 'bottom center';
trace1.textfont = {
    family: "Consolas",
    size: 20
}
trace1.visible = true;
trace1.line = {
    color: 'blue',
    shape: 'spline'
}


// 將 set1 陣列中的數據填充到 trace1 物件中
// 說明：因在html中 data在main之前，故可存取data.js的set1
for (let i = 0; i < set1.length; i++) {
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][2];
}

// 增加trace2 for set2
let trace2 = {};
trace2.mode = "lines";
trace2.type = "scatter";
trace2.name = "South Delhi, New Delhi";
trace2.x = [];
trace2.y = [];
trace2.text = [];
trace2.visible = true;
trace2.line = {
    color: 'red',
    shape: 'spline'
}


for (let i = 0; i < set2.length; i++) {
    trace2.x[i] = set2[i][0];
    trace2.y[i] = set2[i][1];
    trace2.text[i] = set2[i][2];
}

// 增加trace3 for set3
let trace3 = {};
trace3.mode = "lines+markers+text";
trace3.type = "scatter";
trace3.name = "South West, New Delhi"
trace3.x = [];
trace3.y = [];
trace3.text = [];
trace3.textposition = 'top center';
trace3.visible = true;
trace3.line = {
    color: 'green',
    shape: 'spline'
}

for (let i = 0; i < set3.length; i++) {
    trace3.x[i] = set3[i][0];
    trace3.y[i] = set3[i][1];
    trace3.text[i] = set3[i][2];
}


let data = [];
// 將 trace1 物件添加到 data 陣列中
data.push(trace1);
data.push(trace2);
data.push(trace3);


let layout = {
    margin: {
        t: 100
    },
    // xaxis: {
    //     range: [0, 5]
    // },
    // yaxis: {
    //     range: [0, 22]
    // },
    title: 'Hotel Reviews rating (Kaggle dataset)',

    updatemenus: [{
        y: 1.35,
        x: 1.6,
        yanchor: 'top',
        buttons: [
            {
                method: 'restyle',
                args: ['visible', [true, false, false]],
                label: 'Group A'
            },
            {
                method: 'restyle',
                args: ['visible', [false, true, false]],
                label: 'Group B'
            },
            {
                method: 'restyle',
                args: ['visible', [false, false, true]],
                label: 'Group C'
            },
            {
                method: 'restyle',
                args: ['visible', [true, true, true]],
                label: 'Display ALL'
            }

        ]
    }]
};

Plotly.newPlot(myGraph, data, layout);


// Reference:
// https://plotly.com/javascript/reference/scatter/
