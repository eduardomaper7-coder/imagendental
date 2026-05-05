import { FaStethoscope, FaMagic, FaAward, FaUsers } from 'react-icons/fa'

const features = [
  {
    icon: <FaStethoscope />,
    title: 'Valoración y diagnóstico personalizado',
    text: 'Analizamos tu salud bucodental en detalle para ofrecerte el tratamiento más adecuado en nuestra clínica de Puente de Vallecas.',
  },
  {
    icon: <FaMagic />,
    title: 'Tecnología avanzada',
    text: 'Utilizamos equipos modernos para realizar tratamientos más precisos, cómodos y eficaces.',
  },
  {
    icon: <FaAward />,
    title: 'Profesionales cualificados',
    text: 'Contamos con un equipo especializado en odontología para cuidar tu salud y estética dental con total garantía.',
  },
  {
    icon: <FaUsers />,
    title: 'Atención cercana',
    text: 'Te acompañamos en todo el proceso para que te sientas cómodo y seguro en cada visita.',
  },
]

const HowWeWork = () => {
  return (
    <section className="bg-[#f4f8ff] py-24">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
            ¿Cómo trabajamos?
          </h2>

          <p className="mt-4 text-neutral-600">
            En IMAGEN DENTAL PABLO NERUDA cuidamos tu salud bucodental desde el primer momento
          </p>
        </div>

        {/* Caja principal */}
        <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(37,99,235,0.08)] md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            
            {features.map((item, index) => (
              <div key={index} className="flex gap-5">
                
                {/* Icono */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xl text-white">
                  {item.icon}
                </div>

                {/* Texto */}
                <div>
                  <h3 className="text-lg font-extrabold text-blue-700">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default HowWeWork