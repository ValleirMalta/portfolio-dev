import HeadInfor from '@/components/HeadInfor';
import Link from 'next/link'
export default function pageEfeitosCss(){
    return (
        <>
        <HeadInfor
          title='React'
          description='Efeitos css'
        />
        
      <main className="mainHome">
        <div className="containerHome">
        
          <h1>Efeito CSS - <Link href="/">Voltar</Link></h1>
        </div>
      </main>
        
        </>
    )
}