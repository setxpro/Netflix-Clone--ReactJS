import { useEffect, useState } from "react";

import './App.css';

import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from "./components/Footer";

const App = () => {

    // Lista para ser exibida
    const [movieList, setMovieList] = useState([]);

    //
    const [featuredData, setFeturedData] = useState(null);

    //Fazer sumir o Header após o Scroll to down
    const [blackHeader, setBleackHeader] = useState(false);



    // Quando Carregar a tela.
    useEffect(() => {
        const loadAll = async () => {

            // pegando a lista TOTAL.
            let list = await Tmdb.getHomeList();  
                      
            setMovieList(list);

            // Pegando o Filme em Destaque
            let originais = list.filter(i => i.slug === 'originais'); // Peguei os originais da Netflix
            let randomChosen = Math.floor(Math.random() * (originais[0].items.results.length - 1)); // (gerar num aleatório) 
            let chosen = originais[0].items.results[randomChosen];  
            let choseInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

            setFeturedData(choseInfo);

        }

        loadAll();
    },[]);

    useEffect(()=> {
        
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBleackHeader(true);
            } else {
                 setBleackHeader(false);
            }
        }
        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    },[])

    return (
        <div className="page">

            <Header black={blackHeader}/>
 
            {featuredData &&  
                <FeaturedMovie item={featuredData}/> 
            }

           <section className="lists">
                {movieList.map((item, key) => (
                        <MovieRow key={key} title={item.title} items={item.items}/>
                ))}
           </section>

           <Footer/>

            { movieList.length <= 0 && 
                <div className="loading">
                        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carregando" />
                </div>
            }
           
        </div>
    );
} 

export default App;