"use client";

import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-4xl">
          Test page
        </div>
      </div>

      <section>
        <h1>Permanent Redirections</h1>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {/* <Button
            url="/permanentsamedomain"
            title="301 Redirect"
            description="Moved Permanently to different domain: duckduckgo.com"
          /> */}
          <Button
            url="/permanentsamedomain301"
            title="301 Redirect"
            description="Permanent Redirect to same domain"
          />
          <Button
            url="/permanentdiffdomain301"
            title="301 Redirect"
            description="Permanent Redirect to different domain: duckduckgo.com"
          />
          <Button
            url="/permanentsamedomain"
            title="308 Redirect"
            description="Permanent Redirect to same domain"
          />
          <Button
            url="/permanentdiffdomain"
            title="308 Redirect"
            description="Permanent Redirect to different domain: duckduckgo.com"
          />
        </div>
      </section>
      <section>
        <h1>Temporary Redirections</h1>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Button
            url="/tempsamedomain302"
            title="302 Redirect"
            description="Found - same domain"
          />
          <Button
            url="/tempdiffdomain302"
            title="302 Redirect"
            description="Found - different domain: duckduckgo.com"
          />
          <Button
            url="/tempsamedomain"
            title="307 Redirect"
            description="Found - same domain"
          />
          <Button
            url="/tempdiffdomain"
            title="307 Redirect"
            description="Found - different domain: duckduckgo.com"
          />
          {/* <Button
            url="/redirect"
            title="303 Redirect"
            description="See Other - different domain: duckduckgo.com"
          />
          <Button
            url="/redirect"
            title="307 Redirect"
            description="Permanent redirect to different domain: duckduckgo.com"
          /> */}
        </div>
      </section>
      {/* <section>
        <h1>Other Redirections</h1>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Button
            url="/redirect"
            title="Loop"
            description="Found - different domain: duckduckgo.com"
          />
          <Button
            url="/redirect"
            title="Multiple"
            description="See Other - different domain: duckduckgo.com"
          />
          <Button
            url="/redirect"
            title="Multiple"
            description="Permanent redirect to different domain: duckduckgo.com"
          />
        </div>
      </section> */}
    </main>
  );
}
