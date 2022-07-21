import CardNews from "../../CardNews";
import LoadingContainer from "../../LoadingContainer";
import Texts from "../../Text";
import { IGetAllCategoriesHome } from "../../../dtos/Category";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import * as Styles from "./styles";
import React from "react";

interface ISessionQuinaryProps {
  categories: IGetAllCategoriesHome[];
}
function AllCategories({ categories }: ISessionQuinaryProps) {
  return (
    <Styles.Container>
      {categories ? (
        categories?.map((category) => {
          return category.posts.length ? (
            <Styles.ContainerPosts key={category.name}>
              <Texts type="h2" color="tertiary" bold>
                {category.posts.length ? category.name : null}
              </Texts>
              <Styles.ContainerNews>
                {category.posts.length
                  ? category.posts.map((posts) => {
                      return (
                        <Link href={`/blog/${category.slug}/${posts.slug}`}>
                          <CardNews
                            fontColor={category.color}
                            key={posts.id}
                            imageUrl={`${process.env.REACT_APP_STRAPI_URL}${
                              posts.image?.formats?.large?.url ||
                              posts.image?.formats?.thumbnail?.url
                            }`}
                            title={posts.title}
                            publishedAt={posts.createdAt}
                          />
                        </Link>
                      );
                    })
                  : null}
              </Styles.ContainerNews>
              {category.posts.length ? (
                <Styles.SeeMore>
                  <Link href={`/blog/${category.slug}`}>
                    <Texts type="md" color="tertiary">
                      CARREGAR MAIS
                      <FaArrowRight />
                    </Texts>
                  </Link>
                </Styles.SeeMore>
              ) : null}
            </Styles.ContainerPosts>
          ) : (
            ""
          );
        })
      ) : (
        <LoadingContainer loading />
      )}
    </Styles.Container>
  );
}

export default AllCategories;
