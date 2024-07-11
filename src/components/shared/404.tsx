import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import Error from "../../assets/Images/Error.jpg"

const NotFound = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      <img src={Error} alt="Error" height={500} width={600} />
      <NavLink to="/">
        <Button className="bg-red-500 text-white hover:text-white">Go to Home</Button>
      </NavLink>
    </div>
  );
};

export default NotFound;
