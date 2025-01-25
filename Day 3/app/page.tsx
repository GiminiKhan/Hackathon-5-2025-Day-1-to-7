import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';

// bg-[#FBEBB5]
export default function Home() {
  return (
    <>
      <header className="grid grid-cols-3 w-full h-[100px] bg-[#FBEBB5]">
        <div><Header/></div>
      </header>

      <section className='w-full h-[900px] bg-[#FBEBB5] flex justify-center pl-14 items-center'>
        <div className='flex flex-col gap-8 justtify-center items-start font-medium'>
          <h1 className='text-black text-[60px] font-medium w-[440px] h-[129px]'>Rocket single  <br />seater</h1>

          <button className="text-black border-b-2 border-b-neutral-950 w-[121px] h-[49px]">Shop Now</button>
        </div>

        <Image src={'/rocket.png'} width={853} height={1000} alt='image' />


      </section>
      <section className='flex w-full h-[672px] bg-[#f4f4f4] justify-center items-center gap-32'>
        <div className='w-[500px] h-[500px] flex flex-col'>
          <Image src={'/granite-table.png'} width={500} height={500} className='p-0' alt='image' />
          <div className='flex flex-col gap-6 relative bottom-40 left-10'>
            <h1 className='text-black text-4xl font-medium'>Side table</h1>
            <Link href={'/'}> <button className='border-b-2 border-b-neutral-950 h-12 font-medium text-black text-2xl'>
              View More</button></Link>

          </div>
        </div>
        <div className='w-[500px] h-[500px]  flex flex-col'>
          <Image src={'/cloud-sofa.png'} width={500} height={500} className='p-0' alt='image' />
          <div className='flex flex-col gap-6 relative bottom-32 left-10'>
            <h1 className='text-black text-4xl font-medium'>Side table</h1>
            <Link href={'/'}> <button className='border-b-2 border-b-neutral-950 h-12 font-medium text-black text-2xl'>
              View More</button></Link>

          </div>
        </div>


      </section>
      <section className='flex w-full h-[877px] bg-[#ffffff] flex-col items-center'>
        <h1 className='text-black font-medium text-4xl pt-16 pb-8'>Top Picks For You</h1>
        <p className='text-black text-[#9f9f9f] font-medium'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        <div className='flex items-center justify-center gap-12 pt-16'>
          <div className='flex flex-col w-72 h-96 justify-center'>
            <div className='w-[300px] h-[300px] flex justify-center items-center'>
              <Image src={'/sofa_2.png'} width={400} height={400} alt='image' />
            </div>

            <h1 className='text-black'>Trenton modular sofa_3</h1>
            <h1 className='text-black font-medium text-2xl pt-2'>Rs. 25,000.00</h1>


          </div>
          <div className='flex flex-col w-72 h-96 justify-center '>
            <div className='w-[300px] h-[300px] flex justify-center items-center'> <Image src={'/dinner-table.png'} alt='image' width={300} height={300} /></div>

            <h1 className='text-black'>Granite dining table with dining chair</h1>
            <h1 className='text-black font-medium text-2xl pt-2'>Rs. 25,000.00</h1>


          </div>
          <div className='flex flex-col w-72 h-96 justify-center '>
            <div className='w-[300px] h-[300px] flex justify-center items-center'>
              <Image src={'/stool.png'} width={400} height={400} alt='image' />
            </div>
            <h1 className='text-black'>Outdoor bar table and stool</h1>
            <h1 className='text-black font-medium text-2xl pt-2'>Rs. 25,000.00</h1>


          </div>
          <div className='flex flex-col w-72 h-96 justify-center'>
            <div className='w-[300px] h-[300px] flex justify-center items-center'>
              <Image src={'/mirror.png'} width={400} height={400} alt='image' />
            </div>
            <h1 className='text-black'>Plain console with teak mirror</h1>
            <h1 className='text-black font-medium text-2xl pt-2'>Rs. 25,000.00</h1>



          </div>

        </div>
        <Link href={'/'}><button className='relative top-24 text-black text-xl font-medium h-16 border-b-2 border-black'>View More</button></Link>


      </section>
      <section className='flex w-full h-[777px] bg-[#FFF9E5] justify-center items- gap-32'>
        <Image src={'/asgaard.png'} width={700} height={700} alt='image' />
        <div className='flex flex-col gap-6 items-center justify-center'>
          <h1 className='text-black text-2xl font-medium'>New Arrivals</h1>
          <h1 className='text-black text-5xl font-bold pb-8'>Asgaard sofa</h1>
          <Link href={'/'}><button className='border-2 border-black w-64 h-16 font-medium text-black text-xl'>Order Now</button></Link>
        </div>

      </section>

      <section className='flex flex-col w-full h-[844px] bg-[#FFFfff] items-center'>
        <h1 className='text-black font-medium text-4xl pt-16 pb-8'>Our Blogs</h1>
        <p className='text-black text-[#9f9f9f] font-medium'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        <div className='flex justify-center gap-12 pt-16 items-center'>
          <div className='flex flex-col w-72 h-96 justify-center items-center'>
            <Image src={'/blog-1.png'} width={400} height={400} alt='blog' />
            <h1 className='pt-8 text-black'>Going all-in with millennial design</h1>
            <Link href={'/'}><button className='text-black text-2xl font-medium border-b-2 border-black h-12'>Read More</button></Link>
            <Image src={'/time.png'} width={200} height={100} className='pt-4' alt='blog' />
          </div>
          <div className='flex flex-col w-72 h-96 justify-center items-center'>
            <Image src={'/blog-2.png'} width={400} height={400} alt='blog' />
            <h1 className='pt-8 text-black'>Going all-in with millennial design</h1>
            <Link href={'/'}><button className='text-black text-2xl font-medium border-b-2 border-black h-12'>Read More</button></Link>
            <Image src={'/time.png'} width={200} height={100} className='pt-4' alt='blog' />
          </div>
          <div className='flex flex-col w-72 h-96 justify-center items-center'>
            <Image src={'/blog-3.png'} width={400} height={400} alt='blog' />
            <h1 className='pt-8 text-black'>Going all-in with millennial design</h1>
            <Link href={'/'}><button className='text-black text-2xl font-medium border-b-2 border-black h-12'>Read More</button></Link>
            <Image src={'/time.png'} width={200} height={100} className='pt-4' alt='icon' />
          </div>

        </div>
        <Link href={'/'}><button className='relative top-32 text-black text-xl font-medium h-16 border-b-2 border-black'>View All Post</button></Link>


      </section>
      <section className='flex flex-col w-full h-[450px] justify-center items-center gap-8 bg-bg-pattern bg-cover bg-center bg-no-repeat'>
        <h1 className='font-bold text-black text-6xl'>Our Instagram</h1>
        <p className=' text-black text-xl'>Follow our store on Instagram</p>
        <Link href={'/'}><button className='text-black text-xl w-64 h-16 rounded-[50px] drop-shadow-md bg-[#FAF4F4]'>Follow Us</button></Link>

      </section>


    </>
  );
}
