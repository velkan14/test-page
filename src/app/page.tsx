import Button from "./components/Button";
import Grid from "./components/Grid";

export default function Home() {
  const { WEBSITE_NAME = "Redirection Test page" } = process.env;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-4xl">
          {WEBSITE_NAME}
        </div>
      </div>

      <section>
        <h1>Direct Link</h1>
        <Grid>
          <Button
            url="/about"
            title="Direct link /about"
            description="Direct link to same domain"
          />
          <Button
            url="https://duckduckgo.com"
            title="Direct link duckduckgo"
            description="Direct link to different domain: duckduckgo.com"
          />
        </Grid>
      </section>

      <section>
        <h1>Permanent Redirections</h1>
        <Grid>
          <Button
            url="/permanentsamedomain301"
            title="301 Same domain"
            description="Permanent Redirect to same domain"
          />
          <Button
            url="/permanentdiffdomain301"
            title="301 External domain"
            description="Permanent Redirect to different domain: duckduckgo.com"
          />
          <Button
            url="/permanentsamedomain"
            title="308 Same domain"
            description="Permanent Redirect to same domain"
          />
          <Button
            url="/permanentdiffdomain"
            title="308 External domain"
            description="Permanent Redirect to different domain: duckduckgo.com"
          />
        </Grid>
      </section>
      <section>
        <h1>Temporary Redirections</h1>
        <Grid>
          <Button
            url="/tempsamedomain302"
            title="302 Same domain"
            description="Permanent Redirect to same domain"
          />
          <Button
            url="/tempdiffdomain302"
            title="302 External domain"
            description="Permanent Redirect to different domain: duckduckgo.com"
          />
          <Button
            url="/tempsamedomain"
            title="307 Same domain"
            description="Permanent Redirect to same domain"
          />
          <Button
            url="/tempdiffdomain"
            title="307 External domain"
            description="Permanent Redirect to different domain: duckduckgo.com"
          />
          {/* <Button
            url="/redirect"
            title="303 Redirect"
            description="See Other - different domain: duckduckgo.com"
          /> */}
        </Grid>
      </section>
      <section>
        <h1>Multiple Redirections</h1>
        <Grid>
          <Button
            url="/redirect"
            title="Loop"
            description="From a.com to b.com to a.com..."
          />
          <Button
            url="/three"
            title="Multiple same domains"
            description="3 redirections inside the same domain and server"
          />
          <Button
            url="/toomany"
            title="Too many redirects same domains"
            description="20 redirections inside the same domain and server"
          />
          <Button
            url="/r1"
            title="Multiple external domains"
            description="Redirect to external and back to this domain"
          />
        </Grid>
      </section>
    </main>
  );
}
