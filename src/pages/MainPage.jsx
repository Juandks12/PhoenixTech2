import { Footer } from '../componentes/footer.jsx';
import { ImageCarousel } from '../componentes/imagecarousel.jsx';
import {Navbar} from '../componentes/navbar.jsx';
import { Products } from '../componentes/products'; 


export const MainPage = () => {
    return(
    <>
        <header>
            <Navbar />
        </header>

        <main>
        <ImageCarousel />

        <Products />

        </main>

        <footer>
            <Footer />
        </footer>
        </>
    )
}