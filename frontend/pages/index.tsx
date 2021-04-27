import React from "react"
import { ArticlesQuery, useArticlesQuery } from "src/generated/graphql"
import { Loading } from "utils/Loading"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Error from "../utils/Error"

const Home = ({ categories, homepage }) => {
  const {
    data: dataArticles,
    loading: loadingArticles,
    error: errorArticles,
  } = useArticlesQuery()
  let rows = []
  if (errorArticles) return <Error error={errorArticles} />
  if (!dataArticles || !dataArticles.articlesConnection) {
    return <h2>Sin datos </h2>
  }

  if (loadingArticles) return <Loading />
  categories = []
  homepage = []
  let values: ArticlesQuery = dataArticles || null

  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          {/* <h1>{homepage.hero.title}</h1> */}
          <Articles articles={values} />
        </div>
      </div>
    </Layout>
  )
}

export default Home
