import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import useMediaQuery from "../src/hooks/useMediaQuery";
import { MOBILE_WIDTH } from "../src/utils/constants";
import * as Style from "../styles/postTemplate";
export default function Post() {
  const isMobile = useMediaQuery(MOBILE_WIDTH);
  const router = useRouter();
  const [post, setPost] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(
          `https://kellek.com.br/wp-json/wp/v2/posts?slug=${router.query.slug}`
        )
        .then((response) => {
          setPost(response.data);
          console.log(response);
          axios
            .get(
              `https://kellek.com.br/wp-json/wp/v2/categories/${response?.data[0]?.categories[0]}`
            )
            .then((result) => {
              setCategory(result.data.name);
              console.log(result.data);
              // console.log(post[0].title.rendered);
            });
        });
    } catch (error) {
      console.log(error);
    }
  }, [post]);
  useEffect(() => {
    try {
      fetch(
        `https://kellek.com.br/wp-json/wp/v2/categories?category=${post.categories}`
      )
        .then((resposta) => {
          return resposta.json;
        })
        .then((response) => {
          setCategory(response.name);
          console.log(response.name);
          //   console.log(post);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(post);
  return (
    <Style.Cover isDesktop={!isMobile}>
      <Head>
        <title>{post[0]?.title.rendered}</title>
      </Head>
      {post?.map((ps) => (
        <div key={ps.id}>
          <div className="wrapp">
            <div className="postData">
              <a href={ps.categories}>{category}</a>
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
