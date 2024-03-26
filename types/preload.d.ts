export interface IElectronAPI {
  getElectronVersionInfo: () => Promise<{
    node: string
    chrome: string
    electron: string
  }>

  getUserInfo: () => Promise<{
    user: {
      domain: string
      name: string
    }
  }>
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}
