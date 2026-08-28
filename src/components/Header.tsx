import { NavLink } from 'react-router-dom'
import { SheepIcon } from './Sheep'

/** 导航项：路由路径。 */
const links = [
  { label: '首页', to: '/' },
  { label: '作品集', to: '/projects' },
  { label: '联系', to: '/contact' },
]

/** 顶部导航栏：左侧头像 + 名字，右侧路由链接，粘性置顶，当前页高亮。 */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-green-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* 头像 + 名字 */}
        <NavLink to="/" end className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-emerald-300">
            <SheepIcon className="w-10" />
          </span>
          <span className="text-base font-bold text-green-900">安静的鸟</span>
        </NavLink>
        {/* 导航链接 */}
        <ul className="flex items-center gap-5 text-sm font-medium sm:gap-6 sm:text-base">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-green-600'
                    : 'text-green-800/70 transition hover:text-green-600'
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
