import React, { useState } from 'react';
import { useNavigate, useOutletContext, Outlet } from 'react-router-dom';
import { PublicationCard } from './PublicationCard';
import { Filter } from './Filter';


export const Publications = () => {
    const { publications } = useOutletContext();
    const navigate = useNavigate();
    const [filter, setFilter] = useState('Todas');

    const filteredPublications = publications.filter(pub => {
        if (filter === 'Todas') return true;
        return pub.course.course === filter;
    });

    const handleNavigateToPost = (id) => {
        navigate(`/dashboard/publications/comments/${id}`);
    };

    return (
        <div className="px-6">
                <h1 className='ml-72 text-center text-4xl font-black mb-5 text-blue-900'>Publicaciones</h1>
            <div className="flex justify-between items-center mb-6">
            </div>
            
            <Filter 
                activeFilter={filter}
                onFilterChange={setFilter} 
            />
            
            {filteredPublications.length === 0 ? (
                <div className="bg-gray-50 ml-72 rounded-lg p-8 text-center">
                    <p className="text-gray-500 text-lg">
                        {filter === 'Todas' 
                            ? 'No hay publicaciones disponibles'
                            : `No hay publicaciones de ${filter}`
                        }
                    </p>
                    <p className="text-gray-400 mt-2">
                        Intenta con otro filtro o crea una nueva publicación
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredPublications.map((publication) => (
                        <PublicationCard
                            key={publication._id}
                            {...publication}
                            navigateToPostHandler={() => handleNavigateToPost(publication._id)}
                        />
                    ))}
                </div>
            )}
            
            <Outlet />
        </div>
    );
};