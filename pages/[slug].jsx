import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import useMediaQuery from "../src/hooks/useMediaQuery";
import { MOBILE_WIDTH } from "../src/utils/constants";
import * as Style from "../styles/postTemplate";
import api from "../services/api";

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  const post = await api
    .get(`https://kellek.com.br/wp-json/wp/v2/posts?slug=${slug}`)
    .then((response) => {
      return response.data;
      // console.log(response);
    })
    .then((res) => {
      return res;
    });

  return {
    props: {
      post,
    },
  };
}

// api
//   .get(
//     `https://kellek.com.br/wp-json/wp/v2/categories/${response?.data[0]?.categories[0]}`
//   )
//   .then((result) => {
//     setCategory(result.data.name);
//     console.log(result.data);
//     // console.log(post[0].title.rendered);
//   });

export default function Post(post) {
  const router = useRouter();
  //const slug = router.query.slug;
  const isMobile = useMediaQuery(MOBILE_WIDTH);
  //const [post, setPost] = useState([]);
  const [category, setCategory] = useState([]);
  // const [id, setId] = useState([]);
  // useEffect(() => {
  //   try {
  //     axios
  //       .get(
  //         `https://kellek.com.br/wp-json/wp/v2/posts?slug=${router.query.slug}`
  //       )
  //       .then((response) => {
  //         setPost(response.data);
  //         console.log(response);
  //         axios
  //           .get(
  //             `https://kellek.com.br/wp-json/wp/v2/categories/${response?.data[0]?.categories[0]}`
  //           )
  //           .then((result) => {
  //             setCategory(result.data.name);
  //             console.log(result.data);
  //             // console.log(post[0].title.rendered);
  //           });
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [post]);

  useEffect(() => {
    try {
      api
        .get(
          `https://kellek.com.br/wp-json/wp/v2/categories?post=${id}&_embedded `
        )
        .then((resposta) => {
          console.log(resposta.data);
          return resposta.data;
        })
        .then((response) => {
          setCategory(response);
          //   console.log(post);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(post.post[0].id);
  const id = post.post[0].id;
  console.log(id);
  return (
    <Style.Cover isDesktop={!isMobile}>
      <Head>
        <title>{post.post[0]?.title.rendered}</title>
      </Head>
      {post.post?.map((ps) => (
        <div key={ps.id}>
          <div className="wrapp">
            <div className="postData">
              {/* <a href={ps.categories}>{ps._links["wp:term"][0].href}</a> */}
              <p>
                {category.map(({ name, id }) => (
                  <div key={id}>
                    <p>{name}</p>
                  </div>
                ))}
              </p>
              {console.log(category)}
              <h1>{ps?.title?.rendered}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: ps.excerpt.rendered }}
              ></div>
            </div>
            <div className="fImage">
              <Image
                src={ps.yoast_head_json.og_image[0].url}
                width={100}
                layout="responsive"
                height={75}
                sizes="
                              (min-width: 75em) 33vw,
                              (min-width: 48em) 50vw,
                              100vw
                              "
              />
            </div>
          </div>
          <div
            className="postContent"
            dangerouslySetInnerHTML={{ __html: ps.content.rendered }}
          ></div>
        </div>
      ))}
    </Style.Cover>
  );
}
