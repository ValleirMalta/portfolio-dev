import HeadInfor from '@/components/HeadInfor';
import Header from '@/components/Header';
import Link from 'next/link'
export default function pagReact(){
    return (
        <>
        <HeadInfor
          title='React'
          description='Components em react'
        />
        <main className="mainHome">
          <div className="containerHome">
            <Header />
            <h1>Pagina React - <Link href="/">Voltar</Link></h1>
          </div>
        </main>
        </>
    )
}