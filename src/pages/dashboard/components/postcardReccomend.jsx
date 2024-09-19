import React from 'react';
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const PostCard = ({ author, daysAgo, title, description, imgSrc, readTime, destination }) => {
  return (
    <Link to={destination}>
    <button>
      <div className="flex justify-between bg-white p-4 rounded-lg items-center shadow-md mb-6">
        {/* Post content */}
          <div className="flex-grow pr-4">
              {/* Author and time */}
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>{author}</span>
                  <span>{daysAgo} days ago</span>
              </div>
              {/* Title */}
              <h2 className="text-lg text-justify font-semibold text-gray-900 mb-1">{title}</h2>

              {/* Description */}
              <p className="text-sm text-justify text-gray-600 mb-3">{description}</p>

              {/* Footer */}
              <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className='flex justify-left gap-4'>
                      <span>{readTime}</span>
                      <span>Selected for you</span>
                  </div>
                  <Link to="/dashboard/course"> {/*Ini Linknya nanti diganti sama fungsi bookmark*/}
                  <button>
                  <Icon
                      icon="material-symbols:bookmark-add-outline"
                      width="24"
                      height="24"
                      style={{ color: "#555555" }}
                      className="z-10 flex-shrink-0"
                  />
                  </button>
                  </Link> {/*Ini tutup Linknya, biar gk bingung nyari */}
              </div>
          </div>

        {/* Right side image */}
        <div className="flex-shrink-0">
          <img
            className="h-32 w-32 rounded-lg object-cover"
            src={imgSrc}
            alt={title}
          />
        </div>
      </div>
    </button>
    </Link>
  );
};

export default PostCard;
