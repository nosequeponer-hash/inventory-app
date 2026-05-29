// src/pages/Checkout.tsx
// Página de finalizar compra con formulario de dirección y pago.

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';

export function Checkout() {
  const { items, totalPrecio, vaciarCarrito } = useCarrito();
  const navigate = useNavigate();
  const [pedidoCompletado, setPedidoCompletado] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    telefono: '',
    tarjeta: '',
    caducidad: '',
    cvv: '',
  });
  const [errores, setErrores] = useState<Record<string, string>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrores(prev => ({ ...prev, [e.target.name]: '' }));
  }

  function validar() {
    const nuevosErrores: Record<string, string> = {};
    if (!form.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio';
    if (!form.direccion.trim()) nuevosErrores.direccion = 'La dirección es obligatoria';
    if (!form.ciudad.trim()) nuevosErrores.ciudad = 'La ciudad es obligatoria';
    if (!form.codigoPostal.trim()) nuevosErrores.codigoPostal = 'El código postal es obligatorio';
    if (!form.telefono.trim()) nuevosErrores.telefono = 'El teléfono es obligatorio';
    if (form.tarjeta.replace(/\s/g, '').length !== 16) nuevosErrores.tarjeta = 'Introduce 16 dígitos';
    if (!form.caducidad.trim()) nuevosErrores.caducidad = 'La caducidad es obligatoria';
    if (form.cvv.length !== 3) nuevosErrores.cvv = 'El CVV debe tener 3 dígitos';
    return nuevosErrores;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const erroresValidacion = validar();
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }
    setPedidoCompletado(true);
    vaciarCarrito();
  }

  if (items.length === 0 && !pedidoCompletado) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h1>
        <Link to="/productos" className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors">
          Ver productos
        </Link>
      </div>
    );
  }

  if (pedidoCompletado) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">¡Pedido realizado!</h1>
        <p className="text-gray-500 mb-2">Gracias por tu compra en Mercabuena.</p>
        <p className="text-gray-500 mb-8">Recibirás tu pedido en un plazo de 24-48h.</p>
        <button onClick={() => navigate('/')} className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-colors">
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link to="/carrito" className="text-green-700 hover:underline text-sm mb-6 inline-block">
        ← Volver al carrito
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Finalizar compra</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">

          {/* Dirección de envío */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">📦 Dirección de envío</h2>
            <div className="space-y-4">
              {[
                { name: 'nombre', label: 'Nombre completo', placeholder: 'Juan García López' },
                { name: 'direccion', label: 'Dirección', placeholder: 'Calle Mayor 123, 2ºA' },
                { name: 'ciudad', label: 'Ciudad', placeholder: 'Madrid' },
                { name: 'codigoPostal', label: 'Código postal', placeholder: '28001' },
                { name: 'telefono', label: 'Teléfono', placeholder: '600 000 000' },
              ].map(campo => (
                <div key={campo.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{campo.label}</label>
                  <input
                    type="text"
                    name={campo.name}
                    value={form[campo.name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={campo.placeholder}
                    className={`w-full border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-300 ${errores[campo.name] ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errores[campo.name] && <p className="text-red-500 text-xs mt-1">{errores[campo.name]}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Datos de pago */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">💳 Datos de pago</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Número de tarjeta</label>
                <input
                  type="text"
                  name="tarjeta"
                  value={form.tarjeta}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className={`w-full border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-300 ${errores.tarjeta ? 'border-red-400' : 'border-gray-200'}`}
                />
                {errores.tarjeta && <p className="text-red-500 text-xs mt-1">{errores.tarjeta}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Caducidad</label>
                  <input
                    type="text"
                    name="caducidad"
                    value={form.caducidad}
                    onChange={handleChange}
                    placeholder="MM/AA"
                    maxLength={5}
                    className={`w-full border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-300 ${errores.caducidad ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errores.caducidad && <p className="text-red-500 text-xs mt-1">{errores.caducidad}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={form.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength={3}
                    className={`w-full border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-300 ${errores.cvv ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errores.cvv && <p className="text-red-500 text-xs mt-1">{errores.cvv}</p>}
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl transition-colors text-lg">
            Confirmar pedido — {totalPrecio.toFixed(2)} €
          </button>
        </form>

        {/* Resumen */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm h-fit">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Resumen del pedido</h2>
          <div className="space-y-2 text-sm mb-4">
            {items.map(({ producto, cantidad }) => (
              <div key={producto.id} className="flex justify-between text-gray-600">
                <span>{producto.nombre} x{cantidad}</span>
                <span>{(producto.precio * cantidad).toFixed(2)} €</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 flex justify-between font-bold">
            <span>Total</span>
            <span>{totalPrecio.toFixed(2)} €</span>
          </div>
        </div>
      </div>
    </div>
  );
}
