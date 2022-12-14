import { renderBlock } from './lib.js'

export class User {
  nameUser: string
  avatarLink: string
  favoriteItemsAmount: number
  constructor (nameUser: string, avatarLink: string, favoriteItemsAmount?: number) {
    this.nameUser = nameUser
    this.avatarLink = avatarLink
    this.favoriteItemsAmount = favoriteItemsAmount
  }
  }
  
export function renderUserBlock (nameUser:string, avatarLink:string, favoriteItemsAmount?:number) {

  const favoritesCaption = favoriteItemsAmount <1 ? 'ничего нет' : favoriteItemsAmount  
  const hasFavoriteItems = favoriteItemsAmount<1 ? false :true 

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarLink}" alt="${nameUser}" />
      <div class="info">
          <p class="name">${nameUser}</p>
          <p class="fav">
            <i class="heart-icon ${hasFavoriteItems ? ' active' : ''}"></i>
            ${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
