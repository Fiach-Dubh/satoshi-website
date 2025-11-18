import EmailCard from "../EmailCard";

export default function EmailCardExample() {
  return (
    <div className="p-8 max-w-2xl">
      <EmailCard
        subject="Bitcoin v0.1 released"
        from="Satoshi Nakamoto"
        to="Cryptography Mailing List"
        date="January 9, 2009"
        excerpt="Announcing the first release of Bitcoin, a new electronic cash system that uses a peer-to-peer network to prevent double-spending. It's completely decentralized with no server or central authority."
        slug="bitcoin-v01-released"
      />
    </div>
  );
}
