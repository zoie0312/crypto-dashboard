import fetch from 'node-fetch';

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const apiKey = "5i3nUfMDsESoLsuo1FwKSTuA78J0fiP8"
  const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${apiKey}/getOwnersForToken`;
  const contractAddr = "0x90cfCE78f5ED32f9490fd265D16c77a8b5320Bd4";
  const tokenId = "310";
  const fetchURL = `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}`;

  fetch(fetchURL, requestOptions)
    .then(response => response.json())
    .then(response => JSON.stringify(response, null, 2))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

function testAlchemyNFTApi(api) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    
      const apiKey = "5i3nUfMDsESoLsuo1FwKSTuA78J0fiP8"
      const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${apiKey}/${api}`;
      const contractAddr = "0x90cfCE78f5ED32f9490fd265D16c77a8b5320Bd4";
      const ownerAddr = "0x3f95024d31af1cc4d3a50bcd7204887b53cb2f58";
      const tokenId = "310";
      //const fetchURL = `${baseURL}?contractAddress=${contractAddr}&tokenId=${tokenId}`;
      const fetchURL = `${baseURL}?owner=${ownerAddr}`;
    
      fetch(fetchURL, requestOptions)
        .then(response => response.json())
        .then(response => JSON.stringify(response, null, 2))
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

async function testAlchemyApi() {
    
    const apiKey = "5i3nUfMDsESoLsuo1FwKSTuA78J0fiP8"
    
    const ownerAddr = "0x886478d3cf9581b624cb35b5446693fc8a58b787";
    
    const fetchURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;

    // Replace with the token contract address you want to query:
    const tokenAddr = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"; //usdc

    var raw = JSON.stringify({
      "jsonrpc": "2.0",
      "method": "alchemy_getTokenBalances",
      "headers": {
        "Content-Type": "application/json"
      },
      "params": [
        `${ownerAddr}`,
        [
          `${tokenAddr}`,
        ]
      ],
      "id": 42
    });
    const requestOptions = {
      method: 'POST',
      redirect: 'follow',
      body: raw
    };

    let resp, resultOfTokenBalances;
    try {
      resp = await fetch(fetchURL, requestOptions);
      resp = await resp.json();
      resultOfTokenBalances = resp.result;
      console.log('result of getTokenBalances');
      console.log(JSON.stringify(resp, null, 2));
    } catch (error) {
      console.log('error', error)
    }

    var metadataRaw = JSON.stringify({
      "jsonrpc": "2.0",
      "method": "alchemy_getTokenMetadata",
      "headers": {
        "Content-Type": "application/json"
      },
      "params": [
          `${tokenAddr}`
      ],
      "id": 42
    });

    var metadataRequestOptions = {
      method: 'POST',
      body: metadataRaw,
      redirect: 'follow'
    };

    let metadata;
    try {
      resp = await fetch(fetchURL, metadataRequestOptions);
      resp = await resp.json();
      metadata = resp.result;
      console.log('result of getTokenMetadata');
      console.log(metadata);
      const tokenName = metadata.name + "(" + metadata.symbol + ")";
      const tokenBalance = parseInt(resultOfTokenBalances["tokenBalances"][0]["tokenBalance"])/Math.pow(10, metadata.decimals)
      console.log("Token balance for", tokenName, "is", tokenBalance);
    } catch (error) {
      console.log('error', error)
    }
}

async function testAlchemyApi(tokenAddr) {
    
  const apiKey = "5i3nUfMDsESoLsuo1FwKSTuA78J0fiP8"
  
  const fetchURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;

  // Replace with the token contract address you want to query:
  //const tokenAddr = "0xdAC17F958D2ee523a2206206994597C13D831ec7"; //usdc

  var metadataRaw = JSON.stringify({
    "jsonrpc": "2.0",
    "method": "alchemy_getTokenMetadata",
    "headers": {
      "Content-Type": "application/json"
    },
    "params": [
        `${tokenAddr}`
    ],
    "id": 42
  });

  var metadataRequestOptions = {
    method: 'POST',
    body: metadataRaw,
    redirect: 'follow'
  };

  let metadata;
  try {
    resp = await fetch(fetchURL, metadataRequestOptions);
    resp = await resp.json();
    metadata = resp.result;
    console.log('result of getTokenMetadata');
    console.log(metadata);
  } catch (error) {
    console.log('error', error)
  }
}