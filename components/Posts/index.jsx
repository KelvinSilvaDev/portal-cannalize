import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MOBILE_WIDTH } from "../../src/utils/constants";
import useMediaQuery from "../../src/hooks/useMediaQuery";
import * as Style from "./styles";

const Posts = ({ posts, loading, firstPosts }) => {
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
                <div key={post.slug}>
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
                            />
                          </div>
                          <h1>{post.title.rendered}</h1>
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
                <div key={post.slug}>
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
                            />
                          </div>
                          <h1>{post.title.rendered}</h1>
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
