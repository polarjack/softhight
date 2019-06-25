var generatedBlock=[]; //用來保存已經生成的Block
var BlockNumber=0; //已經生成的Block

var blockData={
    jsonrpc: "2.0",
    result: {
    author: "0x596e8221a30bfe6e7eff67fee664a01c73ba3c56",
    difficulty: "0xfffffffffffffffffffffffffffffffe",
    extraData: "0xde830204078f5061726974792d457468657265756d86312e33352e30826c69",
    gasLimit: "0x7a1200",
    gasUsed: "0x10b8e",
    hash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
    logsBloom: "0x00000000000000800000000200000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000008000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000012080400000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000002040000220000000000000000000000000000000000000000000000000000000000000000000000000400000000080000000080000000000000000000",
    miner: "0x596e8221a30bfe6e7eff67fee664a01c73ba3c56",
    number: "0xb3dcdd",
    parentHash: "0x55ae06e1393184138231cfcfd470fc74034e298d7a951df8ba52b06f7b14feb7",
    receiptsRoot: "0xcfcfa869d8f3c8bcbedfb1f691b3ab271c21f6c322564cadbfecb317b256c148",
    sealFields: [
    "0x8417443467",
    "0xb84122e39de60b5b0381af9cfd6e483534783c8d507aad40eccc451f1a7f78d23df774996ac5c11e6b93d017e195c54fd397fb2657afd0ce643a7c078647f7f2c9d100"
    ],
    sha3Uncles: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    signature: "22e39de60b5b0381af9cfd6e483534783c8d507aad40eccc451f1a7f78d23df774996ac5c11e6b93d017e195c54fd397fb2657afd0ce643a7c078647f7f2c9d100",
    size: "0x36a",
    stateRoot: "0x5afced2d416744efc2af30b609bfaf8d41b012881d3afc2e70a8822a829426e1",
    step: "390345831",
    timestamp: "0x5d10d19c",
    totalDifficulty: "0xb199ce000000000000000000000004845edfe5",
    transactions: [
        {
        blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
        blockNumber: "0xb3dcdd",
        chainId: null,
        condition: null,
        creates: null,
        from: "0x526370e2643e8e23b5791c94a184f795be2a3e33",
        gas: "0xab40",
        gasPrice: "0x3b9aca00",
        hash: "0xb60cd427b3ca5ea75ba54241c7025ac070adb0845a40e492603d0ab493ea1f06",
        input: "0x7a22bbed",
        nonce: "0xdce5",
        publicKey: "0xcd1fcf5f4e635629603466441dafde62cb09f22c5bf1ecd162fe3e5703d3cbddc439ec1b1ba94be849d1bc339d69a5685257bac802409c2884519773a0573f65",
        r: "0x4d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048ec",
        raw: "0xf86982dce5843b9aca0082ab40948314d046198f2c29813a2dc0e15ad0ecdc159fb580847a22bbed1ca04d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048eca066962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
        s: "0x66962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
        standardV: "0x1",
        to: "0x8314d046198f2c29813a2dc0e15ad0ecdc159fb5",
        transactionIndex: "0x0",
        v: "0x1c",
        value: "0x0",
        isContractCall:"true"
        },
        {
        blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
        blockNumber: "0xb3dcdd",
        chainId: "0x2a",
        condition: null,
        creates: null,
        from: "0xf3b3d10dd712b7eb4bf300f70e160e0e0ee483ba",
        gas: "0x4cb26",
        gasPrice: "0x3b9aca00",
        hash: "0xdc2d0a6d316bfaad9f651a463db3e243ef238bbbed499d213ebfd2df3ccdc5d7",
        input: "0xa9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d63100000",
        nonce: "0xc07aa",
        publicKey: "0xd68e471a58084b3281adb80c093e1902aa33c9ae25eab17e33a117424194a0fe2d1185fdc25279aeeb71449b66d02f639cd20c82f232c2374a8c9a8c374e5416",
        r: "0xce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208",
        raw: "0xf8ac830c07aa843b9aca008304cb26941dad4783cf3fe3085c1426157ab175a6119a04ba80b844a9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d6310000077a0ce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208a07f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
        s: "0x7f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
        standardV: "0x0",
        to: "0x1dad4783cf3fe3085c1426157ab175a6119a04ba",
        transactionIndex: "0x1",
        v: "0x77",
        value: "0x0",
        isContractCall:"false"
        },
        {
            blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
            blockNumber: "0xb3dcdd",
            chainId: null,
            condition: null,
            creates: null,
            from: "0x526370e2643e8e23b5791c94a184f795be2a3e33",
            gas: "0xab40",
            gasPrice: "0x3b9aca00",
            hash: "0xb60cd427b3ca5ea75ba54241c7025ac070adb0845a40e492603d0ab493ea1f06",
            input: "0x7a22bbed",
            nonce: "0xdce5",
            publicKey: "0xcd1fcf5f4e635629603466441dafde62cb09f22c5bf1ecd162fe3e5703d3cbddc439ec1b1ba94be849d1bc339d69a5685257bac802409c2884519773a0573f65",
            r: "0x4d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048ec",
            raw: "0xf86982dce5843b9aca0082ab40948314d046198f2c29813a2dc0e15ad0ecdc159fb580847a22bbed1ca04d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048eca066962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
            s: "0x66962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
            standardV: "0x1",
            to: "0x8314d046198f2c29813a2dc0e15ad0ecdc159fb5",
            transactionIndex: "0x0",
            v: "0x1c",
            value: "0x0",
            isContractCall:"true"
        },
        {
            blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
            blockNumber: "0xb3dcdd",
            chainId: "0x2a",
            condition: null,
            creates: null,
            from: "0xf3b3d10dd712b7eb4bf300f70e160e0e0ee483ba",
            gas: "0x4cb26",
            gasPrice: "0x3b9aca00",
            hash: "0xdc2d0a6d316bfaad9f651a463db3e243ef238bbbed499d213ebfd2df3ccdc5d7",
            input: "0xa9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d63100000",
            nonce: "0xc07aa",
            publicKey: "0xd68e471a58084b3281adb80c093e1902aa33c9ae25eab17e33a117424194a0fe2d1185fdc25279aeeb71449b66d02f639cd20c82f232c2374a8c9a8c374e5416",
            r: "0xce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208",
            raw: "0xf8ac830c07aa843b9aca008304cb26941dad4783cf3fe3085c1426157ab175a6119a04ba80b844a9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d6310000077a0ce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208a07f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
            s: "0x7f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
            standardV: "0x0",
            to: "0x1dad4783cf3fe3085c1426157ab175a6119a04ba",
            transactionIndex: "0x1",
            v: "0x77",
            value: "0x0",
            isContractCall:"false"
        },
        {
            blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
            blockNumber: "0xb3dcdd",
            chainId: null,
            condition: null,
            creates: null,
            from: "0x526370e2643e8e23b5791c94a184f795be2a3e33",
            gas: "0xab40",
            gasPrice: "0x3b9aca00",
            hash: "0xb60cd427b3ca5ea75ba54241c7025ac070adb0845a40e492603d0ab493ea1f06",
            input: "0x7a22bbed",
            nonce: "0xdce5",
            publicKey: "0xcd1fcf5f4e635629603466441dafde62cb09f22c5bf1ecd162fe3e5703d3cbddc439ec1b1ba94be849d1bc339d69a5685257bac802409c2884519773a0573f65",
            r: "0x4d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048ec",
            raw: "0xf86982dce5843b9aca0082ab40948314d046198f2c29813a2dc0e15ad0ecdc159fb580847a22bbed1ca04d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048eca066962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
            s: "0x66962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
            standardV: "0x1",
            to: "0x8314d046198f2c29813a2dc0e15ad0ecdc159fb5",
            transactionIndex: "0x0",
            v: "0x1c",
            value: "0x0",
            isContractCall:"true"
        },
        {
            blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
            blockNumber: "0xb3dcdd",
            chainId: "0x2a",
            condition: null,
            creates: null,
            from: "0xf3b3d10dd712b7eb4bf300f70e160e0e0ee483ba",
            gas: "0x4cb26",
            gasPrice: "0x3b9aca00",
            hash: "0xdc2d0a6d316bfaad9f651a463db3e243ef238bbbed499d213ebfd2df3ccdc5d7",
            input: "0xa9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d63100000",
            nonce: "0xc07aa",
            publicKey: "0xd68e471a58084b3281adb80c093e1902aa33c9ae25eab17e33a117424194a0fe2d1185fdc25279aeeb71449b66d02f639cd20c82f232c2374a8c9a8c374e5416",
            r: "0xce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208",
            raw: "0xf8ac830c07aa843b9aca008304cb26941dad4783cf3fe3085c1426157ab175a6119a04ba80b844a9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d6310000077a0ce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208a07f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
            s: "0x7f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
            standardV: "0x0",
            to: "0x1dad4783cf3fe3085c1426157ab175a6119a04ba",
            transactionIndex: "0x1",
            v: "0x77",
            value: "0x0",
            isContractCall:"false"
        },
        {
            blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
            blockNumber: "0xb3dcdd",
            chainId: null,
            condition: null,
            creates: null,
            from: "0x526370e2643e8e23b5791c94a184f795be2a3e33",
            gas: "0xab40",
            gasPrice: "0x3b9aca00",
            hash: "0xb60cd427b3ca5ea75ba54241c7025ac070adb0845a40e492603d0ab493ea1f06",
            input: "0x7a22bbed",
            nonce: "0xdce5",
            publicKey: "0xcd1fcf5f4e635629603466441dafde62cb09f22c5bf1ecd162fe3e5703d3cbddc439ec1b1ba94be849d1bc339d69a5685257bac802409c2884519773a0573f65",
            r: "0x4d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048ec",
            raw: "0xf86982dce5843b9aca0082ab40948314d046198f2c29813a2dc0e15ad0ecdc159fb580847a22bbed1ca04d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048eca066962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
            s: "0x66962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
            standardV: "0x1",
            to: "0x8314d046198f2c29813a2dc0e15ad0ecdc159fb5",
            transactionIndex: "0x0",
            v: "0x1c",
            value: "0x0",
            isContractCall:"true"
        },
        {
            blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
            blockNumber: "0xb3dcdd",
            chainId: "0x2a",
            condition: null,
            creates: null,
            from: "0xf3b3d10dd712b7eb4bf300f70e160e0e0ee483ba",
            gas: "0x4cb26",
            gasPrice: "0x3b9aca00",
            hash: "0xdc2d0a6d316bfaad9f651a463db3e243ef238bbbed499d213ebfd2df3ccdc5d7",
            input: "0xa9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d63100000",
            nonce: "0xc07aa",
            publicKey: "0xd68e471a58084b3281adb80c093e1902aa33c9ae25eab17e33a117424194a0fe2d1185fdc25279aeeb71449b66d02f639cd20c82f232c2374a8c9a8c374e5416",
            r: "0xce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208",
            raw: "0xf8ac830c07aa843b9aca008304cb26941dad4783cf3fe3085c1426157ab175a6119a04ba80b844a9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d6310000077a0ce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208a07f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
            s: "0x7f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
            standardV: "0x0",
            to: "0x1dad4783cf3fe3085c1426157ab175a6119a04ba",
            transactionIndex: "0x1",
            v: "0x77",
            value: "0x0",
            isContractCall:"false"
        },
        {
        blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
        blockNumber: "0xb3dcdd",
        chainId: null,
        condition: null,
        creates: null,
        from: "0x526370e2643e8e23b5791c94a184f795be2a3e33",
        gas: "0xab40",
        gasPrice: "0x3b9aca00",
        hash: "0xb60cd427b3ca5ea75ba54241c7025ac070adb0845a40e492603d0ab493ea1f06",
        input: "0x7a22bbed",
        nonce: "0xdce5",
        publicKey: "0xcd1fcf5f4e635629603466441dafde62cb09f22c5bf1ecd162fe3e5703d3cbddc439ec1b1ba94be849d1bc339d69a5685257bac802409c2884519773a0573f65",
        r: "0x4d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048ec",
        raw: "0xf86982dce5843b9aca0082ab40948314d046198f2c29813a2dc0e15ad0ecdc159fb580847a22bbed1ca04d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048eca066962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
        s: "0x66962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
        standardV: "0x1",
        to: "0x8314d046198f2c29813a2dc0e15ad0ecdc159fb5",
        transactionIndex: "0x0",
        v: "0x1c",
        value: "0x0",
        isContractCall:"true"
        },
        {
        blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
        blockNumber: "0xb3dcdd",
        chainId: "0x2a",
        condition: null,
        creates: null,
        from: "0xf3b3d10dd712b7eb4bf300f70e160e0e0ee483ba",
        gas: "0x4cb26",
        gasPrice: "0x3b9aca00",
        hash: "0xdc2d0a6d316bfaad9f651a463db3e243ef238bbbed499d213ebfd2df3ccdc5d7",
        input: "0xa9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d63100000",
        nonce: "0xc07aa",
        publicKey: "0xd68e471a58084b3281adb80c093e1902aa33c9ae25eab17e33a117424194a0fe2d1185fdc25279aeeb71449b66d02f639cd20c82f232c2374a8c9a8c374e5416",
        r: "0xce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208",
        raw: "0xf8ac830c07aa843b9aca008304cb26941dad4783cf3fe3085c1426157ab175a6119a04ba80b844a9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d6310000077a0ce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208a07f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
        s: "0x7f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
        standardV: "0x0",
        to: "0x1dad4783cf3fe3085c1426157ab175a6119a04ba",
        transactionIndex: "0x1",
        v: "0x77",
        value: "0x0",
        isContractCall:"false"
        },
        {
            blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
            blockNumber: "0xb3dcdd",
            chainId: null,
            condition: null,
            creates: null,
            from: "0x526370e2643e8e23b5791c94a184f795be2a3e33",
            gas: "0xab40",
            gasPrice: "0x3b9aca00",
            hash: "0xb60cd427b3ca5ea75ba54241c7025ac070adb0845a40e492603d0ab493ea1f06",
            input: "0x7a22bbed",
            nonce: "0xdce5",
            publicKey: "0xcd1fcf5f4e635629603466441dafde62cb09f22c5bf1ecd162fe3e5703d3cbddc439ec1b1ba94be849d1bc339d69a5685257bac802409c2884519773a0573f65",
            r: "0x4d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048ec",
            raw: "0xf86982dce5843b9aca0082ab40948314d046198f2c29813a2dc0e15ad0ecdc159fb580847a22bbed1ca04d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048eca066962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
            s: "0x66962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
            standardV: "0x1",
            to: "0x8314d046198f2c29813a2dc0e15ad0ecdc159fb5",
            transactionIndex: "0x0",
            v: "0x1c",
            value: "0x0",
            isContractCall:"true"
        },
        {
            blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
            blockNumber: "0xb3dcdd",
            chainId: "0x2a",
            condition: null,
            creates: null,
            from: "0xf3b3d10dd712b7eb4bf300f70e160e0e0ee483ba",
            gas: "0x4cb26",
            gasPrice: "0x3b9aca00",
            hash: "0xdc2d0a6d316bfaad9f651a463db3e243ef238bbbed499d213ebfd2df3ccdc5d7",
            input: "0xa9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d63100000",
            nonce: "0xc07aa",
            publicKey: "0xd68e471a58084b3281adb80c093e1902aa33c9ae25eab17e33a117424194a0fe2d1185fdc25279aeeb71449b66d02f639cd20c82f232c2374a8c9a8c374e5416",
            r: "0xce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208",
            raw: "0xf8ac830c07aa843b9aca008304cb26941dad4783cf3fe3085c1426157ab175a6119a04ba80b844a9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d6310000077a0ce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208a07f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
            s: "0x7f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
            standardV: "0x0",
            to: "0x1dad4783cf3fe3085c1426157ab175a6119a04ba",
            transactionIndex: "0x1",
            v: "0x77",
            value: "0x0",
            isContractCall:"false"
        },
        {
            blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
            blockNumber: "0xb3dcdd",
            chainId: null,
            condition: null,
            creates: null,
            from: "0x526370e2643e8e23b5791c94a184f795be2a3e33",
            gas: "0xab40",
            gasPrice: "0x3b9aca00",
            hash: "0xb60cd427b3ca5ea75ba54241c7025ac070adb0845a40e492603d0ab493ea1f06",
            input: "0x7a22bbed",
            nonce: "0xdce5",
            publicKey: "0xcd1fcf5f4e635629603466441dafde62cb09f22c5bf1ecd162fe3e5703d3cbddc439ec1b1ba94be849d1bc339d69a5685257bac802409c2884519773a0573f65",
            r: "0x4d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048ec",
            raw: "0xf86982dce5843b9aca0082ab40948314d046198f2c29813a2dc0e15ad0ecdc159fb580847a22bbed1ca04d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048eca066962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
            s: "0x66962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
            standardV: "0x1",
            to: "0x8314d046198f2c29813a2dc0e15ad0ecdc159fb5",
            transactionIndex: "0x0",
            v: "0x1c",
            value: "0x0",
            isContractCall:"true"
        },
        {
            blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
            blockNumber: "0xb3dcdd",
            chainId: "0x2a",
            condition: null,
            creates: null,
            from: "0xf3b3d10dd712b7eb4bf300f70e160e0e0ee483ba",
            gas: "0x4cb26",
            gasPrice: "0x3b9aca00",
            hash: "0xdc2d0a6d316bfaad9f651a463db3e243ef238bbbed499d213ebfd2df3ccdc5d7",
            input: "0xa9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d63100000",
            nonce: "0xc07aa",
            publicKey: "0xd68e471a58084b3281adb80c093e1902aa33c9ae25eab17e33a117424194a0fe2d1185fdc25279aeeb71449b66d02f639cd20c82f232c2374a8c9a8c374e5416",
            r: "0xce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208",
            raw: "0xf8ac830c07aa843b9aca008304cb26941dad4783cf3fe3085c1426157ab175a6119a04ba80b844a9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d6310000077a0ce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208a07f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
            s: "0x7f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
            standardV: "0x0",
            to: "0x1dad4783cf3fe3085c1426157ab175a6119a04ba",
            transactionIndex: "0x1",
            v: "0x77",
            value: "0x0",
            isContractCall:"false"
        },
        {
            blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
            blockNumber: "0xb3dcdd",
            chainId: null,
            condition: null,
            creates: null,
            from: "0x526370e2643e8e23b5791c94a184f795be2a3e33",
            gas: "0xab40",
            gasPrice: "0x3b9aca00",
            hash: "0xb60cd427b3ca5ea75ba54241c7025ac070adb0845a40e492603d0ab493ea1f06",
            input: "0x7a22bbed",
            nonce: "0xdce5",
            publicKey: "0xcd1fcf5f4e635629603466441dafde62cb09f22c5bf1ecd162fe3e5703d3cbddc439ec1b1ba94be849d1bc339d69a5685257bac802409c2884519773a0573f65",
            r: "0x4d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048ec",
            raw: "0xf86982dce5843b9aca0082ab40948314d046198f2c29813a2dc0e15ad0ecdc159fb580847a22bbed1ca04d4dc6171bd986d06d34c02d865a387c7c527c32c0cf4fe8b673be7f9fc048eca066962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
            s: "0x66962a9f290e54a879a88cdfd4c212b19be3a9f7aaa1ab67a23d9bb08e384ec5",
            standardV: "0x1",
            to: "0x8314d046198f2c29813a2dc0e15ad0ecdc159fb5",
            transactionIndex: "0x0",
            v: "0x1c",
            value: "0x0",
            isContractCall:"true"
        },
        {
            blockHash: "0x482dffdc6717a3c582a6b27195ac9ef740180913664539bab9f4eaab72836ebc",
            blockNumber: "0xb3dcdd",
            chainId: "0x2a",
            condition: null,
            creates: null,
            from: "0xf3b3d10dd712b7eb4bf300f70e160e0e0ee483ba",
            gas: "0x4cb26",
            gasPrice: "0x3b9aca00",
            hash: "0xdc2d0a6d316bfaad9f651a463db3e243ef238bbbed499d213ebfd2df3ccdc5d7",
            input: "0xa9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d63100000",
            nonce: "0xc07aa",
            publicKey: "0xd68e471a58084b3281adb80c093e1902aa33c9ae25eab17e33a117424194a0fe2d1185fdc25279aeeb71449b66d02f639cd20c82f232c2374a8c9a8c374e5416",
            r: "0xce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208",
            raw: "0xf8ac830c07aa843b9aca008304cb26941dad4783cf3fe3085c1426157ab175a6119a04ba80b844a9059cbb000000000000000000000000e17186356fb68d06e08ef7ef0d1b95e12fd5879c0000000000000000000000000000000000000000000000056bc75e2d6310000077a0ce781fa2ea71842471f17bf4bef4504d8ac09cbd0844bae8d7ff02a51f3a5208a07f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
            s: "0x7f61f71e077bc807cfabc4e87bd22e1d4845bda7020f5b001bf7c02c3c396033",
            standardV: "0x0",
            to: "0x1dad4783cf3fe3085c1426157ab175a6119a04ba",
            transactionIndex: "0x1",
            v: "0x77",
            value: "0x0",
            isContractCall:"false"
        }
    ],
    transactionsRoot: "0x306ee2796ab5130db0f3ba0b96346f521fbc91b8aedbe1f1f3b1e184491a18f4",
    uncles: [ ]
    },
    id: 1
};

function GenerateBlock(blockData){
    var dotContent=""; //用來存放所有的dot
    var dotColor=""; //dot的顏色

    //遍歷所有transaction
    for(key in blockData.result.transactions){
        if(blockData.result.transactions[key].isContractCall=="true"){
            dotColor="rgb(143, 143, 143)"; //如果是ContractCall就用灰色
        }else{
            dotColor="rgb(253, 217, 39)"; //如果不是ContractCall就用黃色
        }
        dotContent+=
        `     
        <g class="tx" transform="translate(${(key%10)*18.5 + 11.75},${parseInt(key/10)*18.5 + 151.75})">
            <circle r="6.75" fill="${dotColor}" style="stroke-width: 1;"></circle>
        </g>
        `;
    }
    
    BlockNumber++;

    //將新產生的Block放到網頁上
    document.getElementById("Blocks").innerHTML+=
    `
    <div id="Block${BlockNumber}" style="position: absolute;">
        <svg width="190px" height="400px" id="aaa">
            <rect class="block" x="1" y="1" width="190" height="140" fill="rgb(75, 162, 70)"></rect>
            <rect class="block-tx" x="1" y="140" width="190" fill="none" height="171.5"></rect>
            <g class="block-txs" width="100%" height="100%">
                ${dotContent}
            </g>
            <g class="block-description" x="0" y="0" width="100%" height="100%">
                <text class="block-number" x="185" y="2" text-anchor="end" font-family="Courier" font-size="26px" dominant-baseline="text-before-edge">${blockData.result.number}</text>
                
                <text class="block-miner-label" x="5" y="30" text-anchor="start" font-family="Courier" font-size="12px" dominant-baseline="text-before-edge">Miner:</text>
                <text class="block-miner" x="52" y="30" text-anchor="start" font-family="Courier" font-size="14px" dominant-baseline="text-before-edge">${blockData.result.miner.toString().substring(0,14)}..</text>    
            </g>
        </svg>
    </div>
    `
    ;
    //將已經生成的Block放到陣列中
    generatedBlock.push(document.getElementById("Block" + BlockNumber));
    //將已經生成的Block往右移動
    for(var i=0;i<generatedBlock.length;i++){
        // console.log(generatedBlock[0].id);
        document.getElementById(generatedBlock[i].id).velocity({
            left:  ((generatedBlock.length*250) - (i*250)) + "px",
        }, {
            duration: 1000, 
            easing: "linear",
            delay: 0
        }); 
    }

    
}