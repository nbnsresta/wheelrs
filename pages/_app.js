import Header from "../components/Header";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
