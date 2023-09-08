let myGraph = document.getElementById('myGraph');
let data = [];
let layout = {
    margin: {
        t: 100,
        l: 100
    },
    grid: {
        rows: 2,
        columns: 2
    },
    title: 'Pie chart (evaluation_ratio)',
};

// 定義多個評估比率的數據陣列和名稱
let evaluationData = [
    { name: "機器學習概論", data: evaluation_ratio1 },
    { name: "資料視覺化", data: evaluation_ratio2 },
    { name: "人工智慧", data: evaluation_ratio3 },
    { name: "Python程式設計", data: evaluation_ratio4 }
];

for (let i = 0; i < evaluationData.length; i++) {
    let trace = {
        type: "pie",
        title: evaluationData[i].name,
        labels: [],
        values: [],
        domain: {
            row: Math.floor(i / 2),    // 將 trace 均勻分配到行和列中
            column: i % 2
        },
        hole: 0.6,
    };

    for (let j = 0; j < evaluationData[i].data.length; j++) {
        trace.labels[j] = evaluationData[i].data[j]['name'];
        trace.values[j] = evaluationData[i].data[j]['count'];
    }

    data.push(trace);
}

Plotly.newPlot(myGraph, data, layout);
