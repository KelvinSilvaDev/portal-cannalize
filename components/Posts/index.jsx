import React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Link from "next/link";
import Image from "next/image";
import { MOBILE_WIDTH } from "../../src/utils/constants";
import useMediaQuery from "../../src/hooks/useMediaQuery";
import * as Style from "./styles";

const Posts = ({ posts, loading, firstPosts }) => {
  console.log(firstPosts);
  const isMobile = useMediaQuery(MOBILE_WIDTH);
  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <>
        {posts && (
          <Style.Grid isDesktop={!isMobile}>
            {posts.map((post) => {
              return (
                <div key={post.id}>
                  <Link href={post.slug} slug={post.slug} id={post.guid}>
                    <a>
                      <div className="card">
                        <div>
                          <div>
                            <Image
                              src={post.yoast_head_json.og_image[0].url}
                              layout="responsive"
                              width={700}
                              height={475}
                              sizes="
                              (min-width: 75em) 33vw,
                              (min-width: 48em) 50vw,
                              100vw
                              "
                            />
                            <p>{post.x_categories}</p>
                          </div>
                          <h1
                            dangerouslySetInnerHTML={{
                              __html: post.title.rendered,
                            }}
                          ></h1>
                          <div
                            id="postExcerpt"
                            dangerouslySetInnerHTML={{
                              __html: post.excerpt.rendered,
                            }}
                          />
                          <span>
                            <p>
                              <strong id="CardPostAuthor">
                                {format(
                                  new Date(post.date_gmt),
                                  `dd 'de' MMMM 'de' yyyy`,
                                  {
                                    locale: ptBR,
                                  }
                                )}
                                , por {post.x_author}
                              </strong>
                            </p>
                          </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </Style.Grid>
        )}
        {firstPosts && (
          <Style.FirstGrid isDesktop={!isMobile}>
            {firstPosts.map((post) => {
              return (
                <div key={post.id}>
                  <Link href={post.slug} slug={post.slug} id={post.guid}>
                    <a>
                      <div className="card">
                        <div>
                          <div>
                            <Image
                              src={post.yoast_head_json.og_image[0].url}
                              layout="responsive"
                              width={700}
                              height={475}
                              sizes="
                              (min-width: 75em) 33vw,
                              (min-width: 48em) 50vw,
                              100vw
                              "
                              priority
                            />
                            <p>{post.x_categories}</p>
                          </div>
                          <h1>{post.title.rendered}</h1>

                          <span>
                            <p>
                              <strong id="CardPostAuthor">
                                {format(
                                  new Date(post.date_gmt),
                                  `dd 'de' MMMM 'de' yyyy`,
                                  {
                                    locale: ptBR,
                                  }
                                )}
                                , por {post.x_author}
                              </strong>
                            </p>
                          </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </Style.FirstGrid>
        )}
      </>
    );
  }
};

export default Posts;
