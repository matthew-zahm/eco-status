import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div className='fixed left-0 top-0 w-full h-14 text-slate-900 shadow-none border-b-2 border-b-slate-300' >
      <div className='w-full max-h-14 min-h-14 border-b-2 border-b-slate-300 p-1 pl-2 pr-2'>
        <div className='flex flex-row w-full justify-between'>
          <div className='flex w-1/4'>
            <Link href={"/"} className='flex flex-row w-fit items-center h-12'>
              <Image
                className='h-10 w-10 cursor-pointer'
                width={40}
                height={40}
                src="/Eco-Status.png"
                alt='Eco Status'
              />
              <p className='text-eco-green pl-4 w-fit text-2xl font-bold font-sans mobile-hide cursor-pointer'>
                Eco Status
              </p>
            </Link>
          </div>
          <div className='flex w-1/2 justify-around items-center'>
            <div className='flex'>
              <div className='flex bg-eco-green-light p-1 pl-5 pr-5 rounded-3xl'>
                <p className='m-2 mobile-hide max-w-full bg-eco-green-light'>
                  Search:
                </p>
                <input
                  className='border-2 border-slate-300 rounded-lg h-10 p-2 focus:outline-none'
                  type='text'
                />
              </div>
            </div>
          </div>
          <div className='flex w-1/4 items-center flex-row-reverse'>
            <p className='bg-eco-green-light p-2 pr-5 pl-5 rounded-2xl border-2 border-slate-300 cursor-pointer'>
              Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
