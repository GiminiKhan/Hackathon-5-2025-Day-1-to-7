import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Header = () => {
    return (
        <header className="grid grid-cols-3 h-[100px] w-[1440px] bg-[#FBEBB5] ">
            <div className="h-full flex justify-center items-center">
                <nav>
                    <ul className="flex gap-16 justify-center items-center font-medium text-white">
                        <Link href="/">Home</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </ul>
                </nav>
            </div>
            <div className="h-full flex justify-center items-center">
                <nav>
                    <ul className="flex gap-10 justify-center items-center">
                        <Link href={'/'}><Image src={'/account.svg'} width={28} height={28} alt='icon'></Image></Link>
                        <Link href={'/'}><Image src={'/search.svg'} width={28} height={28} alt='icon'></Image></Link>
                        <Link href={'/'}><Image src={'/like.svg'} width={28} height={28} alt='icon'></Image></Link>
                        <Link href={'/'}><Image src={'/cart.svg'} width={28} height={28} alt='icon'></Image></Link>

                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header
