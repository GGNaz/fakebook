import React, { useState, useEffect } from "react";
import { shallow } from "zustand/shallow";
import { postStore } from "../../../Zustand/PostStore/PostStore";
import "../../../App.css";

function NewsFeedList() {
  const { post } = postStore((state) => state, shallow);
  const [isLoading, setLoading] = useState(true);
  const [showData, setShowData] = useState([]);

  const showRestructucre = () => {
    let isStore = [];

    post.map((data) => {
      const params = {
        ...data,
        isShow: false,
      };

      return isStore.push(params);
    });
    return setShowData(isStore);
  };
  const handleButtonClick = (index, isShow) => {
    let showHiddenData = [...showData];
    showHiddenData[index].isShow = !isShow;
    return setShowData(showHiddenData);
  };

  console.log("showData", showData);

  useEffect(() => {
    showRestructucre();
  }, [post]);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="flex flex-col gap-4">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        showData?.map((data, index) => {
          const {
            tags,
            body,
            comments,
            image,
            likes,
            createdAt,
            userData,
            isShow,
          } = data;
          return (
            <div className="flex flex-row bg-white rounded-xl p-3 gap-5">
              <img
                className="w-12 h-12 rounded-full"
                src={image}
                alt="kendall"
              />
              <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-1">
                      <div className="font-medium">{userData[0].fullName}</div>
                      <div className="mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-customlink"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-lightgray text-xs">{createdAt}</div>
                  </div>
                </div>
                <div className="flex flex-row gap-1">
                  {tags?.map(({ label }) => {
                    return (
                      <>
                        <div className="text-xs bg-gray-500/60 text-white px-2 rounded-full">
                          #{label}
                        </div>
                        {/* <div className='text-xs bg-gray-500/60 text-white px-2 rounded-full'>#model</div> */}
                      </>
                    );
                  })}
                </div>
                <p className="mt-5 text-sm text-justify">{body}</p>
                <div className="flex flex-row w-full gap-12">
                  <div className=" flex flex-row text-m mt-2 pl-2 gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                      />
                    </svg>
                    {likes.length}
                  </div>
                  <div className="flex flex-row text-m mt-2 gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    {comments.length}
                  </div>
                </div>
                <div className="flex flex-row w-full pt-2 gap-2">
                  <button className="flex flex-row gap-1 justify-center items-center bg-red-500/60 text-white py-1 px-4 shadow-lg rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 "
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                    <span className="text-sm ">Like</span>
                  </button>
                  <div>
                    <button
                      className="flex flex-row gap-1 justify-center items-center bg-green-700/60 text-white py-1 px-4 shadow-lg rounded-full"
                      onClick={() => {
                        handleButtonClick(index, isShow);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">Comment</span>
                    </button>
                  </div>
                </div>

                {isShow && (
                  <>
                    {comments.length ? (
                      <div className="scrollable-container h-64 overflow-y-scroll fullName">
                        {comments.map((data, index) => {
                          console.log("data.createdAt", data);
                          const date = new Date(data.createdAt);
                          const now = new Date();
                          const diffTime = Math.abs(now - date);
                          const diffDays = Math.ceil(
                            diffTime / (1000 * 60 * 60 * 24)
                          );
                          return (
                            <div
                              key={index}
                              className="bg-slate-50 rounded-lg p-4 my-4"
                            >
                              <p className="text-gray-800 font-bold">
                                {data.user.fullName}
                              </p>
                              <p className="text-gray-600">{data.body}</p>
                              <p className="text-gray-600 text-xs">
                                5 days ago
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-gray-600 text-center p-4">
                        {" "}
                        No comments Yet...
                      </div>
                    )}
                    <form class="w-full  rounded-lg border mt-2">
                      <div class="">
                        <textarea
                          placeholder="Write a comment..."
                          class="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                        ></textarea>
                      </div>
                      <div class="flex justify-end px-4">
                        <input
                          type="submit"
                          class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
                          value="Comment"
                        />
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default NewsFeedList;
