import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const NavMenu = () => {
  return (
    <div className="flex justify-between p-2">
      <div className="flex gap-4 items-center">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/student" className="[&.active]:font-bold">
          Student
        </Link>
        <Link to="/teacher" className="[&.active]:font-bold">
          Teacher
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>

      <Link to="/login">
        <Button className="self-end">Login</Button>
      </Link>
    </div>
  );
};
