import { useEffect, useState } from 'react'

export function useResponsiveCameraZ() {
    const [zMultiplier, setZMultiplier] = useState(1)
    const [xOffset, setXOffset] = useState(0)

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth
            if (w < 480)         { setZMultiplier(1); setXOffset(0) }
            else if (w < 1200)   { setZMultiplier(1.9); setXOffset(0) }
            else if (w < 1360)   { setZMultiplier(1.05); setXOffset(0.2) }
            else if (w < 1440)   { setZMultiplier(1.1); setXOffset(0) }
            else if (w < 1600)   { setZMultiplier(1.05); setXOffset(0) }
            else if (w < 1800)   { setZMultiplier(1.2); setXOffset(0) }
        }
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    return { zMultiplier, xOffset }
}