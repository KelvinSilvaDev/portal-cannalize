import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import useMediaQuery from "../../src/hooks/useMediaQuery";
import { MOBILE_WIDTH } from "../../src/utils/constants";
import * as Style from "../../styles/postTemplate";
import api from "../../services/api";

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const category = await api
    .get(`https://kellek.com.br/wp-json/wp/v2/categories/${id}`)
    .then((response) => {
      return response.data;
      // console.log(response);
    })
    .then((res) => {
      return res;
    });

  return {
    props: {
      category,
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

export default function Categories(category) {
  const router = useRouter();
  //const slug = router.query.slug;
  const isMobile = useMediaQuery(MOBILE_WIDTH);
  //const [post, setPost] = useState([]);
  const [categoryy, setCategory] = useState([]);
  const [id, setId] = useState([]);
  // useEffect(() => {
  //   try {
  //     axios
  //       .get(
  //         `https://kellek.com.br/wp-json/wp/v2/categories/${router.query.id}`
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
  // }, []);

  useEffect(() => {
    try {
      api
        .get(`https://kellek.com.br/wp-json/wp/v2/categories/${thisCat.id}`)
        .then((resposta) => {
          console.log(resposta.data);
          return resposta.data;
        })
        .then((response) => {
          setCategory(response);
          console.log(categoryy);
        });
    } catch (error) {
      console.log(error);
    }
  });

  //ACRESCENTAR PARA FILTRAR POSTS DESSA CATEGORIA ESPECIFICA --> posts?categories=${id}

  //   console.log(post.post[0].id);
  //   const id = post.post[0].id;

  const thisCat = category.category;
  return (
    <Style.Cover isDesktop={!isMobile}>
      <div>
        <h1>{thisCat.name}</h1>
        {/* {categoryy.map((categ) => (
          <div key={categ.id}>
            <div>
              <h2>{categ.title.rendered}</h2>
            </div>
          </div>
        ))} */}
      </div>
    </Style.Cover>
  );
}
