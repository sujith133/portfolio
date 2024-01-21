import ProjectCards from '../ProjectCards'
import './index.css'

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      title: 'Jobby App',
      description: `Brought to life an all-encompassing job search platform, Jobby App.
 Created pages for Login, Home, Jobs, and Job item details with React components, form inputs, and
 event handlers.
 Secured user information with JWT tokens, REST API calls, and local storage.
 Utilized React Router for protected routes and persisted login state.`,
      image1:
        'https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/Screenshot%202024-01-15%20033203.png',
      image2:
        'https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/Screenshot%202024-01-15%20033243.png',
      image3:
        'https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/Screenshot%202024-01-15%20033407.png',

      techie: `React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token,
                Authorization, Authentication`,
      link: 'https://jobbyapp1610.ccbp.tech/',
    },
    {
      id: 2,
      title: 'Emoji Game',
      description: ` Developed responsive Emoji memory game where users can win it by clicking unique emoji each time till all
 displayed emojis are clicked. All emojis positions will be randomized after each click.
 List of Emojis is displayed by using React components, props , lists, conditional rendering, styled using
 CSS and randomized emojis placed using event listeners by updating react state.
 Updated different game states such as emojis list, winning state and losing state by using game state
 variable and conditional rendering.`,
      image1:
        'https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/Screenshot%202024-01-15%20033708.jpg',
      image2:
        'https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/Screenshot%202024-01-15%20033753.jpg',
      image3:
        'https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/Screenshot%202024-01-15%20033835.jpg',

      techie: 'React JS, CSS',
      link: 'https://theemojergame.ccbp.tech/',
    },

    {
      id: 3,
      title: 'Todos Application',
      description: `Developed persistent todo application with CRUD operations to track list of tasks
Displayed list of todos with HTML list elements, styled todo list using CSS, Bootstrap
 Implemented todo crud operations by using JavaScript event listeners and updated UI dynamically by
 using JavaScript DOM operations.
 UsedArrays, Objects and their methods during todolist CRUD Operations, Persisted todo list state on
 page reloads using local storage methods.`,
      image1:
        'https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/Screenshot%202024-01-15%20034000.jpg',
      image2:
        'https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/Screenshot%202024-01-15%20034155.jpg',
      image3:
        'https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/Screenshot%202024-01-15%20034319.jpg',

      techie: 'HTML, CSS, React JS',
      link: 'https://mytaskbox.ccbp.tech/',
    },
    {
      id: 4,
      title:
        'Analysis on different algorithms finding the Shortest path on a road network',
      description: `This is a project based on the analysis on different algorithms which gives the shortest paths from start point to
 endpoint on a road map.`,
      image1:
        'https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/WhatsApp%20Image%202024-01-15%20at%2003.51.37_49407e0f.jpg',
      image2:
        'https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/WhatsApp%20Image%202024-01-15%20at%2003.51.36_b0325bea.jpg',
      image3:
        'https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/WhatsApp%20Image%202024-01-15%20at%2003.51.36_49d6ff91.jpg',

      techie: 'Python, Pandas, ArcGIS',

      link: `https://github.com/sujith133/Emergency-Line-Services-and-Analysis-on-Different-Algorithms/`,
    },
    {
      id: 5,
      title: 'FastAPI Todo App',
      description: `This is a simple FastAPI application that allows you to manage Todo items. You can perform CRUD (Create, Read, Update, Delete) operations on Todo items using this application. The application uses an SQLite database to store Todo items.`,
      image1:
        'https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/WhatsApp%20Image%202023-10-14%20at%2019.19.52_5af1e394.jpg',
      image2:
        'https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/WhatsApp%20Image%202023-10-14%20at%2019.19.52_7953687d.jpg',
      image3:
        'https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/WhatsApp%20Image%202023-10-14%20at%2019.19.52_7b6df04d.jpg',
      techie: 'Python, SqlAlchemy',

      link: `https://github.com/sujith133/PythonFastAPI.git`,
    },
  ]
  console.log(projectsList)
  return (
    <div className="projectContainer" id="project">
      <h1>
        <span className="red">P</span>rojects
      </h1>
      <ul className="projectBlog">
        {projectsList.map(eachItem => (
          <ProjectCards projectDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}
export default Projects
