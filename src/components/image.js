import React from 'react'
import Image from 'next/image'

const AppImage = ({ src, width, height, alt }) => {
  return (
    <div data-testid="thumbnail">
        { src ? 
            <Image src={src} alt={alt} width={width} height={height} /> :
            <Image src={'/placeholder.png'} alt={alt} width={width} height={height} />
        }
    </div>
  )
}

export default AppImage