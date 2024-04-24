import { GetImg } from "./Img.jsx"

export function SeasonImgs() {


    return <div className="season-imgs">
        
        <GetImg imgSrc='autumn'/>
        <GetImg imgSrc='spring'/>
        <GetImg imgSrc='summer'/>
        <GetImg imgSrc='winter'/>
    </div>
}