import { useEffect, useState } from "react";

import './App.css';

import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from './components/FeaturedMovie';

const App = () => {

    // Lista para ser exibida
    const [movieList, setMovieList] = useState([]);

    //
    const [featuredData, setFeturedData] = useState(null);


    // Quando Carregar a tela.
    useEffect(() => {
        const loadAll = async () => {

            // pegando a lista TOTAL.
            let list = await Tmdb.getHomeList();  
                      
            setMovieList(list);

            // Pegando o Filme em Destaque
            let originais = list.filter(i => i.slug === 'originais'); // Peguei os originais da Netflix
            let randomChosen = Math.floor(Math.random()); // (gerar num aleatório) # let randomChosen = Math.floor(Math.random() * (originais[0].items.results.lengh - 1)
            let chosen = originais[0].items.results[randomChosen];  
            let choseInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

            setFeturedData(choseInfo);

        }

        loadAll();
    },[])

    return (
        <div className="page">
 
            {featuredData &&  
                <FeaturedMovie item={featuredData}/> 
            }

           <section className="lists">
                {movieList.map((item, key) => (
                        <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
           </section>
        </div>
    );
} 

export default App;