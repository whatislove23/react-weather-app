export default () => {
  return (
    <div className="container sm mx-auto ">
      <div className=" mt-40 rounded-xl text-center flex flex-col items-center">
        <h1 className="text-5xl animate-pulse mb-5">Loading...</h1>
        <img
          src="https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png"
          alt=""
          className="my-5 block animate-spin"
        />
      </div>
    </div>
  );
};
