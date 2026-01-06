import headshot from './pictures/Headshot.png'
import full from './pictures/SelfFull.jpg'
import TitleBar from './titleBar'
import ContentBlock from './contentBlock'
import Logo from './pictures/LogoSmall.png'
export default function Home() {
  return <div className='contentBody'>
    <TitleBar title="Devan Neil" details={<q>How do we change the world? One step at a time.</q>} imageSrc={headshot} selectedPage="Home" imageAlt="Headshot"/>
    <ContentBlock image={full} imageAlt='An image of myself with mountains in the background'> 
      <div>
        <h1 className='sectionHeader'>
        About Me
        </h1>
        <p className='contentSection'>
         My name is Devan Neil. I am currently pursuing an undergraduate degree in
        Computer Science at the{" "}
        <a
          href="https://www.mines.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Colorado School of Mines
        </a>
        , with an emphasis in Robotics and Intelligence Systems and a minor in
        Aerospace Engineering.

        <br /><br />

        I am passionate about robotics and space exploration, and I hope to pursue a
        career in these fields. I am a hands-on learner who enjoys building systems
        and developing practical solutions through project-based work.

        <br /><br />

        This site serves as a collection of my projects, experiences, and technical
        interests.

        </p>
      </div>
    </ContentBlock>

    <ContentBlock image={Logo} imageAlt='A placeholder image' caption='A placeholder image'> 
      <div>
        <h1 className='sectionHeader'>
        Why I Do What I Do
        </h1>
        <p className='contentSection'>
        I come from a rural mountain town in Western Colorado where I can see the stars nearly every night.
        This is a big part of my motivations to be involved with space exploration.
        I've always been fascinated with the stars.
        Some day it is my dream to build an aerospace company in my home town and to give my community the chance to be a part of it.
        <br /><br />
        This leads me to 3D Neil Tech.
        Currently 3D Neil Tech isn't much more than a name, it started when I was in 7th grade learning how 3D printers work.
        I loved the ability to create anything from an idea and I wanted to produce toys for my community.
        Ironically I only every did one toy, and it was making a custom halter for a toy horse, but my biggest market was medical PPE.
        During the Covid-19 Pandemic I was tasked with manufacturing over 200 plastic face shields for my community. 
        Using the single printer I had I 3D printed a headband piece and attached foam protection and a plastic face shield. 
        I was able to distribute these face shields to my community to help keep critical healthcare infrastructure running.
        I was even able to send 50 of these masks to a part of the Colorado state government. 
        <br /><br />
        All of this to say, community is very important to me.
        Where I come from and the people who got me here are always going to be close to my heart. 
        I'm very grateful for every opportunity that has come my way and has given me the chance to pursue this future.
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock image={Logo} imageAlt='A placeholder image' caption='A placeholder image'> 
      <div>
        <h1 className='sectionHeader'>
        Next Steps
        </h1>
        <p className='contentSection'>
        Going forward in time, I'm pursuing computer science as I believe it is the field where the most growth is happening in mechatronics.
        Mechatronics, being the combination of computer science, electrical engineering, and mechanical engineering, is the foundation of robotics.
        I want to pursue getting my Fundamentals of Engineering in Electrical and Computer Science and work towards getting my full Professional Engineering License.
        I am hoping to find a career in robotics or in space exploration where I can work on my goal of getting a PE along with practical work experiences.
        <br /><br />
        As for 3D Neil Tech, I want to work on producing kits and tools for the Harvestman Project, where you can see more in the Projects section.
        I want to prioritize educational material, where customers can do hands on work with the Harvestman to learn about robotics.
        I'm hoping to experiment with automatic gardening technology, and this is a driving force in the design of the Harvestman.
        </p>
      </div>
      
    </ContentBlock>

  </div>
}