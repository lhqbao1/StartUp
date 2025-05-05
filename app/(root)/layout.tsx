import NavBar from "../components/navbar"
import { Work_Sans } from 'next/font/google';


const WorkSans = Work_Sans({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-work-sans',
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className={WorkSans.variable}>
            <div className="font-sans">
                <NavBar />
                {children}
            </div>
        </main>
    )

}