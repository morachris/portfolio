import React from 'react';

const OverlayBorder: React.FC = () => {
  return (
    <div className="fixed w-screen h-screen bg-transparent flex items-center justify-center pointer-events-none">
      {/* SVG mask: blanco = visible, negro = recorte (el "agujero") */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <mask id="holeMask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            {/* Ajusta x,y,width,height y rx para cambiar tamaño y radio del rectángulo interior */}
            <rect x="1%" y="3.5%" width="98%" height="93%" rx="0.5" ry="0.5" fill="black" />
          </mask>
        </defs>

        {/* Rectángulo oscuro con el "agujero" aplicado por la máscara */}
        <rect width="100%" height="100%" fill="#010007" mask="url(#holeMask)" />
      </svg>

      <span className="fixed right-20 top-1 text-2xl font-semibold tracking-tight text-white z-20">CHRISTOPHER MORA</span>
      <span className="fixed right-20 top-7 text-2xl font-semibold tracking-tight text-[#010007] z-20">WEB DEVELOPER</span>
      <span className="fixed m-auto bottom-0 text-xl tracking-tight text-white z-20 font-sans-alt">
        © 2025  &nbsp; | &nbsp;  Made with  ❤  by Christopher Mora
      </span>
    </div>
  );
};

export default OverlayBorder;