import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { appwriteService } from "../Appwrite/Config";
import { _Container, PostForm } from "../components";

export default function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        
        if (slug) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <_Container>
        <PostForm post={post} />
      </_Container>
    </div>
  ) : null;
}
