import { useLocation } from "preact-iso";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <nav>
        <a href="/generator/" class={url == "/generator/" && "active"}>
          Home
        </a>
      </nav>
    </header>
  );
}
