import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

export default function Contact() {

  return (

    <MainLayout>
      <div className={'description'}>
          <p>
            Estas en Contact
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