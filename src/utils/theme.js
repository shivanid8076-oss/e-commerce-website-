export const themeUtils = {
  init: () => {
    const stored = localStorage.getItem('theme')
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (stored === 'dark' || (!stored && prefers)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
  
  toggle: () => {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    return isDark
  },
  
  isDark: () => document.documentElement.classList.contains('dark'),
  
  watch: (callback) => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', callback)
    return () => media.removeEventListener('change', callback)
  }
}
