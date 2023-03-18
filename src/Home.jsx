import './Home.css'

export default function Home() {
    return (
        <div className='home'>
            <div>
                <h3>50 Proyectos 50 días</h3>
                <ol className='list'>
                    <a href="expanding-cards" > Día 1: Expanding Cards</a>
                    <a href="progress-steps" > Día 2: Progress Steps</a>
                    <a href="rotating-navigation-animation" > Día 3: Rotating Navigation Animation</a>
                    <a href="hidden-search-widget" > Día 4: Hidden Search Widget</a>
                </ol>
            </div>
        </div>
    )
}