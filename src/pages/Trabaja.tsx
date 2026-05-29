// src/pages/Trabaja.tsx
// Página de empleo en Mercabuena.

export function Trabaja() {
  const puestos = [
    { puesto: 'Repartidor/a', departamento: 'Logística', jornada: 'Completa', ubicacion: 'Madrid, Barcelona, Valencia' },
    { puesto: 'Responsable de almacén', departamento: 'Operaciones', jornada: 'Completa', ubicacion: 'Madrid' },
    { puesto: 'Atención al cliente', departamento: 'Customer Service', jornada: 'Parcial', ubicacion: 'Remoto' },
    { puesto: 'Desarrollador/a Frontend', departamento: 'Tecnología', jornada: 'Completa', ubicacion: 'Remoto' },
    { puesto: 'Gestor/a de categorías', departamento: 'Compras', jornada: 'Completa', ubicacion: 'Madrid' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Trabaja con nosotros 💼</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          En Mercabuena buscamos personas con ganas de crecer. Si te apasiona hacer las cosas bien y quieres formar parte de un equipo joven y dinámico, este es tu sitio.
        </p>
      </div>

      {/* Valores */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {[
          { emoji: '🌱', titulo: 'Crecimiento', texto: 'Apostamos por el desarrollo profesional de nuestro equipo.' },
          { emoji: '🤝', titulo: 'Equipo', texto: 'Trabajamos juntos, nos apoyamos y celebramos los logros.' },
          { emoji: '⚖️', titulo: 'Conciliación', texto: 'Horarios flexibles y posibilidad de trabajo en remoto.' },
        ].map(v => (
          <div key={v.titulo} className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm">
            <div className="text-4xl mb-3">{v.emoji}</div>
            <h3 className="font-bold text-gray-900 mb-2">{v.titulo}</h3>
            <p className="text-sm text-gray-500">{v.texto}</p>
          </div>
        ))}
      </div>

      {/* Ofertas */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Ofertas actuales</h2>
      <div className="space-y-4 mb-12">
        {puestos.map(p => (
          <div key={p.puesto} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">{p.puesto}</h3>
              <div className="flex gap-3 mt-1 flex-wrap">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{p.departamento}</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{p.jornada}</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">📍 {p.ubicacion}</span>
              </div>
            </div>
            <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-2 rounded-lg transition-colors flex-shrink-0">
              Inscribirme
            </button>
          </div>
        ))}
      </div>

      {/* Contacto */}
      <div className="bg-green-50 rounded-xl p-8 text-center border border-green-100">
        <h2 className="text-xl font-bold text-gray-900 mb-2">¿No encuentras tu puesto?</h2>
        <p className="text-gray-500 mb-4">Mándanos tu CV y te tendremos en cuenta para futuras vacantes.</p>
        <a href="mailto:empleo@mercabuena.es" className="bg-green-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-green-800 transition-colors inline-block">
          Enviar candidatura espontánea
        </a>
      </div>
    </div>
  );
}
