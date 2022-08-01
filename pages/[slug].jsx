import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
export default function Post() {
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
  return (
    <div>
      {post?.map((ps) => (
        <div key={ps.id}>
          <a href={ps.categories}>{category}</a>
          {console.log(category)}
          <h1>{ps?.title?.rendered}</h1>
          <Image
            src={ps.yoast_head_json.og_image[0].url}
            width={100}
            layout="responsive"
            height={75}
          />
        </div>
      ))}
    </div>
  );
}
