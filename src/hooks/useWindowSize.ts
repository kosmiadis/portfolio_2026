import { useCallback, useEffect, useState } from "react"

type WindowSizeStateObjectType = {
    width: number | undefined;
    height: number | undefined;
}

export function useWindowSize () {
    const [ windowSize, setWindowSize ] = useState<WindowSizeStateObjectType>({
        width: window ? window.innerWidth : undefined,
        height: window ? window.innerHeight : undefined, 
    })

    const resizeEventListener = useCallback((_e: any) => {
        setWindowSize({
            width: window ? window.innerWidth : undefined,
            height: window ? window.innerHeight : undefined
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', resizeEventListener)
        //cleanup function 
        return () => window.removeEventListener('resize', resizeEventListener);
    }, [])

    return { ...windowSize }
}