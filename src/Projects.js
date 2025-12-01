import headshot from './pictures/Headshot.png'
import TitleBar from './titleBar'

export default function Projects() {
  return <div className='contentBody'>
    <TitleBar title="Project Gallery" details={<q>How do we change the world? One step at a time.</q>} imageSrc={headshot} selectedPage="Projects" imageAlt="Headshot"/>
    <p>
      This is a placeholder for my portfolio website.
      I am currently in the process of learning React to make this look better.
      "How do we change the world? One step at a time."
    </p>
    <p>
      <a href="https://github.com/devanneil" target="_blank" rel="noopener noreferrer">
        Visit my GitHub
      </a>
    </p>
    <br />
    <p>
      <a href="www.linkedin.com/in/devan-neil" target="_blank" rel="noopener noreferrer">
        Visit my LinkedIn
      </a>
    </p>

  </div>
}