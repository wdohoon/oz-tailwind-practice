import "./App.css";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
    return (
        <main className="flex flex-col items-center bg-black-100 min-h-screen">
            <Header />
            <section className="flex flex-wrap justify-center gap-5 p-5">
                {contents.map((el) => (
                    <Content key={el.id} content={el} />
                ))}
            </section>
        </main>
    );
}

export default App;
