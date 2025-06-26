import { Footer } from '../componentes/footer.jsx';
import { ImageCarousel } from '../componentes/imagecarousel.jsx';
import {Navbar} from '../componentes/navbar.jsx';

export const MainPage = () => {
    return(
    <>
        <header>
            <Navbar />
        </header>
        <main>
        <ImageCarousel />

        <h1>dsadadasdas</h1>
        </main>

        <footer>
            <Footer />
        </footer>
        </>
    )
}