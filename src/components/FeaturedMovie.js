import React from 'react';
import './FeaturedMovie.css';
import { Link } from 'react-router-dom';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({item}) => {

    // pega a data inteira para ser extraído somente o ano
    let firstDate = new Date(item.first_air_date);

    //Generes
    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;
    if (description.length > 200) {
        description = description.substring(0, 200)+'...'
    }

    return(
        <div>
            <section className="featured" style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
                <div className='fatured--vertical'>
                    <div className='featured--horizontal'>
                        <div className='featured--name'>{item.original_name}</div>
                        <div className='featured--info'>
                            <div className='feaured--points'>{item.vote_average} pontos</div>
                            <div className='featured--year'>{firstDate.getFullYear()}</div>
                            <div className='featured--seasons'>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                        </div>
                        <div className='featured--description'>{description}</div>
                        <div className='featured--buttons'>
                            <Link to={`/watch/${item.id}`} className='featured--watchbutton'>► Assistir</Link>
                            <Link to={`/list/add/${item.id}`} className='featured--mylistbutton'>+ Minha Lista</Link>
                        </div>
                        <div className='feature--genres'><strong>Gêneros:</strong> {genres.join(', ')}</div>                    
                    </div>
                </div>
            </section>
        </div>
    );
}
