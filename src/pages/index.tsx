import preactLogo from "../../assets/preact.svg";
import "./style.css";

export function Home() {
  return (
    <div class="home">
      <h1>Content</h1>
      <a href="/tellraw">Tellraw from JSON to SNBT</a>
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}
