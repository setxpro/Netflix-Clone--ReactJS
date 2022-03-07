import { useEffect } from "react";

import Tmdb from "./Tmdb";

const App = () => {


    // Quando Carregar a tela.
    useEffect(() => {
        const loadAll = async () => {

            // pegando a lista TOTAL.
            let list = await Tmdb.getHomeList();
            console.log(list);

        }

        loadAll();
    },[])

    return (
        <div>
            olá mundo!
        </div>
    );
} 

export default App;