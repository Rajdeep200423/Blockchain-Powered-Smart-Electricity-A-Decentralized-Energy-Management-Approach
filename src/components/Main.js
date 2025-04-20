import { useState } from "react";
import { ethers } from "ethers";
import "./Main.css"

const contractAddress = "0x05C6F356CA17d67A44FCCA2abC081bAa1369C2dD"; // Replace with deployed contract address
const contractABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "amount", "type": "uint256" }
    ],
    "name": "addElectricitySupply",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "amount", "type": "uint256" }
    ],
    "name": "transferElectricity",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "user", "type": "address" },
      { "internalType": "uint256", "name": "perMinute", "type": "uint256" }
    ],
    "name": "startDeduction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "user", "type": "address" }
    ],
    "name": "stopDeduction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

function Main() {
  const [account, setAccount] = useState(null);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [deductionRate, setDeductionRate] = useState("");

  // Connect to Metamask
  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setAccount(await signer.getAddress());
    } else {
      alert("Please install Metamask!");
    }
  }

  // Get contract instance
  async function getContract() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  }

  // Mint Tokens
  async function mintTokens() {
    if (!account) return alert("Connect your wallet first!");
    const contract = await getContract();
    const tx = await contract.addElectricitySupply(recipient, ethers.parseUnits(amount, 18));
    await tx.wait();
    alert("Tokens minted successfully!");
  }

  // Transfer Tokens
  async function transferTokens() {
    if (!account) return alert("Connect your wallet first!");
    const contract = await getContract();
    const tx = await contract.transferElectricity(recipient, ethers.parseUnits(amount, 18));
    await tx.wait();
    alert("Tokens transferred successfully!");
  }

  // Start Deduction
  async function startDeduction() {
    if (!account) return alert("Connect your wallet first!");
    const contract = await getContract();
    const tx = await contract.startDeduction(account, ethers.parseUnits(deductionRate, 18));
    await tx.wait();
    alert("Deduction started!");
  }

  // Stop Deduction
  async function stopDeduction() {
    if (!account) return alert("Connect your wallet first!");
    const contract = await getContract();
    const tx = await contract.stopDeduction(account);
    await tx.wait();
    alert("Deduction stopped!");
  }

  return (
  
  <div id="maindiv" style={{  textAlign: "center", padding: "20px" }}>
      <h1 class="text">ElectroCoin Dashboard</h1>

      <button onClick={connectWallet}>
        {account ? `Connected: ${account.substring(0, 6)}...` : "Connect Wallet"}
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3 class="text">Mint Tokens</h3>
        <input placeholder="Recipient Address" onChange={(e) => setRecipient(e.target.value)} />
        <input placeholder="Amount" type="number" onChange={(e) => setAmount(e.target.value)} />
        <button onClick={mintTokens}>Mint</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3 class="text">Transfer Tokens</h3>
        <input placeholder="Recipient Address" onChange={(e) => setRecipient(e.target.value)} />
        <input placeholder="Amount" type="number" onChange={(e) => setAmount(e.target.value)} />
        <button onClick={transferTokens}>Transfer</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3 class="text">Start Deduction</h3>
        <input placeholder="Rate Per Minute" type="number" onChange={(e) => setDeductionRate(e.target.value)} />
        <button onClick={startDeduction}>Start</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3 class="text">Stop Deduction</h3>
        <button onClick={stopDeduction}>Stop</button>
      </div>
    </div>
  );
}

export default Main;