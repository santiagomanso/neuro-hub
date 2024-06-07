'use client';
import React from 'react';
import { Assets } from '@/assets';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function LandingCarousel() {
  const sectionRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section
      className='w-full py-12 md:py-24 lg:py-32'
      id='home'
      ref={sectionRef}
    >
      <div className='container'>
        <Carousel className='w-full'>
          <CarouselContent>
            <CarouselItem>
              <div className='grid gap-4 px-4 md:grid-cols-2 md:gap-16 items-center'>
                <div>
                  <div className='inline-block rounded-lg bg-gray-100 border-[1px] dark:border-gray-700/70 px-3 py-1 text-sm dark:bg-gray-800'>
                    Notifications
                  </div>
                  <h2 className='mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                    Notify upon upcomming session
                  </h2>
                  <p className='mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                    Keep your patientes informed about the status of their next
                    session wash with automated notifications.
                  </p>
                </div>
                <Image
                  src={Assets.images.EmployeeLaptop}
                  alt='notification'
                  className='w-full h-1/2 overflow-hidden rounded-md object-cover'
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='grid gap-4 px-4 md:grid-cols-2 md:gap-16 items-center'>
                <div>
                  <div className='inline-block rounded-lg bg-gray-100 border-[1px] dark:border-gray-700/70 px-3 py-1 text-sm dark:bg-gray-800'>
                    Managment
                  </div>
                  <h2 className='mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                    Registration and Management
                  </h2>
                  <p className='mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                    <span className='font-semibold text-gray-600 dark:text-gray-200'>
                      Registration:
                    </span>{' '}
                    enter your patient&apos;s information such as name, age,
                    medical history.{' '}
                    <span className='font-semibold text-gray-600 dark:text-gray-200'>
                      Management:
                    </span>{' '}
                    Tools to organize, search, and access patient profiles
                    easily.
                  </p>
                </div>
                <Image
                  src={Assets.images.PatientForm}
                  alt='Wash Bikes'
                  className='w-full h-1/2 overflow-hidden rounded-md object-cover'
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='grid gap-4 px-4 md:grid-cols-2 md:gap-16 items-center'>
                <div>
                  <div className='inline-block rounded-lg bg-gray-100 border-[1px] dark:border-gray-700/70 px-3 py-1 text-sm dark:bg-gray-800'>
                    Testing
                  </div>
                  <h2 className='mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]'>
                    Testing and Results
                  </h2>
                  <p className='mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                    Access a variety of CFP and SATEPSI-approved tests. Enjoy an
                    intuitive interface for in-person or remote administration.
                    Automate scheduling and reminders to streamline your
                    workflow. Enhance your practice with our efficient,
                    user-friendly platform.
                  </p>
                </div>

                <Image
                  src={Assets.images.Test}
                  width='340'
                  height='240'
                  alt='Before'
                  className='w-full h-1/2 overflow-hidden rounded-md object-cover'
                />
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
