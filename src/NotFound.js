import TitleBar from './titleBar'
import ContentBlock from './contentBlock'
export default function NotFound() {
  return <div className='contentBody'>
    <TitleBar/>
    <ContentBlock>
      <h1 className='sectionHeader'>404 - Page not Found</h1>
      <p className='contentSection'> The page you are looking for is not found here. Try the navigation menu above to read all about me.</p>
    </ContentBlock>

  </div>
}