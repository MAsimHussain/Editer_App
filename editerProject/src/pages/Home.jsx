import React, { useEffect, useState } from "react";
import {appwriteService} from "../Appwrite/Config";
import { _Container, PostCard } from "../components";
export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <_Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </_Container>
      </div>
    );
  }
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
