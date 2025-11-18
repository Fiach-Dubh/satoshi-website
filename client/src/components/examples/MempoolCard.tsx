import MempoolCard from "../MempoolCard";

export default function MempoolCardExample() {
  return (
    <div className="p-8 max-w-md">
      <MempoolCard
        title="The Bitcoin Central Bank's Perfect Monetary Policy"
        author="Pierre Rochard"
        date="December 31, 2013"
        readTime="8 min read"
        excerpt="Bitcoin's monetary policy is encoded in its source code, administered by an algorithm, and completely transparent to everyone. Bitcoin's monetary policy does not require any trust of a central authority."
        tags={["Economics", "Monetary Policy"]}
        slug="bitcoin-central-bank"
      />
    </div>
  );
}
