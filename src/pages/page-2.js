import React, { useEffect, useState } from "react"

import { Link } from "gatsby"
import { useTransitionStore, TransitionLink } from "gatsby-plugin-transitions"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const [, dispatch] = useTransitionStore()
  useEffect(() => {
    function onScroll() {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 2
      ) {
        dispatch({
          type: "NAVIGATE",
          to: "/",
          leave: {
            opacity: 0,
            transform: "translate3d(0, -50vh, 0)",
            config: "stiff",
          },
          y: 500,
        })
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="content" style={{ minHeight: "300vh" }}>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
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
      <p>
        <h5>Welcome to page 2</h5>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fuga
        distinctio et repellendus impedit qui error, ut sint, enim harum sed
        iste nam maiores unde! Recusandae neque itaque ipsa laborum? Distinctio
        doloremque quo quidem unde saepe necessitatibus. Pariatur non recusandae
        impedit ratione officiis nostrum voluptates, nesciunt quam eos commodi
        officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Asperiores magni recusandae accusamus illum enim nisi molestias laborum
        mollitia hic? Provident reiciendis quo quia quasi laboriosam! Cumque,
        quisquam inventore earum sequi saepe doloremque aperiam eius quo eos
        dicta iure? Beatae consequatur quas veritatis, neque omnis porro debitis
        cumque ratione dolorem nam sequi corrupti, in qui iure quam culpa ipsa
        numquam, cupiditate quidem a quis voluptates. Quos officia debitis eaque
        quam obcaecati eveniet dolorum maiores deleniti amet quia, quas alias
        rem quasi ipsum omnis iusto temporibus provident modi iste rerum.
        Dolorem consequuntur debitis, laudantium consectetur maiores incidunt ea
        illum eaque ipsam corrupti. Quo enim sunt eveniet nesciunt atque libero
        ea iste voluptatem beatae commodi deleniti tempora, quas culpa, ab
        assumenda maiores in facere quae. Reprehenderit suscipit voluptas
        pariatur ad magnam laudantium incidunt aut, officia nemo. Est excepturi
        voluptatem laborum quo inventore voluptatum tenetur. Dolorem quis
        perferendis dolorum neque molestiae et aspernatur expedita repellat,
        repellendus harum non sapiente, velit laudantium, hic earum dicta
        praesentium esse sint numquam voluptatibus. Fuga exercitationem unde
        quod molestiae accusamus consequuntur a, laboriosam harum ducimus enim,
        autem magnam est quasi beatae! Minima, voluptatibus eveniet? Possimus
        officiis iure placeat quidem id provident? Excepturi natus, voluptatem
        debitis reiciendis aut fugiat dolore! consequatur quas veritatis, neque
        omnis porro debitis cumque ratione dolorem nam sequi corrupti, in qui
        iure quam culpa ipsa numquam, cupiditate quidem a quis voluptates. Quos
        officia debitis eaque quam obcaecati eveniet dolorum maiores deleniti
        amet quia, quas alias rem quasi ipsum omnis iusto temporibus provident
        modi iste rerum. Dolorem consequuntur debitis, laudantium consectetur
        maiores incidunt ea illum eaque ipsam corrupti. Quo enim sunt eveniet
        nesciunt atque libero ea iste voluptatem beatae commodi deleniti
        tempora, quas culpa, ab assumenda maiores in facere quae. Reprehenderit
        suscipit voluptas pariatur ad magnam laudantium incidunt aut, officia
        nemo. Est excepturi voluptatem laborum quo inventore voluptatum tenetur.
        Dolorem quis perferendis dolorum neque molestiae et aspernatur expedita
        repellat, repellendus harum non sapiente, velit laudantium, hic earum
        dicta praesentium esse sint numquam voluptatibus. Fuga exercitationem
        unde quod molestiae accusamus consequuntur a, laboriosam harum ducimus
        enim, autem magnam est quasi beatae! Minima, voluptatibus eveniet?
        Possimus officiis iure placeat quidem id provident? Excepturi natus,
        voluptatem debitis reiciendis aut fugiat dolore! debitis eaque quam
        obcaecati eveniet dolorum maiores deleniti amet quia, quas alias rem
        quasi ipsum omnis iusto temporibus provident modi iste rerum. Dolorem
        consequuntur debitis, laudantium consectetur maiores incidunt ea illum
        eaque ipsam corrupti. Quo enim sunt eveniet nesciunt atque libero ea
        iste voluptatem beatae commodi deleniti tempora, quas culpa, ab
        assumenda maiores in facere quae. Reprehenderit suscipit voluptas
        pariatur ad magnam laudantium incidunt aut, officia nemo. Est excepturi
        voluptatem laborum quo inventore voluptatum tenetur. Dolorem quis
        perferendis dolorum neque molestiae et aspernatur expedita repellat,
        repellendus harum non sapiente, velit laudantium, hic earum dicta
        praesentium esse sint numquam voluptatibus. Fuga exercitationem unde
        quod molestiae accusamus consequuntur a, laboriosam harum ducimus enim,
        autem magnam est quasi beatae! Minima, voluptatibus eveniet? Possimus
        officiis iure placeat quidem id provident? Excepturi natus, voluptatem
        debitis reiciendis aut fugiat dolore! consequuntur debitis, laudantium
        consectetur maiores incidunt ea illum eaque ipsam corrupti. Quo enim
        sunt eveniet nesciunt atque libero ea iste voluptatem beatae commodi
        deleniti tempora, quas culpa, ab assumenda maiores in facere quae.
        Reprehenderit suscipit voluptas pariatur ad magnam laudantium incidunt
        aut, officia nemo. Est excepturi voluptatem laborum quo inventore
        voluptatum tenetur. Dolorem quis perferendis dolorum neque molestiae et
        aspernatur expedita repellat, repellendus harum non sapiente, velit
        laudantium, hic earum dicta praesentium esse sint numquam voluptatibus.
        Fuga exercitationem unde quod molestiae accusamus consequuntur a,
        laboriosam harum ducimus enim, autem magnam est quasi beatae! Minima,
        voluptatibus eveniet? Possimus officiis iure placeat quidem id
        provident? Excepturi natus, voluptatem debitis reiciendis aut fugiat
        dolore! a, laboriosam harum ducimus enim, autem magnam est quasi beatae!
        Minima, voluptatibus eveniet? Possimus officiis iure placeat quidem id
        provident? Excepturi natus, voluptatem debitis reiciendis aut fugiat
        dolore! consequuntur debitis, laudantium consectetur maiores incidunt ea
        illum eaque ipsam corrupti. Quo enim sunt eveniet nesciunt atque libero
        ea iste voluptatem beatae commodi deleniti tempora, quas culpa, ab
        assumenda maiores in facere quae. Reprehenderit suscipit voluptas
        pariatur ad magnam laudantium incidunt aut, officia nemo. Est excepturi
        voluptatem laborum quo inventore voluptatum tenetur. Dolorem quis
        perferendis dolorum neque molestiae et aspernatur expedita repellat,
        repellendus harum non sapiente, velit laudantium, hic earum dicta
        praesentium esse sint numquam voluptatibus. Fuga exercitationem unde
        quod molestiae accusamus consequuntur a, laboriosam harum ducimus enim,
        autem magnam est quasi beatae! Minima, voluptatibus eveniet? Possimus
        officiis iure placeat quidem id p
      </p>
    </div>
  )
}

export default SecondPage
