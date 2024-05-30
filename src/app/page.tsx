import Image from 'next/image';
import HomeImage from "public/images/home.jpg";

export default function Home() {
  return (
    <div>
      Home Page! 
      <div> 

        <Image src = {HomeImage} alt ="Car factory" fill  />
        
        
        </div>
      
      </div>
  );
}
