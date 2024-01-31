import HeadInfor from '@/components/HeadInfor';
import Link from 'next/link'
export default function pagReact(){
    return (
        <>
        <HeadInfor
          title='React'
          description='Components em react'
        />
        <h1>Pagina React - <Link href="/">Voltar</Link></h1>
        </>
    )
}