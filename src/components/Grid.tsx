import { ReactNode } from "react";

interface Props {
  title: string;
  children?: ReactNode;
}

export default function Grid({ title, children }: Props) {
  return (
    <section>
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="mb-32 grid text-center lg:max-w-screen-xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        {children}
      </div>
    </section>
  );
}
