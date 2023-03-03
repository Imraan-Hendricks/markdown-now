import Link from 'next/link';
import { Button } from '@/elements/Button';

export function Hero() {
  return (
    <section className='bg-gradient-to-r from-white via-white to-slate-400'>
      <div className='container mx-auto px-4 py-48 grid gap-24 animate-[fade-in_1000ms_ease]'>
        <div className='grid justify-center gap-4'>
          <h1 className='text-title text-center'>
            Welcome to <span className='text-slate-600'>Markdown</span> Now!
          </h1>
          <p className='text-subtitle text-gray-600 text-center mx-auto'>
            Write, Edit and Preview Markdown in Real Time with Markdown Now -
            Your Go-To Markdown Editor!
          </p>
          <div className='grid grid-cols-2 gap-2 w-max mx-auto'>
            <Link href={'/editor'}>
              <Button className='w-full'>Get Started</Button>
            </Link>
            <Link href={'https://github.com/Imraan-Hendricks/markdown-now'}>
              <Button className='w-full' variant='outlined'>
                Github
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <img
            className='w-full hidden xl:block rounded-sm overflow-hidden'
            src='/markdown-hero.jpg'
            alt='markdown-example'
          />
          <img
            className='w-full block xl:hidden rounded-sm overflow-hidden'
            src='/markdown-hero-responsive.jpg'
            alt='markdown-responsive-example'
          />
        </div>
      </div>
    </section>
  );
}
