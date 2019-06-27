var dataobj = {
  children: []
};

function renderPennding(squarelength) {
  var pack = d3.layout.pack();

  pack = pack.padding(2).size([squarelength, squarelength]);

  var nodes = pack.nodes(dataobj);

  nodes = nodes.filter(function(it) {
    return it.parent;
  });
  console.log(nodes);
  var color = d3.scale.category20();

  d3.select("#penddingInside")
    .selectAll("circle") // 建立 circle 的 Selection
    .data(nodes) // 綁定 selection 與資料
    .enter() // 對於任何沒被對應而落單的資料 ...
    .append("circle") // 新增一個 circle 標籤
    .attr({
      cx: function(it) {
        return it.x;
      }, // 用 x,y 當圓心
      cy: function(it) {
        return it.y;
      },
      r: function(it) {
        return it.r;
      }, // 用 r 當半徑
      fill: function(it) {
        return color(it.from);
      },
      stroke: "#444" // 邊框畫深灰色
    });

  d3.select("#penddingInside")
    .selectAll("text")
    .data(nodes)
    .enter()
    .append("text")
    .attr({
      x: function(it) {
        return it.x;
      },
      y: function(it) {
        return it.y;
      },
      "text-anchor": "middle" // 文字水平置中
    })
    .text(function(it) {
      return "";
    }); // 設定文字為國名
}

async function fetchPending() {
  const selfEnodeEndPoint = "http://140.119.163.105:8545";

  const parityPending = `{"method":"parity_pendingTransactions","params":[],"id":1,"jsonrpc":"2.0"}`;
  let result = await fetch(selfEnodeEndPoint, {
    method: "POST",
    body: parityPending,
    headers: {
      "Content-Type": "application/json",
      Connection: "keep-alive"
    }
  })
    .then(res => res.json())
    .then(input => {
      console.log("Render Input Success: ", input);

      return input.result;
    })
    .catch(error => {
      console.info(error);
    });

  // if (result.length == 0) {
  //   document.getElementById("pendding").innerHTML = `<h1>Pool is Empty</h1>`;
  // }

  dataobj.children = result.map(v => {
    console.log(v.value);
    v.value = 1;
    return v;
  });
  renderPennding(result.length * 6);
}

setInterval(async () => {
  document.getElementById("pendding").velocity(
    {
      opacity: 0
    },
    {
      duration: 1200
    },
    function() {
      document.getElementById("pendding").innerHTML = null;
    }
  );
  document.getElementById(
    "pendding"
  ).innerHTML += `<svg id="penddingInside" width="100%" height="100%" style="margin-top: 250px"></svg>`;
  console.log("round");
  await fetchPending();
  document.getElementById("pendding").velocity(
    {
      opacity: 1
    },
    {
      duration: 1500
    }
  );
}, 5000);

// renderPennding(100, 100)
