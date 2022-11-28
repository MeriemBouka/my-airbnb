import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from "./components/Navbar"
import data from "./data"


   export default function App() {
    const cards = data.map((item) => {
        return <Card img={item.coverImg}
        key= {item.id}
        item = {item}
        />
    })
    return (
        <>
        <Navbar />
        <Hero />
        <section>
            {cards}
        </section>
        </>
    )
}

