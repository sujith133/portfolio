import './index.css'

const Skills = () => {
  const dictsv = [
    {language: 'Python', value: 70},
    {language: 'JavaSript', value: 60},
    {language: 'React', value: 60},
    {language: 'Node', value: 50},
    {language: 'HTML5', value: 75},
    {language: 'CSS', value: 65},
    {language: 'SQL', value: 70},
  ]

  return (
    <div className="skillContainer" id="skills">
      <h1>
        <span className="red">S</span>kills
      </h1>
      <div className="rowCont">
        {dictsv.map(eachItem => {
          const multiplier = eachItem.value / 100
          const dashArray = 2 * 40 * 3.14159265359
          const offSet = dashArray * multiplier
          const outCome = dashArray - offSet
          return (
            <div key={eachItem.language} className="percentage">
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <text
                  x="50%"
                  y="50%"
                  className="pos"
                  textAnchor="middle"
                  dy="0.3em"
                  fontSize="20"
                  fill="#fff"
                >
                  {eachItem.value}%
                </text>
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#3498db"
                  strokeWidth="8"
                  strokeDasharray={dashArray}
                  strokeDashoffset={outCome}
                />
              </svg>
              <p>
                <span className="red">{eachItem.language[0]}</span>
                {eachItem.language.substring(1)}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
