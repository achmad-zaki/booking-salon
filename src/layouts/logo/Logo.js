import Link from "next/link";

const Logo = (props) => {
  return (
    <span className={`text-center text-decoration-none ${props.textColor} text-uppercase fs-2 fw-bold`}>
      Salon Stikom
    </span>
  );
};

export default Logo;
