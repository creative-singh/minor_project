import React from 'react';
import blockChain from "../../images/s3.jpg";
import subBlockChain from "../../images/subPagesImgs/blockchain-sub.png";

const BlockChain = () => {
  return (
    <div className="container pb-5">
      <img src={blockChain} alt="block-chain" className="pt-4" style={{ width: "100%", maxHeight: "340px", objectFit: "cover" }} />

      <h1 className="my-5">Block chain Application</h1>

      <p><b>Blockchain</b> is the backbone Technology of Digital CryptoCurrency BitCoin. The blockchain is a distributed database of records of all transactions or digital event that have been executed and shared among participating parties. </p>

      <p>Each transaction verified by the majority of participants of the system. It contains every single record of each transaction. <b>BitCoin</b> is the most popular cryptocurrency an example of the blockchain. </p>

      <p><b>Blockchain Technology</b> first came to light when a person or Group of individuals name ‘<i>Satoshi Nakamoto’</i> published a white paper on “<i>BitCoin</i>: A peer to peer electronic cash system” in 2008. Blockchain Technology Records Transaction in Digital Ledger which is distributed over the Network thus making it incorruptible. Anything of value like Land Assets, Cars, etc. can be recorded on Blockchain as a Transaction.</p>

      <div className="text-center py-4">
        <img src={subBlockChain} alt="sub page of block chain" width="50%" />
      </div>

      <p>Building trust with Blockchain:</p>

      <p>Blockchain enhances trust across a business network. It’s not that you can’t trust those who you conduct business with its that you don’t need to when operating on a Blockchain network.</p>

      <p>Blockchain builts trust through the following five attributes:</p>

      <ul>
        <li><b>Distributed</b>: The distributed ledger is shared and updated with every incoming transaction among the nodes connected to the Blockchain. All this is done in real-time as there is no central server controlling the data.</li>
        <br />

        <li><b>Secure</b>: There is no unauthorized access to Blockchain made possible through Permissions and Cryptography.</li>
        <br />

        <li><b>Transparent</b>: Because every node or participant in Blockchain has a copy of the Blockchain data, they have access to all transaction data. They themselves can verify the identities without the need for mediators.</li>
        <br />

        <li><b>Consensus-based</b>: All relevant network participants must agree that a transaction is valid. This is achieved through the use of consensus algorithms.</li>
        <br />

        <li><b>Flexible</b>: Smart Contracts which are executed based on certain conditions can be written into the platform. Blockchain Network can evolve in pace with business processes.</li>
        <br />
      </ul>


      <p>Benefits of Blockchain Technology:</p>

      <ul>
        <li><b>Time-saving</b>: No central Authority verification needed for settlements making the process faster and cheaper.</li>
        <br />

        <li><b>Cost-saving</b>: A Blockchain network reduces expenses in several ways. No need for third-party verification. Participants can share assets directly. Intermediaries are reduced. Transaction efforts are minimized as every participant has a copy of shared ledger.</li>
        <br />

        <li><b>Tighter security</b>: No one can temper with Blockchain Data as it shared among millions of Participant. The system is safe against cybercrimes and Fraud.</li>
        <br />
      </ul>

    </div>
  )
};

export default BlockChain;
