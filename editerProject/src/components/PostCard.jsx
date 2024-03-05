import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../Appwrite/Config";
export default function PostCard({ $id, title, content, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="rounded-xl"
        />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
    </Link>
  );
}
