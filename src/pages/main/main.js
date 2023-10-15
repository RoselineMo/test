import {getDocs, collection} from "firebase/firestore";
import {useEffect, useState} from "react";
import {db} from "../../config/firebase";
import {Post} from "./post";

export const Main = () => {
  const [postsList, setPostsList] = useState(null);
  const postsReference = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsReference);
    setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  };

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {postsList?.map((post) => (
        <Post post={post}/>
      ))}
    </div>
  );
};
