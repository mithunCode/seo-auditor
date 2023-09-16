import Search from "./components/Search";
import "./index.css";

function App() {
  return (
    <>
      <nav className="text-center font-bold font-palanquin  p-4 text-5xl text-orange-500 mb-10">
        SEO AUDITOR
      </nav>
      <main>
        <p className="text-center info text-white px-5">
          Identify and resolve some common website issues that impact your
          search engine rankings for every page on your site. <br />
          Enter the <span className="text-orange-500 ">URL</span> and generate
          results
        </p>

        <Search />
      </main>
    </>
  );
}

export default App;
