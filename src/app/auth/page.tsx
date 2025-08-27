import { headers } from 'next/headers';

import Button from "../../components/Button";
import Grid from "../../components/Grid";

export default function Landing() {

  const headersList = headers();
  
  const host = headersList.get('host'); // to get domain

  const { WEBSITE_NAME = "Redirection Test page" } = process.env;
  const {
    EXTERNAL_REDIRECT = "https://duckduckgo.com",
    EXTERNAL_REDIRECT_2 = "https://google.com",
  } = process.env;

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-4xl">
          Landing - {WEBSITE_NAME}
        </div>
      </div>

      <Grid title="Login">
        <Button
          url={`${EXTERNAL_REDIRECT}/auth/authenticator?relay=${host}`}
          title="Provider 1"
          description="Authenticate with provider 1"
        />
        <Button
          url={`${EXTERNAL_REDIRECT_2}/auth/authenticator?relay=${host}`}
          title="Provider 2"
          description="Authenticate with provider 2"
        />
      </Grid>
    </main>
  );
}
