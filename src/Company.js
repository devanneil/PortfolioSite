import TitleBar from './titleBar'
import Logo from './pictures/LogoSmall.png'
import ContentBlock from './contentBlock'
export default function Company() {
  return <div className='contentBody'>
    <TitleBar selectedPage='3D Neil Tech' imageSrc={Logo}/>
    <ContentBlock image={Logo} imageAlt='A placeholder image' caption='A placeholder image'> 
      <div>
        <h1 className='sectionHeader'>
        3D Neil Tech
        </h1>
        <p className='contentSection'>
        This is currently a placeholder, soon we will have contact information and the information you'll need to place an order
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