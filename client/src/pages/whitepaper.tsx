import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Whitepaper() {
  const handleDownload = () => {
    console.log("Download whitepaper clicked");
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Bitcoin: A Peer-to-Peer Electronic Cash System
            </h1>
            <p className="text-lg text-muted-foreground">
              by Satoshi Nakamoto
            </p>
          </div>
          <Button onClick={handleDownload} data-testid="button-download">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Published October 31, 2008
        </p>
      </div>

      <Card className="p-8 mb-8">
        <div className="prose prose-sm max-w-none dark:prose-invert">
          <h2 className="text-2xl font-bold mb-4">Abstract</h2>
          <p className="text-muted-foreground mb-6">
            A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution. Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending. We propose a solution to the double-spending problem using a peer-to-peer network. The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work. The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power. As long as a majority of CPU power is controlled by nodes that are not cooperating to attack the network, they'll generate the longest chain and outpace attackers. The network itself requires minimal structure. Messages are broadcast on a best effort basis, and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened while they were gone.
          </p>

          <div className="bg-muted/50 p-6 rounded-md mb-8">
            <div className="flex items-start gap-4">
              <FileText className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Full Document Available</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  The complete Bitcoin whitepaper with all sections, technical diagrams, and mathematical proofs is available for download.
                </p>
                <Button variant="outline" size="sm" onClick={handleDownload} data-testid="button-download-abstract">
                  <Download className="mr-2 h-3.5 w-3.5" />
                  Download Full PDF
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-10">
            <section id="introduction">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Commerce on the Internet has come to rely almost exclusively on financial institutions serving as trusted third parties to process electronic payments. While the system works well enough for most transactions, it still suffers from the inherent weaknesses of the trust based model. Completely non-reversible transactions are not really possible, since financial institutions cannot avoid mediating disputes. The cost of mediation increases transaction costs, limiting the minimum practical transaction size and cutting off the possibility for small casual transactions, and there is a broader cost in the loss of ability to make non-reversible payments for non-reversible services.
              </p>
              <p className="text-muted-foreground">
                What is needed is an electronic payment system based on cryptographic proof instead of trust, allowing any two willing parties to transact directly with each other without the need for a trusted third party. Transactions that are computationally impractical to reverse would protect sellers from fraud, and routine escrow mechanisms could easily be implemented to protect buyers. In this paper, we propose a solution to the double-spending problem using a peer-to-peer distributed timestamp server to generate computational proof of the chronological order of transactions.
              </p>
            </section>

            <section id="transactions">
              <h2 className="text-2xl font-bold mb-4">2. Transactions</h2>
              <p className="text-muted-foreground mb-4">
                We define an electronic coin as a chain of digital signatures. Each owner transfers the coin to the next by digitally signing a hash of the previous transaction and the public key of the next owner and adding these to the end of the coin. A payee can verify the signatures to verify the chain of ownership.
              </p>
              <p className="text-muted-foreground">
                The problem of course is the payee can't verify that one of the owners did not double-spend the coin. A common solution is to introduce a trusted central authority, or mint, that checks every transaction for double spending. After each transaction, the coin must be returned to the mint to issue a new coin, and only coins issued directly from the mint are trusted not to be double-spent. The problem with this solution is that the fate of the entire money system depends on the company running the mint, with every transaction having to go through them, just like a bank.
              </p>
            </section>

            <section id="timestamp-server">
              <h2 className="text-2xl font-bold mb-4">3. Timestamp Server</h2>
              <p className="text-muted-foreground">
                The solution we propose begins with a timestamp server. A timestamp server works by taking a hash of a block of items to be timestamped and widely publishing the hash, such as in a newspaper or Usenet post. The timestamp proves that the data must have existed at the time, obviously, in order to get into the hash. Each timestamp includes the previous timestamp in its hash, forming a chain, with each additional timestamp reinforcing the ones before it.
              </p>
            </section>

            <section id="proof-of-work">
              <h2 className="text-2xl font-bold mb-4">4. Proof-of-Work</h2>
              <p className="text-muted-foreground mb-4">
                To implement a distributed timestamp server on a peer-to-peer basis, we will need to use a proof-of-work system similar to Adam Back's Hashcash, rather than newspaper or Usenet posts. The proof-of-work involves scanning for a value that when hashed, such as with SHA-256, the hash begins with a number of zero bits. The average work required is exponential in the number of zero bits required and can be verified by executing a single hash.
              </p>
              <p className="text-muted-foreground">
                For our timestamp network, we implement the proof-of-work by incrementing a nonce in the block until a value is found that gives the block's hash the required zero bits. Once the CPU effort has been expended to make it satisfy the proof-of-work, the block cannot be changed without redoing the work. As later blocks are chained after it, the work to change the block would include redoing all the blocks after it.
              </p>
            </section>

            <section id="network">
              <h2 className="text-2xl font-bold mb-4">5. Network</h2>
              <p className="text-muted-foreground">
                The steps to run the network are as follows: 1) New transactions are broadcast to all nodes. 2) Each node collects new transactions into a block. 3) Each node works on finding a difficult proof-of-work for its block. 4) When a node finds a proof-of-work, it broadcasts the block to all nodes. 5) Nodes accept the block only if all transactions in it are valid and not already spent. 6) Nodes express their acceptance of the block by working on creating the next block in the chain, using the hash of the accepted block as the previous hash.
              </p>
            </section>

            <section id="incentive">
              <h2 className="text-2xl font-bold mb-4">6. Incentive</h2>
              <p className="text-muted-foreground mb-4">
                By convention, the first transaction in a block is a special transaction that starts a new coin owned by the creator of the block. This adds an incentive for nodes to support the network, and provides a way to initially distribute coins into circulation, since there is no central authority to issue them. The steady addition of a constant of amount of new coins is analogous to gold miners expending resources to add gold to circulation. In our case, it is CPU time and electricity that is expended.
              </p>
              <p className="text-muted-foreground">
                The incentive can also be funded with transaction fees. If the output value of a transaction is less than its input value, the difference is a transaction fee that is added to the incentive value of the block containing the transaction. Once a predetermined number of coins have entered circulation, the incentive can transition entirely to transaction fees and be completely inflation free.
              </p>
            </section>

            <section id="reclaiming-disk-space">
              <h2 className="text-2xl font-bold mb-4">7. Reclaiming Disk Space</h2>
              <p className="text-muted-foreground">
                Once the latest transaction in a coin is buried under enough blocks, the spent transactions before it can be discarded to save disk space. To facilitate this without breaking the block's hash, transactions are hashed in a Merkle Tree, with only the root included in the block's hash. Old blocks can then be compacted by stubbing off branches of the tree. The interior hashes do not need to be stored. A block header with no transactions would be about 80 bytes. If we suppose blocks are generated every 10 minutes, 80 bytes × 6 × 24 × 365 = 4.2MB per year.
              </p>
            </section>

            <section id="simplified-payment-verification">
              <h2 className="text-2xl font-bold mb-4">8. Simplified Payment Verification</h2>
              <p className="text-muted-foreground">
                It is possible to verify payments without running a full network node. A user only needs to keep a copy of the block headers of the longest proof-of-work chain, which he can get by querying network nodes until he's convinced he has the longest chain, and obtain the Merkle branch linking the transaction to the block it's timestamped in. He can't check the transaction for himself, but by linking it to a place in the chain, he can see that a network node has accepted it, and blocks added after it further confirm the network has accepted it.
              </p>
            </section>

            <section id="combining-splitting-value">
              <h2 className="text-2xl font-bold mb-4">9. Combining and Splitting Value</h2>
              <p className="text-muted-foreground">
                Although it would be possible to handle coins individually, it would be unwieldy to make a separate transaction for every cent in a transfer. To allow value to be split and combined, transactions contain multiple inputs and outputs. Normally there will be either a single input from a larger previous transaction or multiple inputs combining smaller amounts, and at most two outputs: one for the payment, and one returning the change, if any, back to the sender.
              </p>
            </section>

            <section id="privacy">
              <h2 className="text-2xl font-bold mb-4">10. Privacy</h2>
              <p className="text-muted-foreground mb-4">
                The traditional banking model achieves a level of privacy by limiting access to information to the parties involved and the trusted third party. The necessity to announce all transactions publicly precludes this method, but privacy can still be maintained by breaking the flow of information in another place: by keeping public keys anonymous. The public can see that someone is sending an amount to someone else, but without information linking the transaction to anyone. This is similar to the level of information released by stock exchanges, where the time and size of individual trades, the "tape", is made public, but without telling who the parties were.
              </p>
              <p className="text-muted-foreground">
                As an additional firewall, a new key pair should be used for each transaction to keep them from being linked to a common owner. Some linking is still unavoidable with multi-input transactions, which necessarily reveal that their inputs were owned by the same owner. The risk is that if the owner of a key is revealed, linking could reveal other transactions that belonged to the same owner.
              </p>
            </section>

            <section id="calculations">
              <h2 className="text-2xl font-bold mb-4">11. Calculations</h2>
              <p className="text-muted-foreground">
                We consider the scenario of an attacker trying to generate an alternate chain faster than the honest chain. Even if this is accomplished, it does not throw the system open to arbitrary changes, such as creating value out of thin air or taking money that never belonged to the attacker. Nodes are not going to accept an invalid transaction as payment, and honest nodes will never accept a block containing them. An attacker can only try to change one of his own transactions to take back money he recently spent. The race between the honest chain and an attacker chain can be characterized as a Binomial Random Walk.
              </p>
            </section>

            <section id="conclusion">
              <h2 className="text-2xl font-bold mb-4">12. Conclusion</h2>
              <p className="text-muted-foreground">
                We have proposed a system for electronic transactions without relying on trust. We started with the usual framework of coins made from digital signatures, which provides strong control of ownership, but is incomplete without a way to prevent double-spending. To solve this, we proposed a peer-to-peer network using proof-of-work to record a public history of transactions that quickly becomes computationally impractical for an attacker to change if honest nodes control a majority of CPU power. The network is robust in its unstructured simplicity. Nodes work all at once with little coordination. They do not need to be identified, since messages are not routed to any particular place and only need to be delivered on a best effort basis. Nodes can leave and rejoin the network at will, accepting the proof-of-work chain as proof of what happened while they were gone. They vote with their CPU power, expressing their acceptance of valid blocks by working on extending them and rejecting invalid blocks by refusing to work on them. Any needed rules and incentives can be enforced with this consensus mechanism.
              </p>
            </section>
          </div>
        </div>
      </Card>
    </div>
  );
}