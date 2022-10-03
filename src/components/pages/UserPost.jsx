import Default from "../templates/Default";

import user3 from "../../images/placeholders/user-3.jpg";
import post1 from "../../images/placeholders/post-1.jpg";

export default function UserPost() {
  return (
    <Default>
      <div className="user-post">
        <h2 className="user-post__post-title">Usando React como SPA</h2>
        <div className="user-post__post-date">
          Publicado em 14/06/2022 por
          <img src={user3} className="avatar" alt="" />
          <strong> Chris Hudson</strong>
        </div>
        <div className="user-post__post-photo">
          <img src={post1} className="responsive" alt="" />
        </div>
        <div className="user-post__post-content">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classNameical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock, a Latin professor
          at Hampden-Sydney College in Virginia, looked up one of the more
          obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classNameical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
          on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
          a line in section 1.10.32.
        </div>
      </div>
    </Default>
  );
}
