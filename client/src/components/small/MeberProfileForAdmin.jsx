const MemberProfileForAdmin = ({
  name,
  year,
  contact,
  since,
  deleteHandler,
}) => {
  return (
    <>
      <div className="px-4 py-4 flex items-center bg-gray-500 rounded-xl px-5 py-5">
        <div className="w-[80%] grid grid-cols-2 gap-y-5 ">
          <p className="text-[20px] text-slate-100">
            Name : <span className="text-[18px] text-slate-200">{name}</span>
          </p>
          <p className="text-[20px] text-slate-100">
            Year : <span className="text-[18px] text-slate-200">{year}</span>
          </p>
          <p className="text-[20px] text-slate-100">
            Contact :{" "}
            <span className="text-[18px] text-slate-200">{contact}</span>
          </p>
          <p className="text-[20px] text-slate-100">
            Since : <span className="text-[18px] text-slate-200">{since}</span>
          </p>
        </div>
        <button
          className="bg-red-700 py-3 px-4 rounded-full text-white"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default MemberProfileForAdmin;
