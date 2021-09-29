import NextHead from 'next/head'
import { styled } from '../stitches.config'

const Header = styled('header', {
  margin: '1em',
  border: '2px solid white',
  minHeight: '100px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const HeaderDivider = styled('div', {
  borderWidth: '0 2px 0 2px',
  borderStyle: 'solid',
  borderColor: 'white',
  padding: '10px',
  height: '120px',
  flex: 1
})

const Logo = styled('img', {
  width: '120px',
  height: '120px'
})

const Tagline = styled('h2', {
  color: 'white',
  fontSize: '1.2em',
  padding: '20px'
})

const MenuButton = styled('button', {
  background: 'black',
  margin: '1em',
  border: '2px solid white',
  borderRadius: '1em',
  padding: '1em',
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 'bold'
})

const HeroHeading = styled('h1', {
  color: 'black',
  fontSize: '10rem',
  textTransform: 'uppercase',
  fontFamily: '"Titillium Web", sans-serif',
  lineHeight: '80%',
  fontWeight: 900,
  color: 'white',
  letterSpacing: 2
})

const Hero = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '100px'
})

const HeroCenter = styled('div', {})

export default function HomePage() {
  return (
    <div>
      <NextHead>
        <title>Super Duper Gallery</title>
      </NextHead>

      <Header>
        <Logo src="/images/superdupergallery-avatar.jpg" alt="Avatar" />
        <HeaderDivider />
        <Tagline>
          Contemporary Art Gallery <br /> based in 🇵🇭 QC, Philippines
        </Tagline>
        <HeaderDivider />
        <MenuButton>Menu</MenuButton>
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
