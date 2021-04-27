const Image = ({ image, style }) => {
  const imageUrl = "http://localhost:1337" + `${image?.url}`

  return (
    <img
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
    />
  )
}

export default Image
