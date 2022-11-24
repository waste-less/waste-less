import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "wouter-preact";
import "./button.css";
export default function Back() {
  return (
    <Link to="..">
      <RiArrowGoBackFill className="back-btn" size="2.5rem" />
    </Link>
  );
}
