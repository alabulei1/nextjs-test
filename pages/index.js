import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn WebAssembly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://webassemblytoday.substack.com/">WebAssembly!</a>
        </h1>

        <p className={styles.description}>
          Get started by <a href="https://github.com/second-state/wasm-learning">Wasm-learning</a>
        </p>

        <div className={styles.grid}>
          <a href="https://webassemblytoday.substack.com/" className={styles.card}>
            <h3>Newsletter &rarr;</h3>
            <p>Find something new in WebAssembly community.</p>
          </a>

          <a href="https://www.secondstate.io/articles/getting-started-with-function-as-a-service-in-rust/" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Rust and WebAssembly on the server-side!</p>
          </a>

          <a
            href="https://second-state.github.io/wasm-learning/faas/mobilenet/html/index.html"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy TensorFlow as a service examples with Rust and WebAssembly.</p>
          </a>

          <a
            href="https://www.secondstate.io/faas/"
            className={styles.card}
          >
            <h3>Low code Rust &rarr;</h3>
            <p>
              create modern web applications using only simple Rust syntax.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.secondstate.io/faas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
