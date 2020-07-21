import React from "react"

const Article = ({
  content: {
    title,
    text: { text },
    banner: {
      file: { url },
    },
    publishedAt,
  },
}) => (
  <div>
    <h2>{title}</h2>
    <img src={url} alt={title} style={{ maxWidth: 200 }} />
    <p>{text}</p>
    <h5>{publishedAt}</h5>
  </div>
)

export default Article
