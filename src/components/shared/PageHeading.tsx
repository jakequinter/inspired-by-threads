type Props = {
  title: string;
  secondaryText: string;
};

export default function PageHeading({ title, secondaryText }: Props) {
  return (
    <div className="mb-24 text-center md:mb-48">
      <h1 className="text-6xl font-semibold leading-normal text-slate-900">
        {title}
      </h1>
      <h2 className="text-xl">{secondaryText}</h2>
    </div>
  );
}
