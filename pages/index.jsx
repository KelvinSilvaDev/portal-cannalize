import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import * as Style from "../styles/homeStyles";
import Link from "next/link";

export async function getServerSideProps() {
  const post = await fetch("https://kellek.com.br/wp-json/wp/v2/posts")
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      // setPost(response);
      console.log(response);
      // console.log(post);
      return response;
    });
  return {
    props: {
      post,
    }, // will be passed to the page component as props
  };
}

export default function Home({ post }) {
  // const [post, setPost] = useState([]);

  // useEffect(() => {
  //   try {
  //     fetch("https://kellek.com.br/wp-json/wp/v2/posts")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((response) => {
  //         setPost(response);
  //         console.log(response);
  //         console.log(post);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  return (
    <div>
      <Head>
        <title>Blog Cannalize</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Style.Tags>
          <Link href="/">Todos</Link>
          <Link href="/">Todos</Link>
          <Link href="/">Todos</Link>
          <Link href="/">Todos</Link>
          <Link href="/">Todos</Link>
        </Style.Tags>
        <Style.Hero>
          <Style.HeroText>
            <h1>O &apos;barato&apos; do canabidiol</h1>
            <p>
              Um bud vistoso, cheiroso e tricomado não dá a menor pinta de ce é
              careta. Mas é.
            </p>
            <span>
              Trata-se da cannabis in natura rica em Cannabidiol (BCD), também
              chamada de cannabis light, na Itália, por exemplo, onde é
              legalmente comercializada, engloba variedades de flores com até
              0,3% de THC.
            </span>
            <p>
              <strong>
                12 de janeiro de 2022, por <Link href="/">Smoke Buddies</Link>
              </strong>
            </p>
          </Style.HeroText>
          <Style.HeroImg>
            <Image
              src="/assets/img/test.png"
              layout="responsive"
              width={100}
              height={75}
              alt="teste"
            />
          </Style.HeroImg>
        </Style.Hero>
        <Style.Grid>
          {post.map(({ guid, title, yoast_head_json, slug }) => {
            return (
              <div key={title}>
                <div>
                  <div>
                    <Image
                      src={yoast_head_json.og_image[0].url}
                      layout="responsive"
                      width={700}
                      height={475}
                    />
                  </div>
                  <Link href={slug}>
                    <h1>{title.rendered}</h1>
                  </Link>
                </div>
                {/* <img src= alt="" /> */}
              </div>
            );
          })}
        </Style.Grid>
      </main>
    </div>
  );
}
