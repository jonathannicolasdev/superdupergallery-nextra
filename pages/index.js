import NextHead from 'next/head'
import { styled } from '@stitches/react'

const HeroHeading = styled('h1', {
  color: 'black',
  fontSize: '10rem',
  textTransform: 'uppercase',
  fontFamily: '"Titillium Web", sans-serif',
  lineHeight: '80%',
  fontWeight: 900
})

const Hero = styled('header', {
  display: 'flex',
  justifyContent: 'center'
})

const HeroCenter = styled('div', {})

export default function HomePage() {
  return (
    <div>
      <NextHead>
        <title>Super Duper Gallery</title>
      </NextHead>

      <Hero>
        <HeroCenter>
          <img src="/images/superdupergallery-avatar.jpg" alt="Avatar" />
          <HeroHeading>
            Super
            <br />
            Duper
            <br />
            Gallery
          </HeroHeading>
        </HeroCenter>
      </Hero>
    </div>
  )
}
