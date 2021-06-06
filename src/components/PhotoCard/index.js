import React from 'react'
import { Article, ImgWrapper, Image } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton/index'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({
  id, likes = 0, src = DEFAULT_IMAGE
}) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const handleFavClick = () => setLiked(!liked)

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Image src={src} />
              </ImgWrapper>
            </a>
            <div>
              <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
            </div>
          </>
        }
    </Article>
  )
}
