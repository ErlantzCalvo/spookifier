import "@/app/styles/spider.css"

interface SpiderProps {
    scale?:number, 
    hangHeight?: number, 
    left: number
}

export default function Spider({scale, hangHeight, left}: SpiderProps) {
    return (
        <div className="spider" style={{scale: scale || 1, left: left + '%'}}>
            <div className="spiderweb" style={{height: hangHeight || '200px'}}></div>
            <div className="body">
            </div>
            <div className="legs left">
                <div className="leg"></div>
                <div className="leg"></div>
                <div className="leg"></div>
            </div>
            <div className="legs right">
                <div className="leg"></div>
                <div className="leg"></div>
                <div className="leg"></div>
            </div>
        </div>)
}