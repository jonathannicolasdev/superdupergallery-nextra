import NextHead from 'next/head'

export default function HomePage() {
  return (
    <div>
      <NextHead>
        <title>Super Duper Gallery</title>
      </NextHead>
      <img src="/images/superdupergallery-avatar.jpg" alt="Avatar" />
      <h1>Super Duper Gallery</h1>
    </div>
  )
}
