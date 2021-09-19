import React from "react";
import Head from "next/head";

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Next.js with Bazel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="pb-5 text-5xl">
          <a href="https://nextjs.org" className="text-blue-700">
            Next.js!
          </a>{" "}
          with{" "}
          <a href="https://bazel.buil" className="text-green-500">
            Bazel
          </a>
        </h1>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div>
          <a href="https://nextjs.org/docs">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>
    </div>
  );
}
