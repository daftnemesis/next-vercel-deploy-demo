import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'


export default function Home() {
  return (
    <MainLayout>
      <div className={'description'}>
          <p>
            Estas en Home
          </p>
          
          <div className={'linkContainer'}>
            <p className={'link'}>
              Ir a <Link href="/about">About</Link>
            </p>
          </div>
          
        </div>
    </MainLayout>
  )
}
