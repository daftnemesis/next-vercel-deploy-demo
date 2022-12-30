import { ActiveLink } from "./ActiveLink";
import styles from './Navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export default function Navbar() {
  return (
    <nav className={styles.menu}>
      {/* <ActiveLink text='Home' href="/" />
      <ActiveLink text='About' href="/about" />
      <ActiveLink text='Contact' href="/contact" /> */}

      {
        menuItems.map((link) => (
          <ActiveLink key={link.href} text={link.text} href={link.href} />
        ))
      }

    </nav>
  )
}