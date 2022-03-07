import React, { useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


import './MovieRow.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, items}) => {

    const [scrollX, setScrollX] = useState(0);


    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x=0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2); // Limite da tela do usuário
        let listW = items.results.length * 150; // Largura da lista inteira
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        } // conta junto com o tamanho da tela do uruário
        setScrollX(x);
    }

    return (
        <div className='movieRow'>
            <h2>{title}</h2>

                <div className="movieRow--ArrowLeft" onClick={handleLeftArrow}>
                    <NavigateBeforeIcon style={{ fontSize: 50 }}/>
                </div>
                <div className="movieRow--ArrowRight" onClick={handleRightArrow}>
                    <NavigateNextIcon style={{ fontSize: 50 }}/>
                </div>
            <div className='movieRow--listArea'>
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className='movieRow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>    
                        </div>
                    ))}    
                </div>
            </div>
        </div>
    );
}