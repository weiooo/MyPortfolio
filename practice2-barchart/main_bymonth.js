let myGraph = document.getElementById('myGraph');

// trace1 物件
let trace1 = {};
trace1.type = "bar";
trace1.name = "Dcard";
trace1.x = [];
trace1.y = [];

for (let i = 0; i < title_count_Dcard.length; i++) {
    trace1.x[i] = title_count_Dcard[i]['month'];
    trace1.y[i] = title_count_Dcard[i]['count'];
}

// trace2 物件
let trace2 = {};
trace2.type = "bar";
trace2.name = "PPT";
trace2.x = [];
trace2.y = [];

for (let i = 0; i < title_count_PTT.length; i++) {
    trace2.x[i] = title_count_PTT[i]['month'];
    trace2.y[i] = title_count_PTT[i]['count'];
}

let data = [];
// 將 trace1 物件添加到 data 陣列中
data.push(trace1);
data.push(trace2);


let layout = {
    margin: {
        t: 100
    },
    title: '2023上半年各社群論壇信用卡版文章數(~2023/06/13)',
};

Plotly.newPlot(myGraph, data, layout);


// Reference:
// - bar chart
// https://plotly.com/javascript/reference/bar/
