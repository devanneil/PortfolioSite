import headshot from './pictures/Headshot.png'
import full from './pictures/SelfFull.jpg'
import TitleBar from './titleBar'
import ContentBlock from './contentBlock'
import Printer from './pictures/3DPrinter.png'
import Headshot2 from './pictures/Headshot2.png'
export default function Home() {
  return <div className='contentBody'>
    <TitleBar title="Devan Neil" details={<q>How do we change the world? One step at a time.</q>} imageSrc={headshot} selectedPage="Home" imageAlt="Headshot"/>
    <ContentBlock image={full} imageAlt='An image of myself with mountains in the background'> 
      <div>
        <h1 className='sectionHeader'>
        About Me
        </h1>
        <p className='contentSection'>
         My name is Devan Neil. I am pursuing an undergraduate degree in
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

    <ContentBlock image={Printer} imageAlt='3D Printer' caption='My first 3D printer which accumulated well over 2,000 running hours'> 
      <div>
        <h1 className='sectionHeader'>
        Why I Do What I Do
        </h1>
        <p className='contentSection'>
        I come from a rural mountain town in Western Colorado where I can see the stars nearly every night.
        This is a big part of my motivation to be involved with space exploration.
        <br /><br />
        Community is very important to me.
        My hometown and the people who supported me will always hold a special place in my heart.
        I'm very grateful for every opportunity that has come my way and has given me the chance to pursue this future.
        I look forward to the chance to pay it forward.
        <br/><br/>
        Please, check out the project section of this website to see my project experience.
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock image={Headshot2} imageAlt='A second headshot of myself'> 
      <div>
        <h1 className='sectionHeader'>
        Next Steps
        </h1>
        <p className='contentSection'>
        Looking ahead, I'm pursuing computer science as I believe it is the best way to get into mechantronics.
        Mechatronics, being the combination of computer science, electrical engineering, and mechanical engineering, is the foundation of robotics.
        I plan to earn my Fundamentals of Engineering in Electrical and Computer Science and eventually obtain a full Professional Engineering License.
        I am pursuing a career in robotics or in space exploration where I can work on my goal of getting a Professional Engineering License along with practical work experiences.
        <br /><br />
        As for 3D Neil Tech, I want to work on producing kits and tools for the Harvestman Project, where you can see more in the Projects section.
        I want to prioritize educational material, where customers can do hands on work with the Harvestman to learn about robotics.
        I'm hoping to experiment with automatic gardening technology, and this is a driving force in the design of the Harvestman.
        </p>
      </div>
      
    </ContentBlock>

  </div>
}