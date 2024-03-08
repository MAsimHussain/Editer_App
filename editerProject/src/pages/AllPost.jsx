import React, { useEffect, useState } from "react";
import {appwriteService} from "../Appwrite/Config";
import { PostCard ,_Container} from "../components/index";



export default function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((post) => {
      if (post) {
        setPosts(post.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <_Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="className='p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </_Container>
    </div>
  );
}
