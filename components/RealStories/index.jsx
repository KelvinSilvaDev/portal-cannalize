import Image from "next/image";
import Link from "next/link";
import * as Style from "./styles";

import api from "../../services/api";
import { useState, useEffect } from "react";

export default function RealStories() {
  const [story, setStory] = useState([]);
  useEffect(() => {
    api
      .get("https://kellek.com.br/wp-json/wp/v2/posts?categories=52")
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
  //const posts = realStory.realStory;
  return (
    <>
      {story.map((post) => (
        <div key={post.id}>
          <Link href={post.slug}>
            <a>
              <div>
                <section>
                  <ul>
                    <li>
                      <div>
                        <div>
                          <Image
                            src={post.yoast_head_json.og_image[0].url}
                            width={100}
                            height={100}
                          />
                        </div>
                        <div>
                          <span>
                            <strong>{post.title.rendered}</strong>
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </a>
          </Link>
        </div>
      ))}
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
