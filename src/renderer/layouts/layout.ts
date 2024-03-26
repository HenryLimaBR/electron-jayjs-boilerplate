import { Section, Outlet, Typography, Divider, Img } from '@jay-js/ui'

// image
import jayjs from '/jayjs.svg'

// components
import { NavBar } from '../components/common/NavBar'

export function Layout() {
  const Username = Typography({
    tag: 'h1',
    className: 'text-4xl mb-4 font-bold text-center',
  })

  window.electronAPI.getUserInfo().then(({ user: { name } }) => {
    Username.innerHTML = `Welcome to JayJS Electron, ${name.toUpperCase()}! 🥳`
  })

  return Section({
    tag: 'section',
    className:
      'max-w-lg mx-auto h-screen w-screen flex flex-col justify-center items-center',
    children: [
      Img({
        src: jayjs,
        alt: 'Jay JS Logo',
        className: 'w-32 h-32 mb-4',
      }),
      Username,
      NavBar(),
      Divider(),
      Outlet(),
    ],
  })
}
