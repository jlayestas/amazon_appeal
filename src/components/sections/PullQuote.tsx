interface PullQuoteProps {
  text: string;
}

export function PullQuote({ text }: PullQuoteProps) {
  return (
    <div className="bg-[#1a2e4a] px-5 py-12">
      <p className="mx-auto max-w-2xl text-center text-xl font-semibold leading-snug text-white sm:text-2xl">
        {text}
      </p>
    </div>
  );
}
