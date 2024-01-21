import {MdOutlineLink} from 'react-icons/md'
import Carousel from '../Carousel'

import './index.css'

const ProjectCards = props => {
  const {projectDetails} = props
  console.log(projectDetails)
  const {title} = projectDetails
  return (
    <li className="listItem sizer" id={projectDetails.id}>
      <h3>
        <span className="red">{projectDetails.title[0]}</span>
        {title.substring(1)}
      </h3>
      <Carousel carouselData={projectDetails} />
      <p>
        <span className="red">Description : </span>
        {projectDetails.description}
      </p>
      <p>
        <span className="red">Technologies : </span>
        {projectDetails.techie}
      </p>
      <a href={projectDetails.link}>
        <span className="red">
          ProjectLink <MdOutlineLink />
        </span>
      </a>
    </li>
  )
}
export default ProjectCards
