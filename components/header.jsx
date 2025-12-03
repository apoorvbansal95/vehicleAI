import React from 'react'
import {

    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowLeft, CarFront, Heart, Layout } from 'lucide-react'

const Header = async ({isAdminPage=false}) => {
    const isAdmin=false
    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
            <nav  className="mx-auto px-4 py-4 flex items-center justify-between">
                <Link href={isAdminPage?'/admin':"/"} className='flex'>
                <Image src={'/logo.png'}
                alt='vehicleql'
                width={200}
                height={60}
                className='h-12 w-auto object-contain'
                />
                {isAdminPage&&(<span className='text-xs font-extralight'>admin</span>)}
                </Link>



                {/* Action buttons */}
                <div className="flex items-center space-x-4">
                    {isAdminPage ? (<Link href='/'>
                        <Button variant='outline'  className="flex items-center gap-2">
                            <ArrowLeft size={18} />
                            <span className='hidden md:inline'> Back to App</span>

                        </Button>
                    </Link>) : (
                        <SignedIn>
                            <Link href='/saved-cars'>
                                <Button>
                                    <Heart size={18} />
                                    <span className='hidden md:inline'> Saved Cars</span>

                                </Button>
                            </Link>

                            {!isAdmin ? (<Link href='/reservations'>
                                <Button variant='outline'>
                                    <CarFront size={18} />
                                    <span className='hidden md:inline'> My resevations</span>
                                </Button>
                            </Link>) : (

                                <Link href='/admin'>
                                    <Button variant='outline'>
                                        <Layout size={18} />
                                        <span className='hidden md:inline'> Admin Portal</span>
                                    </Button>
                                </Link>)}
                        </SignedIn>)}

                        <SignedOut>
                            <SignInButton forceRedirectUrl='/'>
                                <Button variant="outline">
                                    Login
                                </Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>

                </div>



            </nav>
        </header>
        // <header>
        //     <SignedOut>
        //         <SignInButton />
        //         <SignUpButton>
        //             <button className="text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
        //                 Sign Up
        //             </button>
        //         </SignUpButton>
        //     </SignedOut>
        //     <SignedIn>
        //         <UserButton />
        //     </SignedIn>
        // </header>
    )
}
export default Header