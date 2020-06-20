window.onload = async () =>{
    const portis = new Portis('0e7a7a44-0ca0-48b9-888c-1ec05d30a82f', 'core');
    const web3p = new Web3(portis.provider);
    const Address =  "0x73b02AcDd380FA233e1263a0518f50DcA5EBfB5D";
    // console.log(Address);
    const account = await web3p.eth.getAccounts();
    console.log(account);
    mycontract = await new web3p.eth.Contract(ABI, Address);
    mes = await mycontract.methods.create(account[0], "TestToken","TST").send({from: account[0]});
    console.log(mes);  
    }