/// <reference types="mdast" />
import { h } from 'hastscript'

/**
 * Creates a GitHub Card component.
 *
 * @param {Object} properties - The properties of the component.
 * @param {string} properties.user - The GitHub user in the format "user".
 * @param {import('mdast').RootContent[]} children - The children elements of the component.
 * @returns {import('mdast').Parent} The created GitHub Card component.
 */
export function GithubUserCardComponent(properties, children) {
  if (Array.isArray(children) && children.length !== 0)
    return h('div', { class: 'hidden' }, [
      'Invalid directive. ("github" directive must be leaf type "::github{user="user"}")',
    ])

  if (!properties.user)
    return h(
      'div',
      { class: 'hidden' },
      "Invalid user. Make sure that you're confirming right user ID",
    )

  const user = properties.user
  const cardUuid = `GC${Math.random().toString(36).slice(-6)}` // Collisions are not important

  const nAvatar = h(`div#${cardUuid}-avatar`, { class: 'gc-avatar' })

  const nTitle = h(`div`, { class: 'gc-titlebar' }, [
    h('div', { class: 'gc-titlebar-left' }, [
      h('div', { class: 'gc-owner' }, [
        nAvatar,
        h('div', { class: 'gc-user' }),
      ]),
    ]),
    h('div', { class: 'github-logo' }),
  ])

  const nScript = h(
    `script#${cardUuid}-script`,
    { type: 'text/javascript', defer: true },
    `
      fetch('https://api.github.com/users/${user}', { referrerPolicy: "no-referrer" }).then(response => response.json()).then(data => {
        const avatarEl = document.getElementById('${cardUuid}-avatar');
        avatarEl.style.backgroundImage = 'url(' + data.owner.avatar_url + ')';
        avatarEl.style.backgroundColor = 'transparent';
          document.getElementById('${cardUuid}-card').classList.remove("fetch-waiting");
          console.log("[GITHUB-CARD] Loaded card for ${user} | ${cardUuid}.")
      }).catch(err => {
        const c = document.getElementById('${cardUuid}-card');
        c.classList.add("fetch-error");
         console.warn("[GITHUB-CARD] (Error) Loading card for ${user} | ${cardUuid}.")
      })
    `,
  )

  return h(
    `a#${cardUuid}-card`,
    {
      class: 'card-github fetch-waiting no-styling',
      href: `https://github.com/${user}`,
      target: '_blank',
      user,
    },
    [nTitle, h('div', { class: 'gc-infobar' }), nScript],
  )
}
