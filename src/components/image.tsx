import clsx from "clsx";
import { ImgHTMLAttributes, useState } from "react";

export function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [state, setState] = useState<'visible' | 'closed' | 'hidden'>('hidden')

  return (
    <div
      onClick={(e) => e.stopPropagation()} 
      className="w-full h-full"
    >
      {state !== 'hidden' && (
        <>
          <div
            onClick={() => setState('closed')} 
            onAnimationEnd={(e) => {
              if (e.animationName == 'FadeOut') return setState('hidden')
            }}
            className={clsx(
              "fixed inset-0 z-20 bg-black/90",
              state == 'visible' ? 'fade-in' : 'fade-out'
            )}
          />
          <div 
            className={clsx(
              "fixed z-30 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 duration-150",
              "w-80 lg:w-auto h-auto object-contain",
              state == 'visible' ? 'scale-in' : 'scale-out'
            )}  
          >
            <img
              className="w-full h-full object-contain" 
              src={props.src} 
              alt={props.alt} 
            />
          </div>
        </>
      )}
      <img
        onClick={(e) => {
          setState('visible')

          e.stopPropagation()
        }} 
        {...props} 
      />
    </div>
  )
}