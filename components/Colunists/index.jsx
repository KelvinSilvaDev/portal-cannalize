import Image from "next/image";
import Link from "next/link";

import api from "../../services/api";

export default function Colunists(colunist) {
  const colArr = colunist.colunist;
  return (
    <>
      {colArr.map((colunista) => (
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
                      <p>{colunista.description}</p>
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
