import './globals.css';
import Link from 'next/link';
import { inter } from './fonts/fonts';

 
export default function RootLayout({children,}) {

  const rutas = {
    inicio :[
      '/',
      'Ir a inicio'
    ],
    home :[
      '/home',
      'Ir a home'
    ],
  }

  return (
    <html lang="en">
      <body>
        {/* <h1 className={`text-4xl ${inter.className} text-center italic shadow-text-` }>DinoQuiz</h1> */}
        {/* <nav className='flex justify-center items center gap-4 text-2xl h-10 bg-blue-950 mb-10 '>
          {
            Object.entries(rutas).map((item , index)=>{
              return(
                <div key={index} className='bg-blue-800 p-1 rounded-2xl'>
                  <Link href={item[1][0]}>
                  <p>{item[1][1]}</p>
                  </Link>
                </div>
              )
            })
          }
        </nav> */}
        {children}
        </body>
    </html>
  );
}