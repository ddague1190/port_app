import Overlay from "../../components/three/useScrollPractice/Overlay"
import VerticalScrollCanvas from "../../components/three/useScrollPractice/VerticalScrollCanvas"

export default function Calculator () {
    return(
    <div className="w-screen h-screen overscroll-none bg-green-200">
        <VerticalScrollCanvas/>
        <Overlay/>
    </div>
    )
}