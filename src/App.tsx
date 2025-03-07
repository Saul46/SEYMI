import React, { useState } from 'react';
import {
  Truck,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  DollarSign,
  Package,
  Drill,
  Handshake,
} from 'lucide-react';

function App() {
  const services = [
    {
      icon: Truck,
      title: 'Venta y Renta de Montacargas',
      description:
        'Amplia gama de montacargas nuevos y usados para satisfacer sus necesidades.',
      additionalInfo:
        'Ofrecemos una amplia variedad de montacargas para diferentes necesidades industriales.',
      image: '/src/imgs/montacargas.jpg',
    },
    {
      icon: Shield,
      title: 'Programas de Mantenimiento Preventivo y Correctivo',
      description:
        'Servicio técnico especializado para mantener su equipo en óptimas condiciones.',
      additionalInfo:
        'Mantenimiento preventivo y correctivo. Técnicos certificados. Repuestos originales. Diagnóstico computarizado. Atención de emergencias 24/7.',
      image: '/src/imgs/mantenimiento.jpg',
    },
    {
      icon: DollarSign,
      title: 'Venta de Refacciones y Componentes de Maquinaria',
      description:
        'Los mejores productos al menor precio y la mas alta calidad',
      additionalInfo:
        'Amplio inventario de refacciones originales y componentes de alta calidad para todo tipo de maquinaria industrial.',
      image: '/src/imgs/refacciones.jpg',
    },
  ];

  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-[#722F37] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Servicios Electromecánicos y Métodos Integrales
              </h1>
              <p className="text-xl mb-8">
                Ofrecemos servicios de alta calidad en venta, renta y
                mantenimiento de montacargas para optimizar sus operaciones.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/src/imgs/Logo 1.png"
                alt="SEYMI Logo"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#722F37]">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <img
              src="/src/imgs/Logo 1.png"
              className="w-full h-48 object-contain"
            />
            <img
              src="/src/imgs/Logo 2.0.jpg"
              className="w-full h-48 object-contain"
            />
            <img
              src="/src/imgs/Logo 3.png"
              className="w-full h-48 object-contain"
            />
            <img
              src="/src/imgs/Logo 4.0.jpg"
              className="w-full h-48 object-contain"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                style={{ height: hoveredService === index ? '500px' : '200px' }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="p-6 h-full">
                  {hoveredService === index ? (
                    <div className="flex flex-col h-full">
                      <service.icon className="w-12 h-12 text-[#722F37] mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        {service.title}
                      </h3>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <p className="text-gray-700">{service.additionalInfo}</p>
                    </div>
                  ) : (
                    <div>
                      <service.icon className="w-12 h-12 text-[#722F37] mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div
              className="relative bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              style={{ height: hoveredService === 3 ? '500px' : '200px' }}
              onMouseEnter={() => setHoveredService(3)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="p-6 h-full">
                <Shield className="w-12 h-12 text-[#722F37] mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Mantenimientos Industriales
                </h3>
                <p className="text-gray-600">
                  Servicios especializados de mantenimiento industrial.
                </p>
              </div>
            </div>
            <div
              className="relative bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              style={{ height: hoveredService === 4 ? '500px' : '200px' }}
              onMouseEnter={() => setHoveredService(4)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="p-6 h-full">
                <Drill className="w-12 h-12 text-[#722F37] mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Tratamiento y Soluciones para Pisos Industriales
                </h3>
                <p className="text-gray-600">
                  Venta de pintura epóxica, Sello epóxico, Piso epóxico,
                  Tratamiento y reparación de juntas de concreto
                </p>
              </div>
            </div>
            <div
              className="relative bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              style={{ height: hoveredService === 5 ? '500px' : '200px' }}
              onMouseEnter={() => setHoveredService(5)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="p-6 h-full">
                <Package className="w-12 h-12 text-[#722F37] mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Fabricación y Colocación de Racks Industriales
                </h3>
                <p className="text-gray-600">
                  Soluciones flexibles de alquiler para proyectos temporales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#722F37]">
            Nuestras Especialidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">
                Montacargas eléctricos
              </h3>
              <h3 className="text-xl font-semibold mb-3">
                Montacargas de combustión
              </h3>
              <h3 className="text-xl font-semibold mb-3">
                Patines hidráulicos
              </h3>
              <h3 className="text-xl font-semibold mb-3">Baterías</h3>
              <h3 className="text-xl font-semibold mb-3">
                Patinetas eléctricas
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Cargadores</h3>
              <h3 className="text-xl font-semibold mb-3">Cambia pilas</h3>
              <h3 className="text-xl font-semibold mb-3">Rampas</h3>
              <h3 className="text-xl font-semibold mb-3">Cortinas</h3>
              <h3 className="text-xl font-semibold mb-3">
                Colocación de pisos epóxicos
              </h3>
              <h3 className="text-xl font-semibold mb-3">
                Fabricación y colocación de racks industriales
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#722F37]">
            Marcas con las que SEYMI colabora:
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/src/imgs/marcas.png"
              alt="Marcas colaboradoras"
              className="block mx-auto max-w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#722F37]">
            Cartera de clientes:
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/src/imgs/clientesSEYMI.png"
              alt="Clientes SEYMI"
              className="block mx-auto max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#722F37]">
            ¿Por qué Elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { text: 'Personal Certificado', icon: CheckCircle },
              { text: 'Comprometidos', icon: Handshake },
              { text: 'Cobertura Nacional', icon: MapPin },
              { text: 'Garantía de Calidad', icon: Shield },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow"
              >
                <feature.icon className="w-6 h-6 text-[#722F37]" />
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-[#722F37] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>55-44-21-49-13</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>seymi.rey@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>
                    Fresno 22, San Jose Puente Grande, 54834 Cuautitlan, México
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horario</h3>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Lunes a Viernes: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
