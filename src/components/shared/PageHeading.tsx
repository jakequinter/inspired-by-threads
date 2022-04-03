type Props = {
  title: string;
  secondaryText: string;
};

export default function PageHeading({ title, secondaryText }: Props) {
  return (
    <div className="mb-24 text-center md:mb-48">
      <h1 className="mb-2 text-4xl font-semibold text-slate-900 sm:text-4xl lg:text-6xl">
        {title}
      </h1>
      <h2 className="text-base sm:text-lg lg:text-xl">{secondaryText}</h2>
    </div>
  );
}
