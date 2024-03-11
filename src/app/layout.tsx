import './global.css'
import Link from 'next/link'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
	<>
	    <body>
            <header>
            <nav>
	    <ul class="menu">
	    <li><Link href="/">
	    <div class="img-wrapper">
	    <img src="theaveragelab.svg"/>
	    </div>	    

	    </Link></li>	    
	    <li><Link href="/about">About</Link></li>
	    <li><Link href="/team">Team</Link></li>
	    <li><Link href="/research">Research</Link></li>
	    <li><Link href="/events">Events</Link></li>
	    <li><Link href="/press">Press</Link></li>
	    </ul>
            </nav>
            </header>
            <main>
            {children}
        </main>
	    </body>
	    </>
    )
}
