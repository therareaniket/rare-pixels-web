import { useEffect, useState } from 'react'

export function useResponsiveCameraZ() {
    const [zMultiplier, setZMultiplier] = useState(1)

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth
            if (w < 480)       setZMultiplier(1)   //
            else if (w < 768)  setZMultiplier(1)   //
            else if (w < 1440)  setZMultiplier(1.6)
            else if (w < 1600) setZMultiplier(1.4)   //
            else if (w < 1800) setZMultiplier(1.3)   //
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    return zMultiplier
}