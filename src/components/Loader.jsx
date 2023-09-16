import ReactLoading from "react-loading";

const Loader = ({ type, color }) => (
  <ReactLoading
    type={type}
    color={color}
    height={200}
    width={100}
    className="flex justify-center items-center"
  />
);

export default Loader;
