import DocumentCard from "../DocumentCard";

export default function DocumentCardExample() {
  return (
    <div className="p-8 max-w-md">
      <DocumentCard
        title="Bitcoin: A Peer-to-Peer Electronic Cash System"
        author="Satoshi Nakamoto"
        date="October 31, 2008"
        excerpt="A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution."
        category="Whitepaper"
        slug="bitcoin-whitepaper"
      />
    </div>
  );
}
