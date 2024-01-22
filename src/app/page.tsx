import Button from "../components/Button";
import Grid from "../components/Grid";

export default function Home() {
  const { WEBSITE_NAME = "Redirection Test page" } = process.env;
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-4xl">
          {WEBSITE_NAME}
        </div>
      </div>

      <Grid title="Direct Link">
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

      <Grid title="Permanent Redirections - Same domain">
        <Button
          url="/permanentsamedomain301"
          title="301 "
          description="/permanentsamedomain301  -&gt;  /about"
        />
        <Button
          url="/permanentsamedomain"
          title="308"
          description="/permanentsamedomain -&gt;  /about"
        />
      </Grid>

      <Grid title="Permanent Redirections - External domain">
        <Button
          url="/permanentdiffdomain301"
          title="301"
          description="/permanentdiffdomain301 -&gt; duckduckgo.com"
        />
        <Button
          url="/permanentdiffdomain"
          title="308"
          description="/permanentdiffdomain -&gt; duckduckgo.com"
        />
      </Grid>

      <Grid title="Temporary Redirections - Same domain">
        <Button
          url="/tempsamedomain302"
          title="302"
          description="/tempsamedomain302 -&gt; /about"
        />
        <Button
          url="/tempsamedomain"
          title="307"
          description="/tempsamedomain -&gt; /about"
        />
      </Grid>

      <Grid title="Temporary Redirections - External domain">
        <Button
          url="/tempdiffdomain302"
          title="302"
          description="/tempdiffdomain302 -&gt; duckduckgo.com"
        />
        <Button
          url="/tempdiffdomain"
          title="307"
          description="/tempdiffdomain -&gt; duckduckgo.com"
        />
        {/* <Button
            url="/redirect"
            title="303 Redirect"
            description="See Other - different domain: duckduckgo.com"
          /> */}
      </Grid>

      <Grid title="Multiple Redirections">
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
          description="a.com -&gt; b.com -&gt; a.com"
        />
        <Button
          url="/re1"
          title="Multiple external domains"
          description="a.com -&gt; b.com -&gt; duckduckgo.com"
        />
      </Grid>
      <Grid title="Errors">
        <Button url="/loop1" title="Loop" description="Loop" />
        <Button
          url="/nonexistingexternal"
          title="Non existing domain"
          description="Redirect to non existing domain"
        />
        <Button
          url="/nonexistingsame"
          title="Non existing page"
          description="Redirect to non existing page on same domain"
        />
      </Grid>
    </main>
  );
}
