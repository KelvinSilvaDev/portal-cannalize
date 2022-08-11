import Image from "next/image";
import Link from "next/link";
import * as Style from "./styles";

import api from "../../services/api";
import { useState, useEffect } from "react";

export default function RealStories() {
  const [story, setStory] = useState([]);
  useEffect(() => {
    api
      .get("https://cannalize.com.br/wp-json/wp/v2/posts?categories=52")
      .then((res) => {
        // api
        //   .get(`https://kellek.com.br/wp-json/wp/v2/users/${res[0].author}`)
        //   .then((response) => setAutor(response.data.name));
        setStory(res.data);
        return res.data;
      })
      .then((response) => {
        return response;
      });
  }, []);
  const storiesOne = story.slice(0, 1);
  const stories = story.slice(1, 5);
  return (
    <>
      {storiesOne &&
        storiesOne.map((post) => (
          <Style.FirstStory key={post.id}>
            <Link href={post.slug}>
              <a>
                <div className="image">
                  <Image
                    src={post.yoast_head_json.og_image[0].url}
                    layout="responsive"
                    width={100}
                    height={60}
                  />
                </div>
                <div className="storyContent">
                  <span>
                    <strong
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    ></strong>
                  </span>
                  <span>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    ></p>
                  </span>
                </div>
              </a>
            </Link>
          </Style.FirstStory>
        ))}
      {stories && (
        <Style.StoryGrid>
          {stories.map((post) => (
            <li key={post.id} className="gridItem">
              <Link href={post.slug}>
                <a>
                  <div>
                    <div className="image">
                      <Image
                        src={post.yoast_head_json.og_image[0].url}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="storyContent">
                      <span>
                        <strong
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        ></strong>
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </Style.StoryGrid>
      )}
      <Link href="/">Leia mais &rarr;</Link>
    </>
    // <div>
    //   <div>
    //     <header>
    //       <h1>Colunistas</h1>
    //     </header>
    //     <section>
    //       <ul>
    //         <li>
    //           <div>
    //             <div>
    //               <Image
    //                 src="/assets/img/colunista.png"
    //                 width={100}
    //                 height={100}
    //               />
    //             </div>
    //             <div>
    //               <p>
    //                 Dolor posuere nulla fusce et vitae tempus vitae eleifend ut.
    //               </p>
    //               <span>
    //                 <strong>Advogadas Cannábicas</strong>
    //               </span>
    //             </div>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div>
    //               <Image
    //                 src="/assets/img/colunista.png"
    //                 width={100}
    //                 height={100}
    //               />
    //             </div>
    //             <div>
    //               <p>
    //                 Dolor posuere nulla fusce et vitae tempus vitae eleifend ut.
    //               </p>
    //               <span>
    //                 <strong>Advogadas Cannábicas</strong>
    //               </span>
    //             </div>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div>
    //               <Image
    //                 src="/assets/img/colunista.png"
    //                 width={100}
    //                 height={100}
    //               />
    //             </div>
    //             <div>
    //               <p>
    //                 Dolor posuere nulla fusce et vitae tempus vitae eleifend ut.
    //               </p>
    //               <span>
    //                 <strong>Advogadas Cannábicas</strong>
    //               </span>
    //             </div>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div>
    //               <Image
    //                 src="/assets/img/colunista.png"
    //                 width={100}
    //                 height={100}
    //               />
    //             </div>
    //             <div>
    //               <p>
    //                 Dolor posuere nulla fusce et vitae tempus vitae eleifend ut.
    //               </p>
    //               <span>
    //                 <strong>Advogadas Cannábicas</strong>
    //               </span>
    //             </div>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div>
    //               <Image
    //                 src="/assets/img/colunista.png"
    //                 width={100}
    //                 height={100}
    //               />
    //             </div>
    //             <div>
    //               <p>
    //                 Dolor posuere nulla fusce et vitae tempus vitae eleifend ut.
    //               </p>
    //               <span>
    //                 <strong>Advogadas Cannábicas</strong>
    //               </span>
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //     </section>
    //     <Link href="/">
    //       <a>Leia mais</a>
    //     </Link>
    //   </div>
    // </div>
  );
}
