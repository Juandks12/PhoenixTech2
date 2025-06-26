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


        </main>

        <footer>
            <Footer />
        </footer>
        </>
    )
}