import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Article from "../components/article"
import { TransitionLink } from "gatsby-plugin-transitions"

const IndexPage = () => (
  // <Layout>
  <div style={{ backgroundColor: "tomato" }}>
    <div>
      <ul>
        <li>
          <TransitionLink
            to="/"
            style={{ color: "red" }}
            className="my-custom-link"
            leave={{
              opacity: 0,
              transform: "translate3d(100vh,0vh,0)",
              config: { mass: 1, tension: 180, friction: 12, clamp: true },
            }}
            enter={{
              opacity: 0,
              transform: "translate3d(100vh,0vh,0)",
              config: "stiff",
              onRest: () => {
                console.log("Hello, World!")
              },
            }}
            usual={{
              transform: "translate3d(0vh,0vh,0)",
              opacity: 1,
            }}
            mode="immediate"
            y={() => window.scrollY}
          >
            Main Page
          </TransitionLink>
        </li>
        <li>
          <TransitionLink
            to="/page-2"
            style={{ color: "red" }}
            className="my-custom-link"
            leave={{
              opacity: 0,
              transform: "translate3d(100vh,0vh,0)",
              config: { mass: 1, tension: 180, friction: 12, clamp: true },
            }}
            enter={{
              opacity: 0,
              transform: "translate3d(100vh,0vh,0)",
              config: "stiff",
              onRest: () => {
                console.log("Hello, World!")
              },
            }}
            usual={{
              transform: "translate3d(0vh,0vh,0)",
              opacity: 1,
            }}
            mode="immediate"
            y={() => window.scrollY}
          >
            Page 2
          </TransitionLink>
        </li>
      </ul>
    </div>

    <h1>Place for Article is HERE</h1>
    <StaticQuery
      query={graphql`
        {
          allContentfulArticle {
            edges {
              node {
                id
                title
                text {
                  text
                }
                banner {
                  file {
                    url
                  }
                }
                publishedAt
              }
            }
          }
        }
      `}
      render={({ allContentfulArticle: { edges } }) =>
        edges.map(({ node }) => <Article key={node.id} content={node} />)
      }
    />
  </div>
  // </Layout>
)

export default IndexPage

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )
