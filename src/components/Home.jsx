import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className=" ml-56  bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      {/* Contenedor principal */}
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Título */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          <span className="text-blue-600">La Voz del Pasillo</span>
        </h1>
        
        {/* Subtítulo */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Porque la escuela es algo mas que tareas — opina sobre distintos temas relacionado a clases
        </p>
        
        {/* Características principales */}
        <div className=" space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          {[
            "📌 Ve lo que la gente opina",
            "📊 Lee y añade comentarios",
            "🔍 Filtra publicaciones por tus cursos de preferencia",
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-3 text-lg">{item.split(' ')[0]}</div>
              <p className="text-gray-700 text-left flex-1">{item.split(' ').slice(1).join(' ')}</p>
            </div>
          ))}
        </div>
        
        {/* Llamada a la acción minimalista */}
       <div className="mt-10">
          <Link
            to="/dashboard/publications"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Comenzar ahora
          </Link>
        </div>
        
        {/* Nota final */}
        <p className="mt-12 text-gray-500 text-sm">
          Mejorando la gestión desde 2025
        </p>
      </div>
    </div>
  );
};