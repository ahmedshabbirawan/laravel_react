function DeveloperCard({ name, role, experience, skills }) {
    return (
      <div>
        <h1>Developer Information</h1>
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>Experience: {experience} years</p>
        <p>Skills: {skills}</p>
      </div>
    )
  }
  
  export default DeveloperCard