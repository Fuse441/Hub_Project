export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-start justify-start gap-4 ">
      <div className="inline-block w-full text-start justify-start">
        {children}
      </div>
    </section>
  );
}
