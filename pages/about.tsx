//TODO: crear una pagina about para ir a la ruta del home

import Link from "next/link"
import MainLayout from "../components/layouts/MainLayout"



const About = () => {
  return (
    <MainLayout>
      <div className={'description'}>
          <p>
            Estas en About
          </p>
          
          <div className={'linkContainer'}>
            <p className={'link'}>
              Ir a <Link href="/">Home</Link>
            </p>
          </div>
          
        </div>
    </MainLayout>

  )
}

export default About
