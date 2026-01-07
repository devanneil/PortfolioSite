import headshot from './pictures/Headshot.png'
import TitleBar from './titleBar'
import ContentBlock from './contentBlock'
import githubLogo from './pictures/githubLogoClear.png'
import linkedInLogo from './pictures/linkedInLogo.png'
export default function Contact() {
  return <div className='contentBody'>
    <TitleBar title="Contact Info" details="Contact and Social Media" imageSrc={headshot} selectedPage="Contact" imageAlt="Headshot"/>
    <ContentBlock> 
      <h1 className='sectionHeader'>
        Contact Information
      </h1>
      <p className='contentSection'>
        Email: devanneil2004@gmail.com
      </p>
      <p className='contentSection'>
        See the links below for my github and social media.
      </p>
    </ContentBlock>
    <div className='imageRow'>
      <a href="https://github.com/devanneil" target="_blank" rel="noopener noreferrer">
        <img className='imageLink' src={githubLogo} alt="The github logo"></img>
      </a>
      <a href="www.linkedin.com/in/devan-neil" target="_blank" rel="noopener noreferrer">
        <img className='imageLink' src={linkedInLogo} alt="The linkedIn logo"></img>
      </a>
    </div>
  </div>
}