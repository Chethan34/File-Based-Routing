import Image from 'next/image';
import ScaleImage from 'public/images/scale.jpg';


export default function ScalePage() {
    return (
        <div>
            <Image src = {ScaleImage} alt ="scale" />
        </div>
    )
}