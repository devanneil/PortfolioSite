import Robot from './pictures/robot.jpg'
import TitleBar from './titleBar'
import ContentBlock from './contentBlock'
import HMFrame from './pictures/HMFrame.png'
import Logo from './pictures/LogoSmall.png'
export default function Projects() {
  return <div className='contentBody'>
    <TitleBar title="Project Gallery" details={"A comprehensive list of my engineering projects"} imageSrc={Robot} selectedPage="Projects" imageAlt="Headshot"/>
    <ContentBlock>
      <h1 className='sectionHeader' style={{ fontSize: '4rem'}}>Robotics Projects</h1>
      <p className='contentSection'>
        Projects listed by size and interest
      </p>
    </ContentBlock >

    <ContentBlock  image={HMFrame} caption='Initial drawings of the Harvestman'>
      <h1 className='sectionHeader'>Harvestman Project</h1>
      <p className='contentSection'>
        The Harvestman project is a hexapod robot designed to navigate autonomously through rural and urban terrain.
        The goal of the Harvestman is to build a single modular robotic platform for doing research and automated processes.
        I also hope to use the Harvestman for educational resources.
        <br/> <br/>
        This project is still in its development phase. 
        I am entirely in charge of this project and am currently responsible for every design decision.
        As it stands I have the hardware to assemble the design pictured in figure 1.
        However I have determined that a redesign is required to proceed to make the robot easier to assemble at the cost of more parts.
        <br/> <br/>
        The inspiration for this locomotion system comes from biology, specifically insects. 
        While the Harvestman would be closer to a 'true bug' than an insect, hexapod robots are broadly called spiders.
        However, the Harvestman is not a spider. 
        Like its namesake, the harvestman spider (also called a daddy longlegs) it is often mistaken for a spider despite being biologically distinct.
        <br/><br/>
        Based on its inspiration, the Harvestman uses 6 legs to get around.
        While robots have been able to achieve similar results, see Boston Dynamics' Spot, 6 legs are going to be more balanced and enable vertical climbing over appropriate surfaces.
        Unfortunately, the Harvestman is a little heavier than an insect and thus will not be able to climb every surface.
        I plan on using a frame system to help the Harvestman navigate through a workspace.
        The unfortunate downside is the increased demands of an extra set of legs. 
      </p>
    </ContentBlock>

  <ContentBlock  image={Logo} caption='Current state of the Harvestman'>
      <h1 className='sectionHeader'>Next Steps</h1>
      <p className='contentSection'>
        As has been previously mentioned, there is a redesign in progress.
        I am hoping to reprint the parts I have in ABS, as the PLA plastic degrades in sunlight, which is not suitable for an outdoor robot.
        The redesign will remove the need for heatset inserts in the legs and will make the plastic interface directly with the servo gears.
        As it currently stands the servos hold screws which have several nuts to hold the leg in place with friction.
        While the intention was to allow me to calibrate the servo's home position, this feature is not useful practically.
        <br/><br/>
        While this redesign will produce a functional version 1, additional work will focus on manufacturing improvements. 
        I am already researching version 2, which aims to eliminate black-box servos and incorporate a fully weatherproof chassis.
        In this iteration, the actuators will be housed inside the chassis rather than on the legs. 
        The elbow joints will be driven using a rope-and-tackle system, while the shoulder joints will employ a three-axis mechanism.
        These changes will increase each leg's effective reach and enable the integration of tool heads for operational tasks, expanding the robot's functional capabilities.
        <br/><br/>
        Version 2 is currenlty being held off from initial prototypes, as I want to finish the version 1 and produce it as an educational kit.
        As was mentioned above, the Harvestman will be used in educational experiences.
        I want to be able to distribute the Harvestman as a kit which will teach high school and undergraduate students how robots work.
      </p>

    </ContentBlock>

    <ContentBlock> 
      <div>
        <h1 className='sectionHeader'>Simulation Verification</h1>
        <p className='contentSection'>
          This is a placeholder for the projects section. Work in Progress.
        </p>
      </div>
      
    </ContentBlock>

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