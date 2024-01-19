import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function Grid({ children }: Props) {
  return (
    <div className="mb-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {children}
    </div>
  );
}
