import user from "../../../Assets/png/user.png";

function Profile() {
  return (
    <div className="flex flex-col bg-white rounded-xl">
      {/* START TAG COVER PHOTO */}
      <div className="">
        <img
          src="https://png.pngtree.com/background/20210709/original/pngtree-shading-background-abstract-colorful-background-colorful-art-picture-image_938007.jpg"
          alt="coverImg"
          className="h-20 w-full rounded-t-xl"
        />
      </div>
      {/* END TAG COVER PHOTO */}

      {/* START TAG PROFILE PICTURE */}
      <div className="flex justify-center">
        <img
          src={user}
          alt="userImg"
          className="h-16 w-16 -mt-8 rounded-full"
        />
      </div>
      {/* END TAG PROFILE PICTURE */}

      {/* START TAG PROFILE DETAILS */}
      <div className="flex flex-col justify-center items-center">
        <div className="font-medium text-base">Nazer Somera</div>
        <div className="text-lightgray text-sm">{`@nazsmra`}</div>
      </div>
      {/* END TAG PROFILE DETAILS */}

      {/* START TAG FOLLOWER AND FOLLOWING DETAILS */}
      <div className="flex flex-row justify-center  mt-5">
        <div className="flex flex-col w-full items-center border-y-2 border-r-2 py-2">
          <div className="text-sm font-medium">6,287</div>
          <div className="text-sm text-lightgray">Following</div>
        </div>
        <div className="flex flex-col  w-full items-center border-y-2  py-2">
          <div className="text-sm font-medium">6,287</div>
          <div className="text-sm text-lightgray">Followers</div>
        </div>
      </div>
      {/*  START TAG FOLLOWER AND FOLLOWING DETAILS */}

      {/* START TAG PROFILE BUTTON */}
      <div className="flex flex-col justify-center items-center py-5">
        <button className="text-customlink text-sm">My Profile</button>
      </div>
      {/* END TAG PROFILE BUTTON */}
    </div>
  );
}

export default Profile;
