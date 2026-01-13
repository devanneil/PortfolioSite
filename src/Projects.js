import Robot from './pictures/robot.jpg'
import TitleBar from './titleBar'
import ContentBlock from './contentBlock'
import HMFrame from './pictures/HMFrame.png'
import Logo from './pictures/LogoSmall.png'
import LegoRobot from './pictures/LegoRobot.png'
import NAOPDF from './assets/Investigating the Correlation Between Robot Informality and Ability to Affect Patient Anxiety.docx.pdf'
export default function Projects() {
  return <div className='contentBody'>
    <TitleBar title="Project Gallery" details={"A comprehensive list of my engineering projects"} imageSrc={Robot} selectedPage="Projects" imageAlt="Headshot"/>
    <ContentBlock>
      <h1 className='sectionHeader' style={{ fontSize: '4rem'}}>Robotics Projects</h1>
      <p className='contentSection'>
        Projects listed by size and scope
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

    <ContentBlock image={Logo} imageAlt="The CAD for the Krap Shoot" caption='The CAD for the Paddock Pal V.2, this is not reflective of the final design'> 
      <div>
        <h1 className='sectionHeader'>Krap Shoot</h1>
        <p className='contentSection'>
          The Krap Shoot is my Capstone Design project. 
          Together with a team of 13 other engineering students, we are automating the process of paddock mucking.
          The more official name of this project is called the Paddock Pal V.2.
          The goal of this project is to automatically identify manure piles inside a paddock, clean them, and deposit the waste in a collection area.
          This project is in association with {" "}
          <a
            href="https://www.mines.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Longhopes Donkey Shelter 
          </a>
          {" "}and the {" "}
          <a
            href="https://www.mines.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Colorado School of Mines
          </a>.
          <br/><br/>
          When we first began this project we had the parts from V.1.
          V.1 was a similar project taken by previous teams, which was not able to be completed.
          The design of the Krap Shoot is a skid steer front wheel drive vehicle with a scoop on the front. 
          Attached is an image of our CAD, which I am not responsible for.
          <br/><br/>
          I am in charge of the software system. 
          In our team we have 2 robotics students, myself included, and a team of 3 software students who were in a field session program.
          Our Field Session team was tasked with building a pathfinding algorithm for our robot to handle navigation from point to point and planning the path to complete a job.
          It is my responsibility to manage communications between these teams, and to handle implementation of the various systems.
          <br/><br/>
          Our robot has LiDAR, GPS, IMU and a Camera.
          Using all of these Krap Shoot will be able to navigate a paddock and complete jobs autonomously.
          We use the GPS to track the boundaries of the paddock, or the working area.
          We use the LiDAR and the integrated IMU to handle tracking hazards, as paddocks are occupied, and for handling position feedback.
          <br/><br/>
          This project is still ongoing and is the capstone project for my engineering program.
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock image={LegoRobot} imageAlt='A robotic car made out of legos' caption='The robotic car for my robotics class, it has trapped itself'> 
      <div>
        <h1 className='sectionHeader' style={{ fontSize: '3rem'}}>Other Robotics Projects</h1>
        <h1 className='sectionHeader'>Lego Robotics</h1>
        <p className='contentSection'>
          As part of my robotics curriculum, I was tasked with building an arduino robot to solve a maze.
          This robot used mostly LEGO parts, along with an arduino, breadboard, 2 break beam sensors, a sonar sensor and an ir sensor.
          The goal was to navigate the maze grid autonomously.
          This goal was never achieved due to the flimsy nature of the parts, however I did learn about motor classification, sensor calibration and a maze navigation algorithm.
        </p>
        <h1 className='sectionHeader'>NAO Research Project</h1>
        <p className='contentSection'>
          As more of my robotics curriculum, I needed to study how robots can interact with humans in a more social setting.
          For this task my group was given the NAO robot.
          We attempted to apply the NAO robot to treat anxiety caused by healthcare.
          You can see our report below:
          <br/>
          <iframe title="PDF Report" src={NAOPDF} height="100%" width="30%">
            <p>Your browser does not support iframes. <a href="path/to/yourfile.pdf">Download the PDF</a> instead.</p>
          </iframe>
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock>
      <h1 className='sectionHeader' style={{ fontSize: '4rem'}}>Software Projects</h1>
      <p className='contentSection'>
        Quip goes here
      </p>
    </ContentBlock >

    <ContentBlock> 
      <div>
        <h1 className='sectionHeader'>Quantum Engine</h1>
        <p className='contentSection'>
          This is a placeholder for the projects section. Work in Progress.
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock> 
      <div>
        <h1 className='sectionHeader'>RoSE Lab</h1>
        <p className='contentSection'>
          This is a placeholder for the projects section. Work in Progress.
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock> 
      <div>
        <h1 className='sectionHeader'>VR Research</h1>
        <p className='contentSection'>
          This is a placeholder for the projects section. Work in Progress.
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock>
      <h1 className='sectionHeader' style={{ fontSize: '4rem'}}>Miscellaneous Projects</h1>
      <p className='contentSection'>
        A mostly comprehensive list of everything else, probably.
      </p>
    </ContentBlock >

    <ContentBlock> 
      <div>
        <h1 className='sectionHeader'>Freshman Design</h1>
        <p className='contentSection'>
          This is a placeholder for the projects section. Work in Progress.
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock> 
      <div>
        <h1 className='sectionHeader'>3D Printer Build</h1>
        <p className='contentSection'>
          This is a placeholder for the projects section. Work in Progress.
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock> 
      <div>
        <h1 className='sectionHeader'>Drone Build</h1>
        <p className='contentSection'>
          This is a placeholder for the projects section. Work in Progress.
        </p>
      </div>
      
    </ContentBlock>

  </div>
}