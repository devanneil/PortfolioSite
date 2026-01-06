import headshot from './pictures/Headshot.png'
import TitleBar from './titleBar'
import ContentBlock from './contentBlock'
export default function Projects() {
  return <div className='contentBody'>
    <TitleBar title="Project Gallery" details={<q>How do we change the world? One step at a time.</q>} imageSrc={headshot} selectedPage="Projects" imageAlt="Headshot"/>
    <ContentBlock> 
      <div>
        <p className='contentSection'>
          This is a placeholder for the projects section. Work in Progress.
        </p>
      </div>
      
    </ContentBlock>
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