var generatedBlock = []; //用來保存已經生成的Block
// var BlockNumber = 0; //已經生成的Block

var isContractMap = new Map();

function GenerateBlock(blockData) {
  var dotContent = ""; //用來存放所有的dot
  var dotColor = ""; //dot的顏色
  let heightCalculated =
    140 + (blockData.transactions.length / 10 + 1) * 15 + 10 + "px";

  //遍歷所有transaction
  for (key in blockData.transactions) {
    if (blockData.transactions[key].isContractCall) {
      dotColor = "rgb(253, 217, 39)"; //如果是ContractCall就用黃色
    } else {
      dotColor = "rgb(143, 143, 143)"; //如果不是ContractCall就用灰色
    }

    if (blockData.transactions[key].creates != null) {
      dotColor = "rgb(25, 118, 210)"; //如果是Contract createtion就用藍色
    }

    dotContent += `     
        <g class="tx" transform="translate(
          ${(key % 10) * 18.5 + 11.75},
          ${parseInt(key / 10) * 18.5 + 151.75})">
            <circle r="6.75" fill="${dotColor}" style="stroke-width: 1;"></circle>
        </g>
        `;
  }

  //將新產生的Block放到網頁上
  document.getElementById("Blocks").innerHTML += `
    <div id="Block${blockData.number}" class="block-basic-wrap" onclick="goToEtherScanBlock(${blockData.number})">
        <svg width="190px" height="100%" id="aaa" class="svg-wrap">
            <rect class="block" x="1" y="1" width="190" height="140" fill="rgb(75, 162, 70)"></rect>
            <rect class="block-tx" x="1" y="140" width="190" fill="none" height="171.5"></rect>
            <g class="block-txs" width="100%" height="100%">
                ${dotContent}
            </g>
            <g class="block-description" x="0" y="0" width="100%" height="100%">
                <text class="block-number" x="185" y="2" text-anchor="end" font-family="Courier" font-size="26px" dominant-baseline="text-before-edge">${
                  blockData.number
                }</text>
                
                <text class="block-miner-label" x="5" y="30" text-anchor="start" font-family="Courier" font-size="12px" dominant-baseline="text-before-edge">Miner:</text>
                <text class="block-miner" x="52" y="30" text-anchor="start" font-family="Courier" font-size="14px" dominant-baseline="text-before-edge">
                ${blockData.miner.toString().substring(0, 14)}..</text>    
            </g>
        </svg>
    </div>
    `;
  //將已經生成的Block放到陣列中
  generatedBlock.push(document.getElementById("Block" + blockData.number));
  //將已經生成的Block往右移動
  for (var i = 0; i < generatedBlock.length; i++) {
    // console.log(generatedBlock[0].id);
    document
      .getElementById(generatedBlock[i].id)
      .velocity(
        {
          height: heightCalculated
        },
        {
          duration: 0,
          delay: 0
        }
      )
      .velocity(
        {
          left: generatedBlock.length * 250 - i * 250 + "px",
          marginTop: (generatedBlock.length - i - 1) * 12 + "px"
          // top: (generatedBlock.length - i - 1) * 12 + "px"
        },
        {
          duration: 1500,
          easing: "linear",
          delay: 0
        }
      );
  }
}

function goToEtherScanBlock(blockNumber) {
  const etherscanUrl = `https://kovan.etherscan.io/block/${parseInt(blockNumber)}`
  window.open(etherscanUrl, '_blank');
  // win.focus();
}

let latestBlockNumber = 0;

const selfEnodeEndPoint = "http://140.119.163.105:8545";

async function fetchLastestBlock() {
  let ethBlockNumber = `{"method":"eth_blockNumber","params":[],"id":1,"jsonrpc":"2.0"}`;

  return await fetch(selfEnodeEndPoint, {
    method: "POST",
    body: ethBlockNumber,
    headers: {
      "Content-Type": "application/json",
      Connection: "keep-alive"
    }
  })
    .then(res => res.json())
    .then(input => {
      // console.log("Success: ", input);
      return input.result;
    })
    .catch(error => {
      console.info(error);
    });
}

async function fetchBlockByBlockNumber(blockNumberHex) {
  let etherScanAPIGetBlockByBlockNumber = `https://api-kovan.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${blockNumberHex}&boolean=true`;
  return await fetch(etherScanAPIGetBlockByBlockNumber, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(input => {
      return input.result;
    })
    .catch(error => {
      console.info(error);
    });
}

async function isContractCheck(toCheckAddress) {
  if (typeof isContractMap.get(toCheckAddress) != "undefined") {
    console.log("exited: ", isContractMap.get(toCheckAddress));
    return await Promise.resolve(isContractMap.get(toCheckAddress));
  }

  let ethGetCode = `{"method":"eth_getCode","params":["${toCheckAddress}","latest"],"id":1,"jsonrpc":"2.0"}`;

  return await fetch(selfEnodeEndPoint, {
    method: "POST",
    body: ethGetCode,
    headers: {
      "Content-Type": "application/json",
      Connection: "keep-alive"
    }
  })
    .then(res => res.json())
    .then(input => {
      console.log("getCode result: ", toCheckAddress, input);
      if (input.result == "0x") {
        isContractMap.set(toCheckAddress, false);
        return false;
      } else {
        isContractMap.set(toCheckAddress, true);
        return true;
      }
    })
    .catch(error => {
      console.info(error);
    });
}

setInterval(async () => {
  let tryResult = await fetchLastestBlock();
  latestBlockNumbertmp = parseInt(tryResult);
  if (latestBlockNumber == latestBlockNumbertmp) {
    console.log("Remain: ", tryResult);
  } else {
    latestBlockNumber = latestBlockNumbertmp;
    let blockDataTmp = await fetchBlockByBlockNumber(tryResult);

    for (let i = 0; i < blockDataTmp.transactions.length; i++) {
      console.log(
        blockDataTmp.transactions[i].from,
        blockDataTmp.transactions[i].to
      );

      if (blockDataTmp.transactions[i].to != null) {
        let isContractResult = await isContractCheck(
          blockDataTmp.transactions[i].to
        );
        isContractResult
          ? (blockDataTmp.transactions[i].isContractCall = true)
          : (blockDataTmp.transactions[i].isContractCall = false);
        console.log(blockDataTmp.transactions[i]);
      }
    }
    GenerateBlock(blockDataTmp);
  }
}, 4500);
