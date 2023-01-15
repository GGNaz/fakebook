import { useState } from "react";
import user from "../../../Assets/png/user.png";

function UploadForm() {
  const [showTextArea, setShowTextArea] = useState(false);
  let uploadButtonList = [
    {
      name: "Photo",
      path1: "M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z",
      path2:
        "M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z",
      function: () => {},
      iconColor: "text-[#20DA97]"
    },
    {
      name: "Video",
      path1: null,
      path2: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z",
      function: () => {},
      iconColor: "text-[#4B93FF]"
    },
    {
      name: "Thread",
      path1: null,
      path2: "M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z",
      function: () => {},
      iconColor: "text-[#FF6A6A]"
    },
    {
      name: "Schedule",
      path1: "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z",
      path2: "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z",
      function: () => {},
      iconColor: "text-[#F9C052]"
    }
  ];


  return (
    <div className="flex flex-row bg-white rounded-xl p-3 gap-5">
      <img src={user} alt="userImg" className="h-12 w-12 rounded-full" />
      <div className="flex flex-col w-full">
        {showTextArea ? (
          <textarea
            className="border focus:outline-none p-2 rounded-md w-full"
            rows={5}
            placeholder="What's on your mind, Nazer?"
          />
        ) : (
          <input
            onClick={() => setShowTextArea(true)}
            type="text"
            className="border focus:outline-none p-2 rounded-md w-full"
            placeholder="What's on your mind, Nazer?"
          />
        )}
        <div className="flex flex-row gap-2 py-2">
          {
            uploadButtonList?.map((data) => {
              const { name, path1, path2, iconColor  } = data;
              return (
                <button className="flex flex-row gap-2 border rounded-full px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`${iconColor} w-5 h-5`}
                >
                  {
                    path1&&<path d={path1} />
                  }
                  <path fill-rule="evenodd" d={path2} clip-rule="evenodd" />
                </svg>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clip-rule="evenodd"
                  />
                </svg> */}
    
                <span className="text-sm">{name}</span>
              </button>
              )
            })
          }
          {showTextArea&&<button className="bg-customlink text-white w-full rounded-full focus:outline-none">Post</button>}
        </div>
       
      </div>
    </div>
  );
}

export default UploadForm;
