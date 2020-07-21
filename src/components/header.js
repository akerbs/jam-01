import React from "react"
import { Link } from "gatsby"

/**
 * обратите внимание на то что изображение для логотипа
 * импортируется также, как и в обычном React-проекте.
 * Это временное и не оптимальное решение, потому что картинка
 * поставляется "как есть". Немного далее мы рассмотрим
 * как это делать "правильно" используя GraphQL и gatsby-плагины
 */
import logoSrc from "../images/logo.png"

export default () => (
  <header>
    <Link to="/">
      <img src={logoSrc} alt="logo" width="60px" height="60px" />
    </Link>
    That is header
  </header>
)

// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React from "react"

// const Header = ({ title, logo }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <Link
//         to="/"
//         style={{
//           color: `white`,
//           textDecoration: `none`,
//           display: `flex`,
//           alignItems: `center`,
//         }}
//       >
//         <img
//           src={logo}
//           alt="logo"
//           style={{
//             height: `3em`,
//             borderRadius: `50%`,
//             margin: `0.5em`,
//           }}
//         />
//         <h1 style={{ margin: `0` }}>{title}</h1>
//       </Link>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
