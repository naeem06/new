
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-svh w-svw gap-[30px] bg-black flex items-center justify-center">
      <div id="gauge1" className="h-[380px] w-[380px] flex items-center border-[5px] rounded-[50%] border-black justify-center">
        <div className="animate-circle">
          <Image src="/circle.png" alt="circle image" width={380} height={380} />
        </div>

        <div className="animate-needle items-center justify-center absolute h-[245px] w-[150px] flex-col">
          <div className="flex items-center justify-center">
            <div className="bg-red-700 border border-[#000000] h-[15px] w-[15px]"></div>
          </div>
          <br />
          <br />
          <div>
            <div className="flex items-center justify-center">
              <div className="bg-black h-[5px] w-[80px] rounded-[5px]"></div>
            </div>
            <br />
            <div className="flex items-center justify-center">
              <div className="bg-black h-[5px] w-[50px] rounded-[5px]"></div>
            </div>
            <br />
            <div className="flex items-center justify-center">
              <div className="bg-black h-[5px] w-[40px] rounded-[5px]"></div>
            </div>

            <div className="flex items-center justify-center ">
              <div className="bg-red-700 h-[8px] w-[140px] rounded-[5px] "></div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-black h-[5px] w-[40px] rounded-[5px]"></div>
            </div>
            <br />
            <div className="flex items-center justify-center">
              <div className="bg-black h-[5px] w-[50px] rounded-[5px]"></div>
            </div>
            <br />
            <div className="flex items-center justify-center">
              <div className="bg-black h-[5px] w-[80px] rounded-[5px]"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="gauge2" className="flex items-center justify-center">
        <div id="img1" className="h-[330px] w-[330px] animate-needle border-[5px] rounded-[50%] border-black">
          <Image src="/alt.png" alt="alt image" width={330} height={330} />
        </div>

        <div id="img2" className="h-[280px] w-[280px] absolute animate-gol">
          <Image src="/compus.png" alt="compass image" width={280} height={280} />
        </div>

        <div id="img3" className="h-[150px] w-[150px] absolute animate-spin">
          <Image src="/air.png" alt="air image" width={150} height={150} />
        </div>
      </div>
    </div>
  );
}











// export default function Home() {
//   return (
//     <div className="h-svh w-svw gap-[30px] bg-black flex items-center justify-center">

//       <div id="gauge1" className="h-[380px] w-[380px]  flex items-center border-[5px] rounded-[50%] border-black justify-center">
//         <div className="animate-circle">
//           <img src="circle.png" alt="image" />
//         </div>

//         <div className=" animate-needle items-center justify-center absolute h-[245px] w-[150px] flex-col">
          
//           <div className="flex items-center justify-center"><div className="bg-red-700 border border-[#000000] h-[15px] w-[15px]"></div></div>
//           <br />
//           <br />
//           <div> 
    
//           <div className="flex items-center justify-center"><div className="bg-black h-[5px] w-[80] rounded-[5px]"></div></div>
//           <br />
//           <div className="flex items-center justify-center"><div className="bg-black h-[5px] w-[50] rounded-[5px]"></div></div>
//           <br />
//           <div className="flex items-center justify-center"><div className="bg-black h-[5px] w-[40] rounded-[5px]"></div></div>
           
//           <div className="flex items-center justify-center "><div className="bg-red-700 h-[8px] w-[140px] rounded-[5px] "></div></div>
          
//           <div className="flex items-center justify-center"><div className="bg-black h-[5px] w-[40] rounded-[5px]"></div></div>
//           <br />
//           <div className="flex items-center justify-center"><div className="bg-black h-[5px] w-[50] rounded-[5px]"></div></div>
//           <br />
//           <div className="flex items-center justify-center"><div className="bg-black h-[5px] w-[80] rounded-[5px]"></div></div>
//           </div>
//         </div>
//       </div>
       
//        <div id="gauge2" className="flex items-center justify-center">

//         <div id="img1" className="h-[330px] w-[330px] animate-needle border-[5px]  rounded-[50%] border-black">
//         <img src="alt.png" alt="image" />
//         </div>

//         <div id="img2" className="h-[280px] w-[280px]  absolute animate-gol">
//          <img src="compus.png" alt="image" />
//         </div>

//         <div id="img3" className="h-[150px] w-[150px] absolute   animate-spin">
//           <img src="air.png" alt="image" />
//         </div>

//       </div>
//     </div>
  
//   );
// }

