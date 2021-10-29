import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="d-flex justify-content-center align-center bg-dark text-light">
      <p>
        Created with <span>♥</span> by{" "}
        <Link
          to={{ pathname: "https://github.com/VladRafli" }}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          VladRafli
        </Link>{" "}
        and{" "}
        <Link
          to={{ pathname: "/" }}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Kwan
        </Link>
      </p>
    </footer>
  );
}
