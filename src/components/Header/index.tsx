import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderConteiter } from './styles'
import logoIgnite from '../../assets/logo-ignite.svg'

export function Header() {
  return (
    <HeaderConteiter>
      <img src={logoIgnite} alt="" />

      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderConteiter>
  )
}
