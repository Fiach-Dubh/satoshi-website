export interface EmailThread {
  slug: string;
  subject: string;
  from: string;
  to: string;
  date: string;
  fullContent: string;
}

export const emailThreads: Record<string, EmailThread> = {
  "bitcoin-v01-released": {
    slug: "bitcoin-v01-released",
    subject: "Bitcoin v0.1 released",
    from: "Satoshi Nakamoto",
    to: "Cryptography Mailing List",
    date: "January 8, 2009",
    fullContent: `Announcing the first release of Bitcoin, a new electronic cash system that uses a peer-to-peer network to prevent double-spending. It's completely decentralized with no server or central authority.

See bitcoin.org for screenshots.

Download link:
http://downloads.sourceforge.net/bitcoin/bitcoin-0.1.0.rar

Windows only for now.  Open source C++ code is included.

- Unpack the files into a directory
- Run BITCOIN.EXE
- It automatically connects to other nodes

If you can keep a node running that accepts incoming connections, you'll really be helping the network a lot.  Port 8333 on your firewall needs to be open to receive incoming connections.

The software is still alpha and experimental.  There's no guarantee the system's state won't have to be restarted at some point if it becomes necessary, although I've done everything I can to build in extensibility and versioning.

You can get coins by getting someone to send you some, or turn on Options->Generate Coins to run a node and generate blocks.  I made the proof-of-work difficulty ridiculously easy to start with, so for a little while in the beginning a typical PC will be able to generate coins in just a few hours.  It'll get a lot harder when competition makes the automatic adjustment drive up the difficulty. Generated coins must wait 120 blocks to mature before they can be spent.

There are two ways to send money.  If the recipient is online, you can enter their IP address and it will connect, get a new public key and send the transaction with comments.  If the recipient is not online, it is possible to send to their Bitcoin address, which is a hash of their public key that they give you.  They'll receive the transaction the next time they connect and get the block it's in.  This method has the disadvantage that no comment information is sent, and a bit of privacy may be lost if the address is used multiple times, but it is a useful alternative if both users can't be online at the same time or the recipient can't receive incoming connections.

Total circulation will be 21,000,000 coins.  It'll be distributed to network nodes when they make blocks, with the amount cut in half every 4 years.

first 4 years: 10,500,000 coins
next 4 years: 5,250,000 coins
next 4 years: 2,625,000 coins
next 4 years: 1,312,500 coins
etc...

When that runs out, the system can support transaction fees if needed.  It's based on open market competition, and there will probably always be nodes willing to process transactions for free.

Satoshi Nakamoto`
  },
  "re-bitcoin-p2p-ecash-paper": {
    slug: "re-bitcoin-p2p-ecash-paper",
    subject: "Re: Bitcoin P2P e-cash paper",
    from: "Satoshi Nakamoto",
    to: "Cryptography Mailing List",
    date: "November 3, 2008",
    fullContent: `I appreciate your questions and feedback. The proof-of-work chain is a solution to the Byzantine Generals' Problem. I'll try to rephrase it in that context.

A number of Byzantine Generals each have a computer and want to attack the King's wi-fi by brute forcing the password, which they've learned is a certain number of characters in length. Once they stimulate the network to generate a packet, they must crack the password within a limited time to break in and erase the logs, otherwise they will be discovered and get in trouble. They only have enough CPU power to crack it fast enough if a majority of them attack at the same time.

They don't particularly care when the attack will be, just that they all agree. It has been decided that anyone who feels like it will announce an attack time, which we'll call the "timestamp", and whatever timestamp is heard first will be the official attack time. The problem is that the network is not instantaneous, and if two generals announce different attack times at close to the same time, some may hear one first and others hear the other first. They use a proof-of-work chain to solve this. Once each general receives whatever timestamp he heard first, he sets his computer to work on an extremely difficult proof-of-work problem that includes the timestamp in its hash.`
  },
  "re-scalability-transaction-rate": {
    slug: "re-scalability-transaction-rate",
    subject: "Re: Scalability and transaction rate",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "October 3, 2010",
    fullContent: `The bandwidth might not be as prohibitive as you think. A typical transaction would be about 400 bytes (ECC is nicely compact). Each transaction has to be broadcast twice, so lets say 1KB per transaction. Visa processed 37 billion transactions in FY2008, or an average of 100 million transactions per day. That many transactions would take 100GB of bandwidth, or the size of 12 DVD or 2 HD quality movies, or about $18 worth of bandwidth at current prices.

If the network were to get that big, it would take several years, and by then, sending 2 HD movies over the Internet would probably not seem like a big deal. In the interim, while the network grows, the software can be modified to support lightweight client nodes that don't need to download the entire chain. These nodes would only keep a copy of the block headers of the longest proof-of-work chain, which are available by querying network nodes until they're convinced they have the longest chain.

Long before the network gets anywhere near as large as Visa, it would be safe for users to use Simplified Payment Verification (SPV) to check for payment. With existing CPU speeds, a typical consumer computer could handle the bandwidth and storage requirements for running a full node. Even if the use of Bitcoin grows to a point where users cannot run full nodes, users running SPV nodes would be able to verify payments by querying multiple full nodes and wouldn't need to trust that the majority of mining power is not trying to attack them.`
  },
  "re-transactions-and-scripts": {
    slug: "re-transactions-and-scripts",
    subject: "Re: Transactions and Scripts: DUP HASH160 ... EQUALVERIFY CHECKSIG",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "June 17, 2010",
    fullContent: `The design supports a tremendous variety of possible transaction types that I designed years ago. Escrow transactions, bonded contracts, third party arbitration, multi-party signature, etc. If Bitcoin catches on in a big way, these are things we'll want to explore in the future, but they all had to be designed at the beginning to make sure they would be possible later.

The script is actually a predicate. It's just an equation that evaluates to true or false. The output script sets the condition for claiming the bitcoins, and the input script provides the values that satisfy that condition. The scripting language is a hybrid between a pure stack language and an assembly language. It has a limited set of operations to keep the system secure.

For now, the only transaction types that are widely used are the standard transactions to send to a Bitcoin address and the multi-signature transactions. These serve the majority of use cases that most users need. However, the system was designed with the foresight that it may be necessary to support more complex transaction types in the future. The flexibility is built into the protocol from the ground up, even if most of these advanced features are not needed today.`
  },
  "bitcoin-p2p-ecash-paper": {
    slug: "bitcoin-p2p-ecash-paper",
    subject: "Bitcoin P2P e-cash paper",
    from: "Satoshi Nakamoto",
    to: "Cryptography Mailing List",
    date: "October 31, 2008",
    fullContent: `I've been working on a new electronic cash system that's fully peer-to-peer, with no trusted third party.

The paper is available at:
http://www.bitcoin.org/bitcoin.pdf

The main properties:
Double-spending is prevented with a peer-to-peer network.
No mint or other trusted parties.
Participants can be anonymous.
New coins are made from Hashcash style proof-of-work.
The proof-of-work for new coin generation also powers the network to prevent double-spending.

Bitcoin: A Peer-to-Peer Electronic Cash System

Abstract.  A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without the burdens of going through a financial institution. Digital signatures provide part of the solution, but the main benefits are lost if a trusted party is still required to prevent double-spending.  We propose a solution to the double-spending problem using a peer-to-peer network.  The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work.  The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power.  As long as honest nodes control the most CPU power on the network, they can generate the longest chain and outpace any attackers.  The network itself requires minimal structure.  Messages are broadcasted on a best effort basis, and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened while they were gone.

Full paper at:
http://www.bitcoin.org/bitcoin.pdf

Satoshi Nakamoto`
  },
  "re-lost-coins": {
    slug: "re-lost-coins",
    subject: "Re: Lost coins only make everyone else's coins worth slightly more",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "June 21, 2010",
    fullContent: `Lost coins only make everyone else's coins worth slightly more. Think of it as a donation to everyone.

It's the opposite of a currency crisis or hyperinflation. It doesn't destabilize the network. The total supply is capped, but some portion of it will always be lost, dormant, or forgotten. This effectively makes Bitcoin slightly deflationary, which is a feature, not a bug.

The nice thing about Bitcoin is that as long as there are at least a few nodes running, all of the existing bitcoins and their ownership history is preserved. Even if you lose your wallet, your coins aren't destroyed, they're just unspendable. The blockchain remembers everything.`
  },
  "re-bitcoin-snack-machine": {
    slug: "re-bitcoin-snack-machine",
    subject: "Re: Bitcoin snack machine (fast transaction problem)",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "July 17, 2010",
    fullContent: `I believe it'll be possible for a payment processing company to provide as a service the rapid distribution of transactions with good-enough checking in something like 10 seconds or less.

The network nodes only accept the first version of a transaction they receive to incorporate into the block they're trying to generate. When you broadcast a transaction, if someone else broadcasts a double-spend at the same time, it's a race to propagate to the most nodes first. If one has a slight head start, it'll geometrically spread through the network faster and get most of the nodes.

A rough back-of-the-envelope example:
1 0
4 1
16 2
64 4
80% of the nodes, 20% for the other

The double-spender's chances of success drop off exponentially as the number of nodes he's up against increases.

For the kind of things that need to wait a few minutes, like buying currency or gold in an irreversible trade, a few blocks' confirmation is needed. A snack machine or a newspaper stand can take advantage of the 10 seconds propagation time and operate on that basis. They can afford to have a few transactions that take hours to clear or never clear at all in exchange for the immediate point-of-sale convenience.

Some other things like auctions and betting could be more forgiving of double-spending, where if someone double-spends, it just cancels the bet or bid. I'm sure there will be many ways to use the system that we haven't thought of yet.`
  },
  "re-proof-of-work-difficulty": {
    slug: "re-proof-of-work-difficulty",
    subject: "Re: Proof of work difficulty increasing",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "August 7, 2010",
    fullContent: `The proof-of-work difficulty is adjusted every 2016 blocks based on the time it took to generate the previous 2016 blocks. That means the target is recalculated after every 2016 blocks to aim for an average of 10 minutes per block.

If the previous 2016 blocks took more than two weeks to generate, the difficulty is reduced. If they took less than two weeks, the difficulty is increased. The adjustment is proportional to the amount of time over or under two weeks.

The reason for this design is to keep the rate of block generation roughly constant even as more computing power joins the network. As the network grows and more miners join, blocks would be generated faster and faster without this adjustment. The automatic difficulty adjustment ensures that no matter how much computing power is brought to bear, blocks will still be generated at approximately 10-minute intervals.

This creates a predictable money supply schedule that can't be manipulated. New bitcoins are created at a predictable rate, regardless of how many people are mining or how much computing power they have.`
  },
  "re-wikileaks-bitcoin": {
    slug: "re-wikileaks-bitcoin",
    subject: "Re: WikiLeaks contact info?",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "December 11, 2010",
    fullContent: `No, don't "bring it on".

The project needs to grow gradually so the software can be strengthened along the way.

I make this appeal to WikiLeaks not to try to use Bitcoin. Bitcoin is a small beta community in its infancy. You would not stand to get more than pocket change, and the heat you would bring would likely destroy us at this stage.`
  },
  "re-bitcoin-generation-mining": {
    slug: "re-bitcoin-generation-mining",
    subject: "Re: Bitcoin generation and mining",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "February 11, 2010",
    fullContent: `Proof-of-work has the nice property that it can be relayed through untrusted middlemen. We don't have to worry about a chain of custody of communication. It doesn't matter who tells you a longest chain, the proof-of-work speaks for itself.

The existing Visa credit card network processes about 15 million Internet purchases per day worldwide. Bitcoin can already scale much larger than that with existing hardware for a fraction of the cost. It never really hits a scale ceiling. If you're interested in the technical details, I encourage you to read the Bitcoin whitepaper, which explains this in detail.

The nature of Bitcoin is such that once version 0.1 was released, the core design was set in stone for the rest of its lifetime. Because of that, I wanted to design it to support every possible transaction type I could think of. The problem was, each thing required special support code and data fields whether it was used or not, and only covered one special case at a time. It would have been an explosion of special cases. The solution was script, which generalizes the problem so transacting parties can describe their transaction as a predicate that the node network evaluates. The nodes only need to understand the transaction to the extent of evaluating whether the sender's conditions are met.

The script is actually extremely simple. It's a simple stack-based instruction set. The operations are very basic: arithmetic, logical, hash, signature verification. There are a few other operations specific to Bitcoin like checking transactions.`
  },
  "re-open-source": {
    slug: "re-open-source",
    subject: "Re: Bitcoin open source implementation",
    from: "Satoshi Nakamoto",
    to: "Cryptography Mailing List",
    date: "November 17, 2008",
    fullContent: `The project is open source and I'm releasing all of the source code. It's MIT licensed. You can do whatever you want with it.

I've developed the code with the GNU C++ compiler and tested it primarily on Windows XP and Vista, but I've also compiled and tested it on Linux. The dependencies are minimal - just the basic development tools and OpenSSL. I've included a makefile for Linux/Unix compilation.

The nature of Bitcoin is such that once version 0.1 was released, the core design was set in stone for the rest of its lifetime. I'm releasing the full source code so anyone can review it, modify it, or build upon it. The system is designed to work even if not everyone is honest, so it should work even if modifications are made by different people.

Anyone interested in seeing how it works can download it and try it out. The source code is on SourceForge and the website is bitcoin.org.`
  },
  "re-commerce-internet": {
    slug: "re-commerce-internet",
    subject: "Re: Commerce on the Internet",
    from: "Satoshi Nakamoto",
    to: "Cryptography Mailing List",
    date: "November 14, 2008",
    fullContent: `A lot of people automatically dismiss e-currency as a lost cause because of all the companies that failed since the 1990's. I hope it's obvious it was only the centrally controlled nature of those systems that doomed them. I think this is the first time we're trying a decentralized, non-trust-based system.

The proof-of-work chain is the solution to the synchronization problem, and to knowing what the globally shared view is without having to trust anyone.

One of the problems with all the e-currency companies that failed over the years is that they all tried to create centralized systems. When the central authority was shut down or compromised, the entire system failed. Bitcoin is designed to be resilient to this failure mode by being completely decentralized. There's no single point of failure.

Also, conventional payment systems are vulnerable to chargebacks, which is why merchants have to charge 2-3% to cover the fraud risk. Bitcoin transactions are not reversible. A payment can be verified in about 10 seconds by checking that it's been broadcast to the network, and within an hour or so it becomes increasingly difficult to reverse.`
  },
  "re-difficulty-increase": {
    slug: "re-difficulty-increase",
    subject: "Re: Difficulty increase",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "November 25, 2009",
    fullContent: `It's the same situation as gold and gold mining. The marginal cost of gold mining tends to stay near the price of gold. Gold mining is a waste, but that waste is far less than the utility of having gold available as a medium of exchange.

I think the case will be the same for Bitcoin. The utility of the exchanges made possible by Bitcoin will far exceed the cost of electricity used. Therefore, not having Bitcoin would be the net waste.

The current estimate based on the difficulty level is that the network is doing about 1 million hash computations per second. That's a lot of power, but it's still nothing compared to what would be needed for an attacker to overpower the network. The proof-of-work difficulty adjusts to keep generation at a constant rate, so the energy expenditure follows the value that participants place on the system, not the other way around.

As long as people value bitcoins and the network they support, the system will be secure. The beauty of the proof-of-work system is that security automatically scales with the perceived value of what's being protected.`
  },
  "re-bitcoin-faucet": {
    slug: "re-bitcoin-faucet",
    subject: "Re: Bitcoin faucet",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "June 18, 2010",
    fullContent: `Excellent choice of a first project, nice work. I had planned to do this exact thing if someone else didn't do it, so when it gets too hard for mortals to generate 50BTC, new users could get some coins to play with right away. Donations should be able to keep it filled.

The faucet is a great way to distribute coins to people for free so they can start using Bitcoin. It helps bootstrap the network effect. Even if it's just a few coins, it's enough for people to try out transactions and get familiar with how the system works.

I'll send some bitcoins to the faucet.`
  },
  "re-simplified-payment-verification": {
    slug: "re-simplified-payment-verification",
    subject: "Re: Simplified Payment Verification",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "August 15, 2010",
    fullContent: `SPV is a way to verify payments without downloading the full blockchain. It's described in section 8 of the whitepaper.

The simplified payment verification only needs the block headers of the longest chain, which are only 80 bytes each and are generated approximately every 10 minutes. 80 bytes times 6 per hour times 24 hours times 365 days equals about 4.2MB per year, even after the system runs for years.

With block headers alone, the SPV client can verify that transactions exist in the blockchain by requesting merkle branch proofs from full nodes. The SPV client doesn't verify the transactions themselves, but can verify that full nodes accepted them and that additional blocks have been added to the chain since.

An attacker would need to control more than 50% of the network's computing power to fool an SPV client, and even then, only for transactions that the attacker creates. The attacker could not steal coins or create coins out of thin air. SPV provides a very high level of security for lightweight clients.

This is important for Bitcoin's scalability. Not everyone needs to run a full node. Most users can run SPV clients, which greatly reduces the resource requirements for using Bitcoin while maintaining strong security.`
  },
  "re-overflow-bug": {
    slug: "re-overflow-bug",
    subject: "Re: Overflow bug SERIOUS",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "August 15, 2010",
    fullContent: `The problem is, in the block chain, block 74638 has a transaction in it that creates over 184 billion bitcoins for three different addresses.

This is a problem because only 21 million bitcoins should ever be created. The fix is to add a check that the total output value of a transaction is in range before adding it to the block.

New version 0.3.10 with the fix is being released. The valid block chain is becoming the dominant one.

Please upgrade as soon as possible. The good news is that the network was able to respond quickly and decisively to fix this unprecedented attack. This demonstrates the resilience of the Bitcoin network and community.`
  },
  "p2p-foundation-announcement": {
    slug: "p2p-foundation-announcement",
    subject: "Bitcoin open source implementation of P2P currency",
    from: "Satoshi Nakamoto",
    to: "P2P Foundation",
    date: "February 11, 2009",
    fullContent: `I've developed a new open source P2P e-cash system called Bitcoin. It's completely decentralized, with no central server or trusted parties, because everything is based on crypto proof instead of trust. Give it a try, or take a look at the screenshots and design paper:

Download Bitcoin v0.1 at http://www.bitcoin.org

The root problem with conventional currency is all the trust that's required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust. Banks must be trusted to hold our money and transfer it electronically, but they lend it out in waves of credit bubbles with barely a fraction in reserve. We have to trust them with our privacy, trust them not to let identity thieves drain our accounts. Their massive overhead costs make micropayments impossible.

A generation ago, multi-user time-sharing computer systems had a similar problem. Before strong encryption, users had to rely on password protection to secure their files, placing trust in the system administrator to keep their information private. Privacy could always be overridden by the admin based on his judgment call weighing the principle of privacy against other concerns, or at the behest of his superiors. Then strong encryption became available to the masses, and trust was no longer required. Data could be secured in a way that was physically impossible for others to access, no matter for what reason, no matter how good the excuse, no matter what.

It's time we had the same thing for money. With e-currency based on cryptographic proof, without the need to trust a third party middleman, money can be secure and transactions effortless.

One of the fundamental building blocks for such a system is digital signatures. A digital coin contains the public key of its owner. To transfer it, the owner signs the coin together with the public key of the next owner. Anyone can check the signatures to verify the chain of ownership. It works well to secure ownership, but leaves one big problem unsolved: double-spending. Any owner could try to re-spend an already spent coin by signing it again to another owner. The usual solution is for a trusted company with a central database to check for double-spending, but that just gets back to the trust model. In its central position, the company can override the users, and the fees needed to support the company make micropayments impractical.

Bitcoin's solution is to use a peer-to-peer network to check for double-spending. In a nutshell, the network works like a distributed timestamp server, stamping the first transaction to spend a coin. It takes advantage of the nature of information being easy to spread but hard to stifle. For details on how it works, see the design paper at http://www.bitcoin.org/bitcoin.pdf

The result is a distributed system with no single point of failure. Users hold the crypto keys to their own money and transact directly with each other, with the help of the P2P network to check for double-spending.

Satoshi Nakamoto
http://www.bitcoin.org`
  },
  "re-citation-needed": {
    slug: "re-citation-needed",
    subject: "Re: Citation of your B-money page",
    from: "Satoshi Nakamoto",
    to: "Wei Dai",
    date: "August 22, 2008",
    fullContent: `I wanted to let you know, I just posted the main page of a new project at www.bitcoin.org. You can find a rough draft of a paper describing it at http://www.bitcoin.org/bitcoin.pdf

I need to find out the year of publication of b-money for the citation in my paper. It'll look like: [1] W. Dai, "b-money," http://www.weidai.com/bmoney.txt, (2006?).

You wrote about b-money in 1998, but I don't know what year your article was published. Is it the same year? I'd appreciate if you could let me know.

Bitcoin is a new electronic cash system that uses a peer-to-peer network to prevent double-spending. It's completely decentralized with no server or central authority. The paper describes the design and the first implementation.

I hope you'll find it interesting. Let me know if you have any questions or feedback.`
  },
  "re-hashcash-citation": {
    slug: "re-hashcash-citation",
    subject: "Re: Hashcash citation",
    from: "Satoshi Nakamoto",
    to: "Adam Back",
    date: "August 20, 2008",
    fullContent: `I wanted to make sure I cited your Hashcash work correctly in my paper. I'm working on a new electronic cash system that's fully peer-to-peer, with no trusted third party. The proof-of-work system is very similar to Hashcash.

In the paper, I cite: [2] A. Back, "Hashcash - a denial of service counter-measure," http://www.hashcash.org/papers/hashcash.pdf, 2002.

Is this the correct way to cite your work? I want to make sure you receive proper attribution for your contributions to the proof-of-work concept.

The system I'm working on uses a proof-of-work chain where each new proof-of-work includes the previous one, forming a chain. This creates a record that cannot be changed without redoing the proof-of-work.`
  },
  "re-bitcoin-v03": {
    slug: "re-bitcoin-v03",
    subject: "Bitcoin v0.3 released!",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "July 6, 2010",
    fullContent: `Bitcoin v0.3 is now available. This is a major release with many improvements and bug fixes.

Major changes in this version include:
- Support for UPnP to automatically open a port for incoming connections
- New JSON-RPC commands for server/script integration
- Improved handling of network splits and reorganization
- Better handling of IP address changes
- Mac OS X version improvements

You can download it from http://www.bitcoin.org or SourceForge.

This version is backward compatible with version 0.2.10 or higher. If you have version 0.1.5, you need to upgrade.

Thanks to everyone who contributed to this release, especially Laszlo for the Mac version improvements and Martti for lots of testing and bug reports.`
  },
  "re-first-bitcoin-transaction": {
    slug: "re-first-bitcoin-transaction",
    subject: "Re: First Bitcoin transaction to Hal Finney",
    from: "Satoshi Nakamoto",
    to: "Hal Finney",
    date: "January 12, 2009",
    fullContent: `Congratulations Hal! You are the recipient of the first Bitcoin transaction. I just sent you 10 BTC to test the system.

The transaction has been broadcast to the network and should appear in your wallet shortly. This is a historic moment - the first real-world Bitcoin transaction between two people.

Thank you for being an early tester and supporter of Bitcoin. Your feedback and testing have been invaluable in getting the system ready for wider use. The fact that you were able to compile and run the software so quickly shows that the basic design is sound.

Please let me know if you see any issues or have suggestions for improvements. The system is still in its infancy and there's much work to be done, but this successful first transaction is an important milestone.`
  },
  "re-denial-service": {
    slug: "re-denial-service",
    subject: "Re: Denial of service attack",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "August 3, 2010",
    fullContent: `I'm working on a version with some additional protections. There are some denial of service attacks that can be made against the network, but they're not as severe as they might seem.

The attacker can't steal coins or create coins out of thin air. The worst they can do is try to deny service by flooding the network with transactions or trying to split the network. However, these attacks are expensive to mount and the network has defenses against them.

For transaction flooding, the transaction fee system provides economic disincentive. An attacker would have to pay fees for all the bogus transactions they create. For network splits, the longest chain rule ensures that honest nodes will eventually converge on the same chain.

The network is designed to be resilient to these attacks. As long as honest nodes control a majority of CPU power, they'll outpace attackers and the network will remain secure.`
  },
  "re-bitcoin-key-management": {
    slug: "re-bitcoin-key-management",
    subject: "Re: Managing private keys",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "July 29, 2010",
    fullContent: `Your wallet file wallet.dat contains your private keys. This file should be backed up regularly and kept secure. If you lose this file, you lose your bitcoins forever.

The private keys in your wallet are the only thing that proves ownership of your bitcoins. Anyone who has your private keys can spend your bitcoins. That's why it's crucial to keep your wallet file secure and backed up.

I recommend:
1. Make regular backups of wallet.dat
2. Store backups in multiple secure locations
3. Consider encrypting your backups
4. Never share your wallet.dat file with anyone
5. Be careful about malware that could steal your wallet file

In the future, we'll add features like wallet encryption and better key management tools. But for now, the most important thing is to keep your wallet.dat file safe and backed up.`
  },
  "re-block-chain-browser": {
    slug: "re-block-chain-browser",
    subject: "Re: Block chain browser",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "November 25, 2009",
    fullContent: `A block chain browser would be a very useful tool. It would allow anyone to explore the entire history of Bitcoin transactions without needing to download the full block chain.

The block chain is completely public and transparent. Anyone can see every transaction that has ever occurred. However, transactions are not directly linked to identities - they're linked to Bitcoin addresses, which are pseudonymous.

A web-based block chain browser could display:
- Recent blocks and transactions
- Transaction details and confirmations
- Address balances and history
- Network statistics like hash rate and difficulty

This would make Bitcoin more accessible and easier to understand for new users. It would also be a valuable tool for researchers and developers working on Bitcoin-related projects.

If someone wants to create this, I'd be happy to provide technical assistance and answer questions about the block chain format.`
  },
  "re-micropayments": {
    slug: "re-micropayments",
    subject: "Re: Micropayments and transaction fees",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "February 14, 2010",
    fullContent: `Bitcoin is well-suited for micropayments. The transaction fees are much lower than credit card fees, making small transactions economically viable.

Currently, most transactions don't require a fee. As the network grows and block space becomes more valuable, fees will become more important. But even then, fees will be much lower than traditional payment systems.

The minimum transaction fee is voluntary and set by the network. Transactions with higher fees get priority when blocks are full. But for now, most transactions confirm quickly even without a fee.

For micropayments, you can make transactions as small as 0.01 BTC or even smaller. The transaction fee (if any) doesn't scale with the transaction amount, so small transactions are just as efficient as large ones.

This makes Bitcoin particularly well-suited for digital content, online services, and other use cases where micropayments are important.`
  },
  "re-block-size-limit": {
    slug: "re-block-size-limit",
    subject: "Re: Block size limit and scalability",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "October 4, 2010",
    fullContent: `The current block size limit of 1MB was set as an anti-spam measure. It can be increased in the future as needed.

Right now, the limit is high enough that it's not a constraint. We can let the network grow naturally and increase the limit when it becomes necessary. The limit can be raised by a coordinated upgrade of the network.

When the time comes to raise the limit, it will be obvious to everyone that it needs to be done. Nodes and miners will upgrade to accept larger blocks, and the change will be smooth.

For now, the 1MB limit provides protection against spam and DOS attacks while still allowing plenty of room for growth. It's a good conservative limit that can be adjusted as the network matures.

The key is that Bitcoin was designed to scale. The software can be modified to support larger blocks when needed. The fundamental design doesn't have any inherent scaling limitations.`
  },
  "re-coin-generation": {
    slug: "re-coin-generation",
    subject: "Re: Coin generation and distribution",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "December 10, 2009",
    fullContent: `The coin generation process is what secures the network. Miners who generate blocks are rewarded with newly created bitcoins. This provides an incentive to dedicate computing power to processing transactions and securing the network.

The generation reward started at 50 BTC per block and will be cut in half every 4 years. This means the total supply of bitcoins will asymptotically approach 21 million. No more than 21 million bitcoins will ever be created.

This predictable supply schedule is one of Bitcoin's key features. Unlike fiat currencies, which can be printed at will by central banks, Bitcoin has a fixed supply that no one can manipulate.

Early adopters who mine bitcoins now are taking a risk and contributing to the network's security. Their reward is the coins they generate. As Bitcoin becomes more valuable and more people use it, the system will transition from being funded by coin generation to being funded by transaction fees.

The coin distribution through mining is fair because anyone can participate. All you need is a computer and an internet connection.`
  },
  "re-double-spending-problem": {
    slug: "re-double-spending-problem",
    subject: "Re: Double-spending problem solution",
    from: "Satoshi Nakamoto",
    to: "Cryptography Mailing List",
    date: "November 9, 2008",
    fullContent: `The double-spending problem is solved by using the block chain as a distributed timestamp server. Each transaction is timestamped by being hashed into an ongoing chain of hash-based proof-of-work.

When a transaction is broadcast to the network, nodes include it in a block they're working on. When a node finds a proof-of-work for its block, it broadcasts the block to all nodes. Nodes accept the block only if all transactions in it are valid and not already spent.

The key insight is that nodes always consider the longest chain to be the correct one and will keep working on extending it. If two nodes broadcast different versions of the next block simultaneously, some nodes may receive one or the other first. In that case, they work on the first one they received, but save the other branch in case it becomes longer.

The tie is broken when the next proof-of-work is found and one branch becomes longer. The nodes that were working on the other branch will then switch to the longer one.

This mechanism makes it computationally impractical to reverse transactions once they've been included in several blocks. An attacker would need to redo all the proof-of-work for those blocks plus outpace the honest nodes' work on the current block.`
  },
  "re-escrow-transactions": {
    slug: "re-escrow-transactions",
    subject: "Re: Escrow transactions and contracts",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "June 16, 2010",
    fullContent: `The system supports escrow transactions and multi-signature contracts. This allows for complex transaction types where multiple parties must agree before bitcoins can be spent.

For example, you could have an escrow transaction where:
- Party A sends bitcoins to an address
- The bitcoins can only be spent if both Party A and Party B sign
- This protects both parties - the buyer and seller - in a transaction

This is implemented using the scripting system. The script for an escrow transaction requires multiple signatures before the output can be spent.

These advanced features aren't widely used yet, but they're built into the protocol. As Bitcoin matures and more sophisticated applications are developed, these capabilities will become more important.

The flexibility of the scripting system allows for all sorts of interesting possibilities: time-locked transactions, bonded contracts, third-party arbitration, and more. All of these were designed into Bitcoin from the beginning to ensure they would be possible later.`
  },
  "re-timestamps": {
    slug: "re-timestamps",
    subject: "Re: Timestamps and block generation",
    from: "Satoshi Nakamoto",
    to: "Bitcoin Forum",
    date: "March 7, 2010",
    fullContent: `The timestamp in each block doesn't have to be perfectly accurate. It just needs to be close enough that nodes can agree it's valid.

Each block's timestamp must be greater than the median timestamp of the previous 11 blocks and less than the network-adjusted time plus 2 hours. This allows for some variation in clocks between nodes while preventing obvious timestamp manipulation.

The timestamp is important for the difficulty adjustment. Every 2016 blocks, the difficulty is adjusted based on how long it took to generate those blocks. If blocks are being generated faster than every 10 minutes on average, the difficulty increases. If they're slower, it decreases.

This self-adjusting difficulty is what keeps the block generation rate steady even as more miners join the network. It's one of the key innovations that makes Bitcoin work.

The timestamp also helps resolve conflicts when two blocks are found at nearly the same time. Nodes can use the timestamp as one factor in deciding which block to build on.`
  },
  "p2p-research-announcement": {
    slug: "p2p-research-announcement",
    subject: "Bitcoin open source implementation of P2P currency",
    from: "Satoshi Nakamoto",
    to: "P2P Research Mailing List",
    date: "February 11, 2009",
    fullContent: `I've developed a new open source P2P e-cash system called Bitcoin. It's completely decentralized, with no central server or trusted parties, because everything is based on crypto proof instead of trust. Give it a try, or take a look at the screenshots and design paper:

Download Bitcoin v0.1 at http://www.bitcoin.org

The root problem with conventional currency is all the trust that's required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust. Banks must be trusted to hold our money and transfer it electronically, but they lend it out in waves of credit bubbles with barely a fraction in reserve. We have to trust them with our privacy, trust them not to let identity thieves drain our accounts. Their massive overhead costs make micropayments impossible.

A generation ago, multi-user time-sharing computer systems had a similar problem. Before strong encryption, users had to rely on password protection to secure their files, placing trust in the system administrator to keep their information private. Privacy could always be overridden by the admin based on his judgment call weighing the principle of privacy against other concerns, or at the behest of his superiors. Then strong encryption became available to the masses, and trust was no longer required. Data could be secured in a way that was physically impossible for others to access, no matter for what reason, no matter how good the excuse, no matter what.

It's time we had the same thing for money. With e-currency based on cryptographic proof, without the need to trust a third party middleman, money can be secure and transactions effortless.

One of the fundamental building blocks for such a system is digital signatures. A digital coin contains the public key of its owner. To transfer it, the owner signs the coin together with the public key of the next owner. Anyone can check the signatures to verify the chain of ownership. It works well to secure ownership, but leaves one big problem unsolved: double-spending. Any owner could try to re-spend an already spent coin by signing it again to another owner. The usual solution is for a trusted company with a central database to check for double-spending, but that just gets back to the trust model. In its central position, the company can override the users, and the fees needed to support the company make micropayments impractical.

Bitcoin's solution is to use a peer-to-peer network to check for double-spending. In a nutshell, the network works like a distributed timestamp server, stamping the first transaction to spend a coin. It takes advantage of the nature of information being easy to spread but hard to stifle. For details on how it works, see the design paper at http://www.bitcoin.org/bitcoin.pdf

The result is a distributed system with no single point of failure. Users hold the crypto keys to their own money and transact directly with each other, with the help of the P2P network to check for double-spending.

Satoshi Nakamoto
http://www.bitcoin.org`
  },
  "p2p-research-chaum-comparison": {
    slug: "p2p-research-chaum-comparison",
    subject: "Re: Bitcoin open source implementation of P2P currency",
    from: "Satoshi Nakamoto",
    to: "P2P Research Mailing List",
    date: "February 12, 2009",
    fullContent: `Martien van Steenbergen wrote:
> Very interesting. Is this akin to David Chaum's anonymous digital money?
> His concept makes sure money is anonymous unless it is compromised, i.e.
> the same money spent more than once. As soon as it's compromised, the
> 'counterfeiter' is immediately publicly exposed.

It's similar in that it uses digital signatures for coins, but different in the approach to privacy and preventing double-spending. The recipient of a Bitcoin payment is able to check whether it is the first spend or not, and second-spends are not accepted. There isn't an off-line mode where double-spenders are caught and shamed after the fact, because that would require participants to have identities.

To protect privacy, key pairs are used only once, with a new one for every transaction. The owner of a coin is just whoever has its private key.

Of course, the biggest difference is the lack of a central server. That was the Achilles heel of Chaumian systems; when the central company shut down, so did the currency.

> Also, in bitcoin, is there a limited supply of money (that must be
> managed)? Or is money created exaclty at the moment of transaction?

There is a limited supply of money. Circulation will be 21,000,000 coins. Transactions only transfer ownership.

Thank you for your questions,
Satoshi
http://www.bitcoin.org`
  },
  "p2p-research-programmable-currency": {
    slug: "p2p-research-programmable-currency",
    subject: "Re: Bitcoin open source implementation of P2P currency",
    from: "Satoshi Nakamoto",
    to: "P2P Research Mailing List",
    date: "February 13, 2009",
    fullContent: `Martien van Steenbergen wrote:
> Would love to also see support for not having to supply and
> managing money. Would make it easier and cheaper to maintain
> and results in have sufficient money, always and everywhere.
> No scarcity, no abundance, exactly the right amount all times,
> self-organizing.

That's do-able. It can be programmed to follow any set of rules.

I see Bitcoin as a foundation and first step if you want to implement programmable P2P social currencies like Marc's ideas and others discussed here. First you need normal, basic P2P currency working. Once that is established and proven out, dynamic smart money is an easy next step.

I love the idea of virtual, non-geographic communities experimenting with new economic paradigms.

> Reminds me of:
> * AardRock » Wizard Rabbit Treasurer
> <http://wiki.aardrock.com/Wizard_Rabbit_Treasurer>; and
> * AardRock » Pekunio <http://wiki.aardrock.com/Pekunio>

Indeed, it is much like Pekunio in the concept of spraying redundant copies of every transaction to a number of peers on the network, but the implementation is not a reputation network like Wizard Rabbit Treasurer. In fact, Bitcoin does not use reputation at all. It sees the network as just a big crowd and doesn't much care who it talks to or who tells it something, as long as at least one of them relays the information being broadcast around the network. It doesn't care because there's no way to lie to it. Either you tell it crypto proof of something, or it ignores you.

> Are you familiar with Ripple?

As trust systems go, Ripple is unique in spreading trust around rather than concentrating it.

> Is bitcoin also available as a protocol spec (facilitating differen
> language bindings and implementations; unite on specs, compete on
> implementation).

It would be best to refer to the C++ source code. I plan to implement interfaces for using the software to send and receive transactions from any language, so server side code can easily use it for web based e-commerce sites.

Satoshi`
  },
  "p2p-research-operational": {
    slug: "p2p-research-operational",
    subject: "Re: Bitcoin open source implementation of P2P currency",
    from: "Satoshi Nakamoto",
    to: "P2P Research Mailing List",
    date: "February 13, 2009",
    fullContent: `Michel Bauwens wrote:
> how operational is your project? how soon do you think people will be
> able to use it in real life?

It's fully operational and the network is growing. If you try the software, e-mail me your Bitcoin address and I'll send you a few coins.

We just need to spread the word and keep getting more people interested.

I'll forward the release introduction in the next message.

Satoshi
http://www.bitcoin.org`
  },
  "p2p-research-v01-release": {
    slug: "p2p-research-v01-release",
    subject: "Bitcoin P2P e-currency v0.1 released",
    from: "Satoshi Nakamoto",
    to: "P2P Research Mailing List",
    date: "February 13, 2009",
    fullContent: `Announcing the release of Bitcoin, a new open source peer-to-peer electronic cash system that's completely decentralized, with no central server or trusted parties. Users hold the crypto keys to their own money and transact directly with each other, with the help of the P2P network to check for double-spending.

Windows NT/2000/XP/Vista. Open source C++ code is included.

Download: http://www.bitcoin.org

- Unpack the files into a directory
- Run BITCOIN.EXE
- It automatically connects to other nodes

If you can keep a node running that accepts incoming connections, you'll really be helping the network a lot. Port 8333 on your firewall needs to be open to receive incoming connections.

You can get coins by getting someone to send you some, or turn on Options->Generate Coins to run a node and generate blocks. I made the proof-of-work difficulty ridiculously easy to start with, so for a little while in the beginning a typical PC will be able to generate coins in just a few hours. It'll get a lot harder when competition makes the automatic adjustment drive up the difficulty. Generated coins must wait 120 blocks to mature before they can be spent.

There are two ways to send money. If the recipient is online, you can enter their IP address and it will connect, get a new public key and send the transaction with comments. If the recipient is not online, it is possible to send to their Bitcoin address, which is a hash of their public key that they give you. They'll receive the transaction the next time they connect and get the block it's in. This method has the disadvantage that no comment information is sent, and a bit of privacy may be lost if the address is used multiple times, but it is a useful alternative if both users can't be online at the same time or the recipient can't receive incoming connections.

Total circulation will be 21,000,000 coins. It'll be distributed to network nodes when they make blocks, with the amount cut in half every 4 years.

first 4 years: 10,500,000 coins
next 4 years: 5,250,000 coins
next 4 years: 2,625,000 coins
next 4 years: 1,312,500 coins
etc...

When that runs out, the system can support transaction fees if needed. It's based on open market competition, and there will probably always be nodes willing to process transactions for free.

Satoshi Nakamoto
http://www.bitcoin.org`
  }
};
