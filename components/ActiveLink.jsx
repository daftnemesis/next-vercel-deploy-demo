import Link from "next/link"
import { useRouter } from "next/router"

//Se creara un componente para crear un active link y se muestre de una forma
//diferente el link el cual este en la ruta actual

export const ActiveLink = ({text, href}) => {
  //Se hace uso del custom hook de next llamado useRouter, el cual se usa 
  //cuando se quiere accesar al router desde cualquier funcion, esto nos 
  // permite acceder a los datos de la ruta en la cual es usado, en este caso
  //el href donde nos encontramos

  //una de las propiedades que nos devuelve el useRouter es el asPath, el cual
  //contiene la ruta actual
  const { asPath } = useRouter()
  

  const styles = {
    color: '#0070f3',
    textDecoration: 'underline'
  }

  return (
      <Link href={href} legacyBehavior>
        
        <a style={ asPath === href ? styles : null }>{text}</a>
      </Link>
  )
}
