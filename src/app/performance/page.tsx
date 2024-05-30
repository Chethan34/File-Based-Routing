import Image from 'next/image';
import PerImage from 'public/images/performance.jpg';

export default function PerformancePage() {
    return (
    <div>
        <div>
        <Image src = {PerImage} alt="performance page"/>
        </div>
        
    </div>


    );
}