export interface MempoolPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  series?: string;
  fullContent: string;
}

export const mempoolPosts: Record<string, MempoolPost> = {
  "speculative-attack": {
    slug: "speculative-attack",
    title: "Speculative Attack",
    author: "Pierre Rochard",
    date: "July 4, 2014",
    series: "The Bitcoin Series",
    fullContent: `Bitcoin naysayers wring their hands over how Bitcoin can't go mainstream. They gleefully worry that Bitcoin will not make it across the innovation chasm. It's too complicated, it doesn't have the right governance structure, the security is too hard to get right, existing and upcoming fiat payment systems are or will be superior, it's too volatile, the government will ban it, it won't scale.

The response from the Bitcoin community is to either endlessly argue over the above points or to find their inner Bitcoin Jonah with platitudes like: Bitcoin the currency doesn't matter, it's the block chain technology that matters; it would be better if the block chain technology were used by banks and governments; Bitcoin should continue to be a niche system for the bit-curious, it's just an experiment; fiat and Bitcoin will live side-by-side, happily ever after; Bitcoin is the Myspace of 'virtual currency'.

A few of the criticisms mentioned earlier are correct, yet they are complete non sequiturs. Bitcoin will not be eagerly adopted by the mainstream, it will be forced upon them. Forced, as in "compelled by economic reality". People will be forced to pay with bitcoins, not because of 'the technology', but because no one will accept their worthless fiat for payments. Contrary to popular belief, good money drives out bad. This "driving out" has started as a small fiat bleed. It will rapidly escalate into Class IV hemorrhaging due to speculative attacks on weak fiat currencies. The end result will be hyperbitcoinization, i.e. "your money is no good here".

Bitcoins are not just good money, they are the best money. The Bitcoin network has the best monetary policy and the best brand. We should therefore expect that bitcoins will drive out bad, weak currencies. By what process will bitcoins become the dominant currency? Which fiat currencies will be the first to disappear? These are the interesting questions of the day, as the necessary premises for these questions are already established truths.

Bitcoin's current trend is to increase in value on an exponential trend line as new users arrive in waves. The good money is "slowly" driving out the bad. Two factors drive this: reduction in information asymmetry (people are learning about Bitcoin) and increasing liquidity (buying bitcoins is more convenient and has fewer fees). Due to group psychology, these newcomers arrive in waves. The waves have a destabilizing effect on the exchange rate. Regardless, once the tide has pulled back and the weak hands have folded, the price is a few times higher than before the wave.

Slow bleed leads to currency crisis as the expected value of bitcoins solidifies in people's minds. The appeal of leveraging up increases if people believe that fiat-denominated liabilities are going to decrease in real terms. At that point it becomes a no-brainer to borrow the weak local currency using whatever collateral a bank will accept, invest in a strong foreign currency, and pay back the loan later with realized gains.

The effect of people, businesses, or financial institutions borrowing their local currency to buy bitcoins is that the bitcoin price in that currency would go up relative to other currencies. Traders would buy bitcoins in countries with lower prices and sell them in countries with higher prices to net gains. This would weaken those currencies, causing import inflation and losses for foreign investors. The central bank would have to either increase interest rates to break the cycle, impose capital controls, or spend their foreign currency reserves trying to prop up the exchange rate.

There's a huge problem with raising interest rates: bitcoin's historical return is approximately 500% per year. Even if investors expected future return is 1/10th of that, the central bank would have to increase interest rates to unconscionable levels to break the attack. The result is evident: everyone would flee the currency and adopt bitcoins, due to economic duress rather than technological enlightenment.

A speculative attack that seems isolated to one or a few weak currencies, but causes the purchasing power of bitcoins to go up dramatically, will rapidly turn into a contagion. The reflexivity between fiat inflation and bitcoin deflation will throw the world into full hyperbitcoinization.

Bitcoin will become mainstream. The Bitcoin skeptics don't understand this due to their biases and lack of financial knowledge. First, they are in as strong an echo chamber as Bitcoin skeptics. Second, they misunderstand how strong currencies like bitcoin overtake weak currencies like the dollar: it is through speculative attacks and currency crises caused by investors, not through the careful evaluation of tech journalists and 'mainstream consumers'.`
  },
  "everyones-a-scammer": {
    slug: "everyones-a-scammer",
    title: "Everyone's a Scammer",
    author: "Michael Goldstein",
    date: "September 11, 2014",
    fullContent: `There's a war going on for your bitcoins, and willpower is your only defense.

Bonnie and Clyde cannot simply rob First National Block Chain. They can hack servers and unencrypted wallet files or scan low-entropy brain wallets. But the costs of obtaining bitcoins hoarded on a high-entropy, password-protected paper wallet are incredibly high. Criminals, con artists, and swindlers cannot rely on violence to get the wealth they desire—it has become too cumbersome. These scoundrels must rely on good ol' fashioned market forces.

And it's working. Bitcoin is poised for exponential growth, so the opportunity costs of not being involved to the highest personal degree possible are incalculable. Yet merchants, investment peddlers, and other hoarders have been able to convince countless bitcoiners to part with their future riches. They'll tell you spending is vital, that Bitcoin 2.0 will be even better if only you give them some of your Bitcoin 0.9, or that your bitcoins are worth only $475 a piece. They'll tell you this with a straight face, the wringing of their hands unseen across the Internet. And once you have fallen to temptation, they'll leave you on your own to learn there are no 'backsies'. In the realpolitik of the block chain, everyone is a scammer. There is a war going on for your bitcoins, and willpower is your only defense.

Bitcoin is a dangerous place. There is an endless list of hacks, scams, and thefts. Bitcoin promises a network with distributed trust. You know why? Because other bitcoiners exist. Not every bitcoin scammer is merely an amoral businessman or investor. Many are outright fraudsters and con-artists. When you buy a rug from Overstock, at least you actually get a rug. When you send money to Ethereum, you may actually get a worthless ether token eventually. You know what you probably will never get? Your Butterfly Labs pre-order or your Goxbucks.

Merchants are scammers because they lead you to believe that your bitcoins are only worth the price of their retail good in order to allow themselves (or those to whom they sell the bitcoins, if they so choose), rather than you, to benefit from future Bitcoin price increases. And that's a good thing. Merchant adoption means there are more places to spend bitcoins, which makes Bitcoin more valuable.

Investments are scams. Regardless of their ability to actually deliver their promises, they all fail a simple test: is the return on investment positive? If hyperbitcoinization occurs, Bitcoin holders will see their purchasing power increase by orders of magnitude. Bitcoiners should think twice before throwing away even a couple millibits towards a project "just to see where it goes." Who wins here? It is not the investor, but the peddler of crypto-dreams.

The Bitcoin hoarder is in a constant battle with himself to lower his time preference as much as humanly possible. It's the only way to optimize his Bitcoin holdings. Bitcoin hoarders are excited about the price rises, but they are also excited when the price is on its way down. Whatever price, the bitcoin hoarder thinks to himself, "Suckers." Bitcoin hoarders are in it for the long run. Their strategy is not to buy low, sell high, but to buy any, sell highest.

Hoarders are scammers. They will do anything to get their hands on more satoshis, and there is nothing that makes them happier than a schmuck giving up the goods after being convinced Bitcoin is only worth $475. We are all scammers. We are all trying to convince you that your bitcoins are only worth what we are offering for them. The difference between us and everyone else is that we just admitted it. The question is not whether to engage with scammers, but rather, will you be the scammer or the scammed?`
  },
  "hyperbitcoinization": {
    slug: "hyperbitcoinization",
    title: "Hyperbitcoinization",
    author: "Daniel Krawisz",
    date: "March 29, 2014",
    series: "The Bitcoin Series",
    fullContent: `Hyperbitcoinization is the process by which Bitcoin becomes the dominant form of money in the world economy. This is not merely adoption, but rather a currency crisis induced by Bitcoin, where people rapidly abandon their native currency for Bitcoin. This process would be similar to historical hyperinflations, but in reverse - instead of fleeing from a collapsing currency into hard assets, people are fleeing into Bitcoin as the ultimate hard money.

The mechanism is straightforward: as Bitcoin's price rises, it becomes more attractive as a store of value. As more people buy Bitcoin, the price rises further, making it even more attractive. At some point, this positive feedback loop becomes self-sustaining. People begin to realize that holding their native currency is losing them money in real terms, and they rush to convert their savings into Bitcoin. This rush accelerates the decline of the fiat currency and the rise of Bitcoin.

Hyperbitcoinization is not a hypothetical scenario, but an inevitable consequence of Bitcoin's superior monetary properties. It may take years or decades, but the fundamental economics are clear. A hard money will always outcompete a soft money in a free market. The only question is not whether hyperbitcoinization will happen, but when and how quickly it will occur. When it does happen, it will likely catch most people by surprise, just as historical currency crises have always done.`
  },
  "the-skeptics": {
    slug: "the-skeptics",
    title: "The Bitcoin Skeptics",
    author: "Daniel Krawisz",
    date: "February 12, 2014",
    series: "The Bitcoin Series",
    fullContent: `Bitcoin skeptics fall into several categories, each with their own reasons for doubting Bitcoin's viability. The most common types are: those who don't understand it, those who understand it but think it won't work, and those who understand it and fear it might work too well. Understanding these different categories of skepticism is crucial to addressing their concerns and advancing Bitcoin adoption.

The first category - those who don't understand Bitcoin - is the largest. They often dismiss it as "just computer code" or "not backed by anything" without understanding that all money is a social construct and that gold itself has no intrinsic value beyond its monetary properties. These skeptics can often be educated by patient explanation of how Bitcoin works and why its monetary properties make it suitable as money.

The second and third categories are more interesting. Those who understand Bitcoin but think it won't work often focus on practical concerns: scalability, regulation, competition from governments or banks. These are legitimate technical and political challenges, but they fundamentally misunderstand Bitcoin's antifragile nature and its ability to adapt and evolve. Those who understand Bitcoin and fear it might work are often economically sophisticated individuals who recognize the revolutionary implications of a truly decentralized, censorship-resistant form of money. Their skepticism is not about whether Bitcoin could work, but about whether society is ready for such a dramatic change.`
  }
};
