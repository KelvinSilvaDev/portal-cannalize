import Image from "next/image";
import Link from "next/link";
import * as Style from "./styles";

import api from "../../services/api";
import { useEffect, useState } from "react";

export default function Colunists() {
  const [colunist, setColunist] = useState([]);
  useEffect(() => {
    api
      .get(
        "https://kellek.com.br/wp-json/wp/v2/users?per_page=5&offset=1&_embed"
      ) //roles=author&
      .then((res) => {
        // api
        //   .get(`https://kellek.com.br/wp-json/wp/v2/users/${res[0].author}`)
        //   .then((response) => setAutor(response.data.name));
        return res.data;
      })
      .then((response) => {
        setColunist(response);
        return response;
      });
  }, []);
  //const colArr = colunist.colunist;
  return (
    <>
      {colunist.map((colunista) => (
        <div key={colunista.id}>
          <div>
            <section>
              <ul>
                <li>
                  <div>
                    <div>
                      <Image
                        src={colunista.yoast_head_json.og_image[0].url}
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <div>
                        <Style.AutorContent>
                          {colunista.description}
                        </Style.AutorContent>
                      </div>
                      <span>
                        <strong>{colunista.name}</strong>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
            <Link href="/">
              <a>Leia mais</a>
            </Link>
          </div>
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
