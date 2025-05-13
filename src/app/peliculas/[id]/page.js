'use client';
import { useState, useEffect } from 'react';

export default function PageDetails({ params }) {
    const {id} = params;
    const [movie, setMovie] = useState(null);

    
    useEffect(() => {
        fetch(`https://mflixbackend.azurewebsites.net/api/movies/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
            })
            .catch((error) => {
                console.error('Error fetching movie details:', error);
            });
    }, [id]);

    return(
        <div className="container mx-auto p-4">
            {movie ? (
                <div className="flex flex-col items-center">
                    <img src={movie.poster} alt={movie.title} className="w-[300px] h-[450px] object-cover rounded-md" />
                    <h1 className="text-2xl font-bold mt-4">{movie.title}</h1>
                    <p className="text-sm mt-2">{movie.fullplot}</p>
                </div>
            ) : (
                <p>Cargando detalles de la película...</p>
            )}
        </div>
    );
    
}