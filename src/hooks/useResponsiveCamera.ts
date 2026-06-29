import { useEffect, useState } from 'react'

export function useResponsiveCameraZ() {
    const [zMultiplier, setZMultiplier] = useState(1)

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth
            if (w < 480)       setZMultiplier(1)   //
            else if (w < 768)  setZMultiplier(1)   //
            else if (w < 1280) setZMultiplier(1)   //
            else               setZMultiplier(1)   // 1920
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    return zMultiplier
}