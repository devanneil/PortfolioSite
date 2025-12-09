import headshot from './pictures/Headshot.png'
import TitleBar from './titleBar'
import ContentBlock from './contentBlock'
import Logo from './pictures/LogoSmall.png'
export default function Home() {
  return <div className='contentBody'>
    <TitleBar title="Devan Neil" details={<q>How do we change the world? One step at a time.</q>} imageSrc={headshot} selectedPage="Home" imageAlt="Headshot"/>
    <ContentBlock image={headshot} caption='Here lies ghosts'> 
      <p> 
        This is a placeholder for my portfolio website.
        I am currently in the process of learning React to make this look better.
        "How do we make this look better? One .css at a time..."
      </p>
    </ContentBlock>
    <ContentBlock image={Logo} caption='Here lies ghosts'> 
      <p> 
        This is a placeholder for my portfolio website.
        I am currently in the process of learning React to make this look better.
        "How do we make this look better? One .css at a time... 
        Words are pretty cool we like words words are so neat and fascinating. 
        I'm trying to fill some space here. testing testing testing
        Your not gonna believe how creative I can be.
        I need to add more words and find out if wrapping appears to work at all"
      </p>
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