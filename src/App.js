import headshot from './pictures/Headshot.png'
function Headshot() {
  return <img src={headshot} alt="Headshot image" />
}
export default function Square() {
  return <div>
    <h1>Devan Neil</h1>
    <p1>
      This is a placeholder for my portfolio website.
      I am currently in the process of learning React to make this look better.
      "How do we change the world? One step at a time."
    </p1>
    <Headshot /> <br />
    <p2>
      <a href="https://github.com/devanneil" target="_blank" rel="noopener noreferrer">
        Visit my GitHub
      </a>
    </p2>
    <br />
    <p2>
      <a href="www.linkedin.com/in/devan-neil" target="_blank" rel="noopener noreferrer">
        Visit my LinkedIn
      </a>
    </p2>

  </div>
}