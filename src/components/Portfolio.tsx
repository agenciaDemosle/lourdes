import React, { useState } from 'react';
import Section from './Section';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

// Datos de ejemplo - reemplaza con tus proyectos reales
const projects: Project[] = [
  {
    id: 1,
    title: 'Fumigación Estacionamiento',
    category: 'Comercial',
    image: '/images/services/fumigacion_estacionamiento.jpeg',
    description: 'Control de plagas en estacionamiento y áreas comunes de edificio comercial'
  },
  {
    id: 2,
    title: 'Desinfección COVID-19',
    category: 'Sanitización',
    image: '/images/services/covid.jpeg',
    description: 'Sanitización y desinfección profunda contra COVID-19'
  },
  {
    id: 3,
    title: 'Control Fitosanitario',
    category: 'Exterior',
    image: '/images/services/fitosanitario.jpeg',
    description: 'Tratamiento fitosanitario para árboles y plantas'
  },
  {
    id: 4,
    title: 'Control de Maleza',
    category: 'Exterior',
    image: '/images/services/control_maleza.jpeg',
    description: 'Eliminación y control de maleza en áreas verdes'
  }
];

const categories = ['Todos', 'Comercial', 'Sanitización', 'Exterior'];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Section id="portfolio" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Trabajos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proyectos de fumigación y control de plagas realizados con éxito
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => setSelectedProject(project)}
            >
              {/* Imagen del proyecto */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback si la imagen no carga
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="18" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E' + project.title + '%3C/text%3E%3C/svg%3E';
                  }}
                />
                {/* Overlay con información */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-semibold mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Info visible siempre */}
              <div className="p-4 bg-white">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de proyecto (opcional) */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23e5e7eb" width="800" height="600"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="24" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E' + selectedProject.title + '%3C/text%3E%3C/svg%3E';
                  }}
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold mb-3">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Portfolio;
