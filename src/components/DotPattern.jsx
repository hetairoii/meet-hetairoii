import React from 'react';

const DotPattern = ({ 
    color = "#404040", // Color de los puntos (gris oscuro por defecto)
    opacity = 0.3,     // Opacidad general
    size = 1,          // Radio de los puntos
    spacing = 20,      // Espacio entre puntos
    className = ""     // Clases extra para posicionamiento
}) => {
    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* 1. Definimos el patrón de un solo punto */}
                    <pattern 
                        id="dotPattern" 
                        x="0" 
                        y="0" 
                        width={spacing} 
                        height={spacing} 
                        patternUnits="userSpaceOnUse"
                    >
                        <circle cx={size} cy={size} r={size} fill={color} />
                    </pattern>

                    {/* 2. Definimos una máscara circular para el desvanecimiento */}
                    <mask id="fadeMask">
                        {/* El blanco muestra, el negro oculta */}
                        <radialGradient id="fadeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" stopColor="white" stopOpacity="1" />
                            <stop offset="100%" stopColor="black" stopOpacity="0" />
                        </radialGradient>
                        <rect width="100%" height="100%" fill="url(#fadeGradient)" />
                    </mask>
                </defs>

                {/* 3. Rectángulo que llena la pantalla usando el patrón y la máscara */}
                <rect 
                    width="100%" 
                    height="100%" 
                    fill="url(#dotPattern)" 
                    mask="url(#fadeMask)" 
                    style={{ opacity: opacity }}
                />
            </svg>
        </div>
    );
};

export default DotPattern;