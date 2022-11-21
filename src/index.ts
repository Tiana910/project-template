import { renderSearchFormBlock, formhandler, search } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, User } from './user.js'
import { renderToast } from './lib.js'
import { getUserData, getFavoritesAmount } from './localStorage'

window.addEventListener('DOMContentLoaded', () => {

  localStorage.user = JSON.stringify({ "nameUser": 'Wade Warren', "avatarLink": '/img/avatar.png' });
  localStorage.favoriteItemsAmount = 5;

  const user = getUserData("user");
  const nameUser = user.nameUser;
  const avatarLink = user.avatarLink;
  const favoriteItemsAmount = getFavoritesAmount('user.favoriteItemsAmount');

  renderUserBlock("nameUser", "avatarLink", 0)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
