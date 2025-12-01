import TitleBar from './titleBar'
import Logo from './pictures/LogoSmall.png'

export default function Company() {
  return <div className='contentBody'>
    <TitleBar selectedPage='3D Neil Tech' imageSrc={Logo}/>
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