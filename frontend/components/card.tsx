import React from "react"
import Link from "next/link"
import Image from "./image"
import { Article } from "src/generated/graphql"

type TArticles = {
  article: Article
}

const Card = (props: TArticles) => {
  const { article } = props

  return (
    <Link as={`/article/${article.slug}`} href="/article/[id]">
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            {article.image && <Image image={article.image} style={{}} />}
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.category ? article.category.name : "Sin categoria"}
            </p>
            <p id="title" className="uk-text-large">
              {article.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
