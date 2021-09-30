import NextHead from 'next/head'
import { styled } from '../stitches.config'

const Header = styled('header', {
  margin: '1em',
  border: '2px solid white',
  minHeight: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  '@desktop': {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

const HeaderSegment = styled('div', {
  display: 'flex',
  justifyContent: 'center'
})

const HeaderDivider = styled('div', {
  borderTop: '2px solid white',
  '@desktop': {
    borderWidth: '0 2px 0 2px',
    borderStyle: 'solid',
    borderColor: 'white',
    padding: '10px',
    height: '120px',
    flex: 1
  }
})

const Logo = styled('img', {
  width: '80px',
  height: '80px',
  '@desktop': {
    width: '120px',
    height: '120px'
  }
})

const Tagline = styled('h2', {
  color: 'white',
  fontSize: '1.2em',
  padding: '20px'
})

const MenuButton = styled('button', {
  background: 'black',
  border: '2px solid white',
  borderRadius: '1em',
  margin: '0.5em',
  padding: '0.5em',
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  '@desktop': {
    margin: '1em',
    padding: '1em'
  }
})

const Hero = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '75px'
})

const HeroCenter = styled('div', {})

const HeroHeading = styled('h1', {
  textTransform: 'uppercase',
  fontFamily: '"Titillium Web", sans-serif',
  lineHeight: '80%',
  fontWeight: 900,
  letterSpacing: 2,
  backgroundImage: 'url("/images/hero-text-background.jpg")',
  color: 'transparent',
  backgroundClip: 'text',
  filter: 'brightness(1.5)',
  '-webkit-text-stroke-width': '2px',
  '-webkit-text-stroke-color': 'white',
  fontSize: '4.5rem',
  '@desktop': {
    fontSize: '11.5rem'
  }
})

export default function HomePage() {
  return (
    <div>
      <NextHead>
        <title>Super Duper Gallery</title>
      </NextHead>

      <Header>
        <HeaderSegment>
          <Logo src="/images/superdupergallery-avatar.jpg" alt="Avatar" />
        </HeaderSegment>
        <HeaderDivider />
        <HeaderSegment>
          <Tagline>
            Contemporary Art Gallery <br /> based in 🇵🇭 QC, Philippines
          </Tagline>
        </HeaderSegment>
        <HeaderDivider />
        <HeaderSegment>
          <MenuButton>Menu</MenuButton>
        </HeaderSegment>
      </Header>

      <Hero>
        <HeroCenter>
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
