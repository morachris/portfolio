import React from 'react';

const OverlayBorder: React.FC = () => {
  return (
    <div className="fixed w-screen h-screen bg-transparent flex items-center justify-center pointer-events-none overflow-hidden z-20">
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
              x="2vw" 
              y="3.5vh" 
              width="calc(100% - 4vw)" 
              height="calc(100% - 7vh)" 
              rx="10" 
              fill="black" 
            />
          </mask>
        </defs>

        {/* El fondo oscuro ahora sí llenará cada rincón de la pantalla sin importar el ratio */}
        <rect width="100%" height="100%" fill="#010007" mask="url(#holeMask)" />
      </svg>
      
      {/* <span className="absolute font-semibold tracking-tight text-white z-20
      top-0 text-[1.2em]">
        CHRISTOPHER MORA &nbsp; ● &nbsp; WEB DEVELOPER
      </span> */}

      <span className="absolute tracking-tight text-white z-20 font-sans-alt 
      
      bottom-1 text-[1em]">
        © 2025  &nbsp; | &nbsp;  Made with  ❤  by Christopher Mora
      </span>
    </div>
  );
};

export default OverlayBorder;