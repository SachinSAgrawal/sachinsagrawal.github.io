// Shared behavior for every page with each section bailing out when its container is missing
(() => {
  'use strict'

  /* HEADER AND FOOTER */

  // Fill the empty header element and flag that its toggle exists
  function renderHeader() {
    const header = document.querySelector('header')
    if (!header) return

    header.innerHTML = `
      <h2>Sachin Agrawal</h2>
      <nav class="header-nav">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
      <div class="header-socials">
        <a href="https://www.linkedin.com/in/sachinsagrawal/" target="_blank" title="LinkedIn">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/sachinsagrawal" target="_blank" title="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://discord.com/users/575795042933932071" target="_blank" title="Discord">
          <i class="fa-brands fa-discord"></i>
        </a>
        <a href="https://instagram.com/sachinsagrawal2" target="_blank" title="Instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <button class="theme-toggle" id="themeToggleBtn" type="button" title="Theme: Auto" aria-label="Theme: Auto">
          <i id="themeToggleIcon" data-lucide="monitor"></i>
        </button>
      </div>
    `

    // Let the theme toggle know its button exists now
    document.dispatchEvent(new CustomEvent('header:loaded'))
  }

  // Fill the empty footer element that every page ships with
  function renderFooter() {
    const footer = document.querySelector('footer')
    if (!footer) return

    footer.innerHTML = `
      <p>
        © 2023-2026 Sachin Agrawal
        <a class="link" href="/legal">Privacy & Terms</a>
      </p>
    `
  }

  /* THEME */

  // Hold the active theme between updates
  let currentTheme = 'auto'

  // Restore the saved choice and wire up the toggle
  function initTheme() {
    const savedTheme = localStorage.getItem('sachinTheme') || 'auto'
    currentTheme = savedTheme
    applyTheme(savedTheme)
    bindThemeToggle()
    updateThemeToggleUI()
  }

  // Toggle the body class that drives the CSS variables
  function applyTheme(theme) {
    // Follow the device preference when set to auto
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

  // Save the choice so it survives a reload
  function setTheme(theme) {
    currentTheme = theme
    localStorage.setItem('sachinTheme', theme)
    applyTheme(theme)
    updateThemeToggleUI()
  }

  // Attach the click handler, waiting on the header if it has not rendered
  function bindThemeToggle() {
    const toggleBtn = document.getElementById('themeToggleBtn')
    // Retry once the header has injected the button
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

  // Match the icon and tooltip to the mode in effect
  function updateThemeToggleUI() {
    const toggleBtn = document.getElementById('themeToggleBtn')
    if (!toggleBtn) return

    // Name the current mode for the tooltip and screen readers
    const label = `Theme: ${currentTheme.charAt(0).toUpperCase()}${currentTheme.slice(1)}`
    toggleBtn.setAttribute('title', label)
    toggleBtn.setAttribute('aria-label', label)

    // Match the auto icon to the device being used
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

    // Redraw the icon that was just swapped in
    if (window.lucide) {
      lucide.createIcons()
    }
  }

  // Follow the system appearance while on auto
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (currentTheme === 'auto') {
      applyTheme('auto')
      updateThemeToggleUI()
    }
  })

  // Swap the auto icon when the window crosses the mobile breakpoint
  window.addEventListener('resize', () => {
    if (currentTheme === 'auto') {
      updateThemeToggleUI()
    }
  })

  // Pick up a theme change made in another tab
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

  /* HOME PAGE RECENT POSTS */

  // Show the two newest posts on the home page
  function displayRecentBlogs() {
    const container = document.getElementById('recent-blogs')
    if (!container) return

    // Take the two newest posts
    const recentBlogs = (BLOGS_DATA || []).slice(0, 2)

    recentBlogs.forEach(blog => {
      // Build a card showing the title and date
      const item = document.createElement('div')
      item.className = 'recent-blog-item'
      item.tabIndex = 0

      const title = document.createElement('h4')
      title.textContent = blog.title

      const date = document.createElement('p')
      date.textContent = blog.date

      item.appendChild(title)
      item.appendChild(date)
      container.appendChild(item)

      // Open the full post on click or keyboard activation
      const targetKey = blog.key || ''
      const targetUrl = `/blog?post=${encodeURIComponent(targetKey)}`

      const goToPost = () => {
        window.location.href = targetUrl
      }

      item.addEventListener('click', goToPost)
      item.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          goToPost()
        }
      })
    })
  }

  /* HOME PAGE RATING */

  // Make the stars clickable once, then freeze them
  function initRating() {
    const container = document.getElementById('rating-container')
    if (!container) return

    const stars = container.querySelectorAll('.star')
    const message = container.querySelector('.rating-message')
    const starsWrapper = container.querySelector('.stars')
    let locked = false

    stars.forEach((star, index) => {
      // Fill the stars up to the one picked, then lock the widget
      star.addEventListener('click', () => {
        if (locked) return
        stars.forEach(s => s.classList.remove('active', 'hover'))
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add('active')
        }
        message.textContent = 'Thanks for your feedback, which is not being recorded.'
        message.style.display = 'block'
        locked = true
        if (starsWrapper) {
          starsWrapper.classList.add('locked')
        }

        setTimeout(() => {
          message.style.display = 'none'
        }, 2000)
      })

      // Preview a rating on hover until one is locked in
      star.addEventListener('mouseenter', () => {
        if (locked) return
        stars.forEach(s => s.classList.remove('hover'))
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add('hover')
        }
      })

      star.addEventListener('mouseleave', () => {
        if (locked) return
        stars.forEach(s => s.classList.remove('hover'))
      })
    })
  }

  /* BLOG PAGE */

  // Cut text down to a word limit for previews
  function truncateWords(text, limit = 30) {
    const words = text.trim().split(/\s+/)
    if (words.length <= limit) return text
    return words.slice(0, limit).join(' ') + '…'
  }

  // Build one collapsible blog card
  function createBlogCard({ key, title, date, paragraphs, link }) {
    const card = document.createElement('div')
    card.className = 'blog-card'
    if (key) card.dataset.key = key

    // Lay out the title and date
    const header = document.createElement('div')
    header.className = 'blog-header'
    const h4 = document.createElement('h4')
    h4.className = 'blog-title'
    h4.textContent = title
    const dateEl = document.createElement('span')
    dateEl.className = 'blog-date'
    dateEl.textContent = date
    header.appendChild(h4)
    header.appendChild(dateEl)

    // Hold the collapsed preview and the full text separately
    const preview = document.createElement('div')
    preview.className = 'blog-preview'
    const content = document.createElement('div')
    content.className = 'blog-content'

    // Trim the post down to a short preview
    const paraList = paragraphs || []
    const previewText = truncateWords(paraList.join(' '), 30)
    const previewP = document.createElement('p')
    previewP.textContent = previewText
    preview.appendChild(previewP)

    // Fill the body that shows once expanded
    paraList.forEach((para) => {
      const p = document.createElement('p')
      p.textContent = para
      content.appendChild(p)
    })

    // Append any project links with their icons
    const links = link ? (Array.isArray(link) ? link : [link]) : []

    links.forEach((linkItem) => {
      const linkP = document.createElement('p')

      if (linkItem.icon) {
        const img = document.createElement('img')
        img.className = 'icon'
        img.alt = 'Link icon'
        img.src = linkItem.icon
        linkP.appendChild(img)
      }

      if (linkItem.url) {
        const a = document.createElement('a')
        a.href = linkItem.url
        a.target = '_blank'
        a.textContent = linkItem.displayText || linkItem.url
        linkP.appendChild(a)
      } else if (linkItem.displayText) {
        const textNode = document.createTextNode(linkItem.displayText)
        linkP.appendChild(textNode)
      }

      content.appendChild(linkP)
    })

    // Assemble the card
    card.appendChild(header)
    card.appendChild(preview)
    card.appendChild(content)

    // Expand this card and collapse any other
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return
      const allCards = document.querySelectorAll('.blog-card')
      allCards.forEach(c => {
        if (c !== card) c.classList.remove('expanded')
      })
      card.classList.toggle('expanded')
    })

    return card
  }

  // Fill the blog page with a card per post
  function initBlogs() {
    const container = document.getElementById('blogs')
    if (!container) return

    (BLOGS_DATA || []).forEach(cfg => {
      const card = createBlogCard({ key: cfg.key, title: cfg.title, date: cfg.date, paragraphs: cfg.paragraphs || cfg.lines || [], link: cfg.link })
      container.appendChild(card)
    })

    expandFromQuery()
  }

  // Expand the post named by the query string or hash
  function expandFromQuery() {
    const params = new URLSearchParams(window.location.search)
    const target = params.get('post') || (location.hash ? decodeURIComponent(location.hash.replace('#', '')) : '')
    if (!target) return

    const card = document.querySelector(`.blog-card[data-key="${target}"]`)
    if (!card) return

    document.querySelectorAll('.blog-card').forEach(c => {
      if (c !== card) c.classList.remove('expanded')
    })

    card.classList.add('expanded')
    card.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  /* LINKS PAGE */

  // Swap the link list when a category is picked
  function initLinks() {
    const select = document.getElementById('category-select')
    if (!select) return

    select.addEventListener('change', function () {
      const val = this.value
      document.getElementById('category-desc').textContent = LINKS_DATA[val]?.desc || ''
      document.getElementById('category-content').innerHTML = LINKS_DATA[val]?.html || ''
    })
  }

  /* STARTUP */

  // Apply the saved theme before the header renders to avoid a flash
  initTheme()

  // Render the chrome and start each page section once the DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    renderHeader()
    renderFooter()
    displayRecentBlogs()
    initRating()
    initBlogs()
    initLinks()
  })
})()
