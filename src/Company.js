import TitleBar from './titleBar'
import Logo from './pictures/LogoSmall.png'
import ContentBlock from './contentBlock'
export default function Company() {
  return <div className='contentBody'>
    <TitleBar selectedPage='3D Neil Tech' imageSrc={Logo}/>
    <ContentBlock image={Logo} imageAlt='This will hold the actual logo' caption='A placeholder image'> 
      <div>
        <h1 className='sectionHeader'>
        3D Neil Tech
        </h1>
        <p className='contentSection'>
        This is currently a placeholder, soon we will have contact information and the information you'll need to place an order
        <br /><br />
        Currently 3D Neil Tech isn't much more than a name, it started when I was in 7th grade learning how 3D printers work.
        I loved the ability to create anything from an idea and I wanted to produce toys for my community.
        I only ever did one toy, but my biggest market was medical PPE.
        During the Covid-19 pandemic I was tasked with manufacturing over 200 plastic face shields for my community. 
        Using the single printer I had I 3D printed a headband piece and attached foam protection and a plastic face shield. 
        I distributed these face shields to my community to help keep critical healthcare infrastructure running.
        I was even able to send 50 of these masks to a part of the Colorado state government. 
        </p>
      </div>
    </ContentBlock>

    <ContentBlock image={Logo} imageAlt='A placeholder image' caption='A placeholder image'> 
      <div>
        <h1 className='sectionHeader'>
        The Future
        </h1>
        <p className='contentSection'>
        In the next few months 3D Neil Tech will be developing a full robotics curriculum for the Harvestman Project.
        This will be distributed, along with Harvestman kits, to high school students to teach the basics of robotics.
        The goal is to provide educational resources to students who would not otherwise get the chance to learn about robotics.
        <br/><br/>
        Additionally, 3D Neil Tech will regain some manufacturing capabilities to 3D print parts using a new printer, which is currently in pieces on my desk.
        While I do not hope to compete with print farms, I do believe I'll be able to use this capacity to quickly develop autonomous applications for the Harvestman Project.
        As was mentioned above, I hope to begin research into automated gardening by next spring (2027).
        </p>
      </div>
    </ContentBlock>

  </div>
}