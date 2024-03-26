import { List, ListItem, Section, Typography } from '@jay-js/ui'

export function About() {
  const NameContainer = List({
    className: 'p-2 flex flex-col justify-center items-end divide-y-2 divide-primary',
  })

  const VersionContainer = List({
    className: 'p-2 flex flex-col justify-center items-start divide-y-2 divide-primary',
  })

  window.electronAPI.getElectronVersionInfo().then((info) => {
    for (const [key, value] of Object.entries(info)) {
      NameContainer.appendChild(
        ListItem({
          children: [
            Typography({
              tag: 'p',
              className: 'font-bold',
              children: key.toUpperCase(),
            }),
          ],
        })
      )

      VersionContainer.appendChild(
        ListItem({
          children: [
            Typography({
              tag: 'p',
              className: 'font-mono',
              children: value,
            }),
          ],
        })
      )
    }
  })

  return Section({
    tag: 'section',
    className: 'flex justify-center items-center border-primary border-2 rounded bg-primary bg-opacity-20',
    children: [
      NameContainer,
      VersionContainer,
    ],
  })
}
