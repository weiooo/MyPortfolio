let myGraph = document.getElementById('myGraph');

// 月份和資料的陣列
let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
let data = [];

// 逐月建立 trace 物件
for (let i = 0; i < months.length; i++) {
    let trace = {
        type: "bar",
        name: months[i],
        x: ["Dcard", "PTT"],
        y: [title_count_Dcard[i]['count'], title_count_PTT[i]['count']],
        text: [title_count_Dcard[i]['count'], title_count_PTT[i]['count']],
    };

    data.push(trace);
}

let layout = {
    margin: {
        t: 100
    },
    title: '2023上半年 兩大社群論壇信用卡版文章數',
    barmode: 'stack'
};

Plotly.newPlot(myGraph, data, layout);
