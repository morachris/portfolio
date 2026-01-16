import React from 'react';

const OverlayBorder: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="fixed w-screen h-screen bg-transparent flex items-center justify-center pointer-events-none overflow-hidden z-50">
      {/* SVG corregido: Eliminamos viewBox para que sea fluido y pegado a los bordes */}
      <svg
        className="absolute inset-0 min-w-screen min-h-screen z-0"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <mask id="holeMask">
            {/* Fondo blanco que cubre el 100% de la pantalla real */}
            <rect x="0" y="0" width="100vw" height="100vh" fill="white" />
            
            {/* Recorte Negro (El Agujero):
               Usamos coordenadas porcentuales menos un valor fijo (ej. 40px o 2.5vw) 
               para asegurar que el grosor del borde sea siempre el mismo y no se despegue.
            */}
            <rect 
              x="0.7em" 
              y="2em" 
              width="calc(100vw - 1.3em)" 
              height="calc(100vh - 4em)" 
              rx="10" 
              fill="black" 
            />
          </mask>
        </defs>

        {/* El fondo oscuro ahora sí llenará cada rincón de la pantalla sin importar el ratio */}
        <rect width="100%" height="100%" fill="#010007" mask="url(#holeMask)" />
      </svg>
      
      <span className="absolute font-semibold tracking-tight text-neutral-200 z-20
      top-[0.2em] text-[1em]">
        CHRISTOPHER MORA &nbsp; ● &nbsp; WEB DEVELOPER
      </span>

      <span className="absolute tracking-tight text-neutral-200 z-20 font-sans-alt 
      
      bottom-[0.2em] text-[1em]">
        © {currentYear}  &nbsp; ● &nbsp;  Made with  ❤  by Christopher Mora
      </span>
    </div>
  );
};

export default OverlayBorder;