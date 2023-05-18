var data = [
    {
        name:"IT互联网",
        child:[
            {name:"编程语言",
                child:[
                    {name:"java"},
                    {name:"c#/.net"},
                    {name:"python"},
                    {name:"前端开发",
                        child:[
                            {name:"jq"},
                            {name:"vue"},
                            {name:"react"}
                        ]
                    }
                ]
            },
            {name:"移动开发",
                child:[
                    {name:"android开发"},
                    {name:"IOS开发"}
                ]
            },
            {name:"游戏开发",
                child:[
                    {name:"phaser游戏开发"},
                    {name:"webGL游戏开发",
                        child:[
                            {name:"3D游戏"},
                            {name:"2D游戏"}
                        ]
                    }
                ]
            }
        ]
    },
    {
        name:"设计创作",
        child:[
            {name:"平面设计",
            child:[
                {name:"电商美工"},
                {name:"综合平面设计"},
                {name:"摄影后期"}
            ]
            },
            {
                name:"UI设计",
                child:[
                    {name:"交互设计"},
                    {name:"webUI设计"},
                    {name:"游戏UI设计"}
                ]
            },
            {
                    name:"软件设计"
            }
    ]
    },
    {
        name:"升学考研",
        child:[
            {name:"考研"},
            {name:"大学"},
            {name:"高中"},
            {name:"初中"}
        ]
    },
    {
        name:"职企考证",
        child:[
            {name:"公务员",
                child:[
                    {name:"教师考试"},
                    {name:"建筑工程"}
                ]
            }
        ]
    }
];

window.onload = function() {
    // var str = "<ul>";
    // for(var i=0;i<data.length;i++) {
    //     str+=`<li>${data[i].name}</li>`
    //     if(data[i].child) {
    //         str += "<ul>";
    //         for(var j=0;j<data[i].child.length;j++) {
    //             str+=`<li>${data[i].child[j].name}</li>`;
    //             if(data[i].child[j].child) {
    //                 str+="<ul>";
    //                 for(var k=0;k<data[i].child[j].child.length;k++) {
    //                     str+=`<li>${data[i].child[j].child[k].name}</li>`
    //                 }
    //                 str+="</ul>";
    //             }
    //         }
    //         str+="</ul>"
    //     }
    // }
    // str+="</ul>"
    // document.querySelector(".dataList").innerHTML = str;
    function renderDataList(dataList) {
        var str = "<ul>";
        for(var i = 0;i < dataList.length;i++) {
            str += `<li>${dataList[i].name}</li>`;
            if(dataList[i].child) {
                str += renderDataList(dataList[i].child);
            }
        }
        str += "</ul>";
        return str;
    }
    document.querySelector(".dataList").innerHTML = renderDataList(data);
}