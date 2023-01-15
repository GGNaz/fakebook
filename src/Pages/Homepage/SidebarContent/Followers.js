function Followers() {
    let followers = [
        {
            img: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
            name: "Lycase Gray",
            userid: "lygray"
        },
        {
            img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
            name: "Dave Burn",
            userid: "dburn"
        },
        {
            img: "https://image.tmdb.org/t/p/w235_and_h235_face/qmfW0VBlO1athYYVeW8fq4tPKqd.jpg",
            name: "Rera Ice",
            userid: "reeera"
        },
        {
            img: "https://www.justheadshots.photo/wp-content/uploads/2020/06/Colourful-background-headshots-001.jpg",
            name: "Karen Cheese",
            userid: "krncheese"
        },
    ]
    return (
        <div className="flex flex-col bg-white rounded-xl p-3 gap-5">
            <div className="font-medium text-base ">
                Who is following you
            </div>
            <div className="flex flex-col gap-2">
                {/* START MAP FOLLOWERS */}
                {
                    followers?.map((data) => {
                        const { img, name, userid } = data
                        return (
                            <div className="flex flex-row justify-between gap-2">
                                <div className="flex flex-row gap-3">
                                    <img src={img} alt={name} className="rounded-full h-12 w-12" />
                                    <div className="flex flex-col">
                                        <div>{name}</div>
                                        <div className="text-lightgray text-sm">{`@${userid}`}</div>
                                    </div>
                                </div>
                                <div className="flex justify-end items-center">
                                    <button className="bg-customlink text-white px-4 py-1 rounded-full">Follow</button>
                                </div>
                            </div>
                        )
                    })
                }
                {/* END OF FOLLOWERS MAP */}
            </div>
            <div>
                {/* START FUNCTION SHOW ALL FOLLOWERS */}
                <button className="text-customlink text-sm">Show More</button>
                 {/* END FUNCTION SHOW ALL FOLLOWERS */}
            </div>
      </div>
    );
  }
  
  export default Followers;
  