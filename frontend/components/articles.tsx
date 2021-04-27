import React from "react"
import { ArticlesQuery } from "src/generated/graphql"
import Card from "./card"
type TArticles = {
  articles: ArticlesQuery
}
const Articles = (props: TArticles) => {
  const { articles } = props
  console.log(articles)
  let articlesList = articles.articlesConnection
  const leftArticlesCount = Math.ceil(articlesList.values.length / 5)
  const leftArticles = articlesList.values.slice(0, leftArticlesCount)
  const rightArticles = articlesList.values.slice(
    leftArticlesCount,
    articlesList.values.length,
  )

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {leftArticles.map((article, i) => {
            return (
              <Card article={article as any} key={`article__left__${article.slug}`} />
            )
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((article, i) => {
              return <Card article={article as any} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
