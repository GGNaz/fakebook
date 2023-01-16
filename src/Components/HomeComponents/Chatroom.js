import { useState } from "react";

function Chatroom() {
  const [openChatbox, setChatBox] = useState(false);
  const renderChatBox = () => {
    return (
      <>
        {openChatbox && (
          <div className="fixed right-20 bottom-10 py-5">
            <div className="flex flex-col bg-white drop-shadow-lg h-[50vh] w-80  rounded-t-2xl rounded-bl-2xl">
              <div className="bg-customlink rounded-t-2xl p-2 flex justify-between">
                <div className="flex flex-row gap-2">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://www.petspyjamas.com/uploads/2017/08/dieny-portinanni-3rOblFpwE7s-unsplash.jpg"
                    alt="profilePic"
                  />
                  <div className="text-white flex items-center text-sm">
                    Binang Sulpeng
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center pr-2">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-white"
                    >
                      <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="h-[36vh] flex flex-col justify-end">
                <div className="flex justify-end p-2">
                  <div className="flex flex-col">
                    <div className="bg-customlink text-white p-2 rounded-t-2xl rounded-bl-2xl text-sm">Good Morning!</div>
                    <div className="text-xs flex justify-end text-lightgray">
                    8:42am
                  </div> 
                  </div>
                  {/* <div>
                    8:42am
                  </div> */}
                </div>
              </div>
              <div className="flex just items-center border-t">
                <input type="text" placeholder="type something..." className="basis-4/5 focus: outline-none p-2 bg-transparent" />
                <button className="flex justify-center items-center basis-1/5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-customlink">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>

                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  return (
    <div>
      {renderChatBox()}
      <div className="fixed right-0 bottom-0 p-5">
        <button
          className="bg-customlink p-3 rounded-full drop-shadow-lg hover:animate-bounce duration-300"
          onClick={() => setChatBox(!openChatbox)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Chatroom;
