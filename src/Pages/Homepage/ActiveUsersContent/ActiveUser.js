import React, { useState } from "react";

function ActiveUser() {
  const [showSearchField, setShowSearchField] = useState(false);
  const btnClickShowSearch = () => {
    return (
      <>
        {showSearchField && (
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="border w-full p-2 focus:outline-none rounded-md"
            />
          </div>
        )}
      </>
    );
  };

  let activeList = [
    {
      name: "Dagul smith",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      name: "Abdul Salam",
      image:
        "https://media.istockphoto.com/id/1247693957/photo/young-handsome-guy-wearing-white-t-shirt-and-round-glasses-feeling-confident-and-smiling.jpg?s=170667a&w=0&k=20&c=lLTyuaJKHdrEFU1lIvLv-g8xVPS3YwhULrepYWgaPck=",
    },
    {
      name: "Yamete Oni",
      image:
        "https://i.etsystatic.com/31450520/r/il/ac5bf8/3687169626/il_fullxfull.3687169626_ma6m.jpg",
    },
    {
      name: "Yamete Oni",
      image:
        "https://i.etsystatic.com/31450520/r/il/ac5bf8/3687169626/il_fullxfull.3687169626_ma6m.jpg",
    },
    {
      name: "Yamete Oni",
      image:
        "https://i.etsystatic.com/31450520/r/il/ac5bf8/3687169626/il_fullxfull.3687169626_ma6m.jpg",
    },
    {
      name: "Yamete Oni",
      image:
        "https://i.etsystatic.com/31450520/r/il/ac5bf8/3687169626/il_fullxfull.3687169626_ma6m.jpg",
    },
  ];
  return (
    <div className="flex flex-col bg-white rounded-xl p-3 gap-5 dark:bg-slate-800">
      <div className="flex flex-row justify-between">
        <div className="font-medium text-base dark:text-dirtywhite ">Contacts</div>
        <div className="flex flex-row gap-2">
          <button onClick={() => setShowSearchField(!showSearchField)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 dark:text-dirtywhite"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" dark:text-dirtywhite w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {btnClickShowSearch()}
        <div className="flex flex-col gap-4">
          {activeList?.map(({ name, image }, index) => (
            <div
              key={index}
              className="flex flex-row gap-2 items-center justify-between"
            >
              <div className="flex flex-row gap-2 items-center ">
                <img className="h-8 w-8 rounded-full" src={image} alt={name} />
                <div className="text-sm dark:text-dirtywhite">{name}</div>
              </div>
              <div className="flex items-center">
                <li className="text-green-500 text-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActiveUser;
