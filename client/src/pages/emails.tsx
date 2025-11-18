import EmailCard from "@/components/EmailCard";
import { emailThreads } from "@/data/email-content";

export default function Emails() {
  const emails = Object.values(emailThreads).map(email => ({
    subject: email.subject,
    from: email.from,
    to: email.to,
    date: email.date,
    excerpt: email.fullContent.substring(0, 200) + "...",
    slug: email.slug,
  }));

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Satoshi's Email Archive</h1>
        <p className="text-lg text-muted-foreground">
          Complete collection of Satoshi Nakamoto's email correspondence from the Cryptography Mailing List and Bitcoin Forum, documenting the early development of Bitcoin.
        </p>
      </div>

      <div className="space-y-4">
        {emails.map((email) => (
          <EmailCard key={email.slug} {...email} />
        ))}
      </div>
    </div>
  );
}
