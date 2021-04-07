import React from 'react'
import { ImgWrapper, Image, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({
  id, likes = 0, src = DEFAULT_IMAGE
}) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Image src={src} />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavoriteBorder size='32px' />{likes}likes!
      </Button>
    </article>
  )
}
