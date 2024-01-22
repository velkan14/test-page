type Props = {
  url: string;
  title: string;
  description: string;
};
export default function Button({ url, title, description }: Props) {
  return (
    <a
      href={url}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      rel="noopener noreferrer"
    >
      <h4 className={`mb-3 text-md `}>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h4>
      <p className={`m-0 text-sm opacity-50`}>{description}</p>
    </a>
  );
}
