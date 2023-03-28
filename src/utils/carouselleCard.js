function CarousselImg(props) {
  return (
    <>
      <div className="first-choice">
        <img
          alt=""
          src={props.img}
          style={{ width: "250px", height: "140px" }}
        />
        <div className="text-block">
          <h2>{props.name}</h2>
        </div>
      </div>
    </>
  );
}
export default CarousselImg;
