let currentTheme = 'auto'

// Initialize theme on page load
function initTheme() {
  const savedTheme = localStorage.getItem('sachinTheme') || 'auto'
  currentTheme = savedTheme
  applyTheme(savedTheme)
  bindThemeToggle()
  updateThemeToggleUI()
}

// Apply to the document
function applyTheme(theme) {
  if (theme === 'auto') {
    document.body.classList.remove('light-mode', 'dark-mode')
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (isDark) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.add('light-mode')
    }
  } else if (theme === 'dark') {
    document.body.classList.remove('light-mode')
    document.body.classList.add('dark-mode')
  } else {
    document.body.classList.remove('dark-mode')
    document.body.classList.add('light-mode')
  }
}

// Set theme to specific value
function setTheme(theme) {
  currentTheme = theme
  localStorage.setItem('sachinTheme', theme)
  applyTheme(theme)
  updateThemeToggleUI()
}

// Bind toggle button
function bindThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn')
  if (!toggleBtn) {
    document.addEventListener('header:loaded', () => {
      bindThemeToggle()
      updateThemeToggleUI()
    }, { once: true })
    return
  }

  toggleBtn.addEventListener('click', () => {
    const nextTheme = getNextTheme(currentTheme)
    setTheme(nextTheme)
  })
}

// Cycle through themes: auto -> light -> dark -> auto
function getNextTheme(theme) {
  if (theme === 'auto') return 'light'
  if (theme === 'light') return 'dark'
  return 'auto'
}

// Update button icon/labels
function updateThemeToggleUI() {
  const toggleBtn = document.getElementById('themeToggleBtn')
  if (!toggleBtn) return

  const label = `Theme: ${currentTheme.charAt(0).toUpperCase()}${currentTheme.slice(1)}`
  toggleBtn.setAttribute('title', label)
  toggleBtn.setAttribute('aria-label', label)

  let iconName = 'monitor'
  if (currentTheme === 'auto') {
    const isWide = window.innerWidth > 768
    iconName = isWide ? 'monitor' : 'smartphone'
  } else if (currentTheme === 'dark') {
    iconName = 'moon'
  } else {
    iconName = 'sun'
  }

  toggleBtn.innerHTML = `<i id="themeToggleIcon" data-lucide="${iconName}"></i>`

  if (window.lucide) {
    lucide.createIcons()
  }
}

// Listen for device theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (currentTheme === 'auto') {
    applyTheme('auto')
    updateThemeToggleUI()
  }
})

// Listen for window resize
window.addEventListener('resize', () => {
  if (currentTheme === 'auto') {
    updateThemeToggleUI()
  }
})

// Listen for page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden === false) {
    const savedTheme = localStorage.getItem('sachinTheme') || 'auto'
    if (savedTheme !== currentTheme) {
      currentTheme = savedTheme
      applyTheme(savedTheme)
      updateThemeToggleUI()
    }
  }
})

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme)
} else {
  initTheme()
}
