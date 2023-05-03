
import { useFeatchedData } from './FeatchProject';

const Project = ()=>{


    const {loading,project} = useFeatchedData()

    

    console.log(project);


    if(loading){
        return(
            <section className="projects">
                <h2>Loading.....</h2>
            </section>
        )
    }

    return(
        <section className="projects">
            <div className="title">
                <h2>Projects</h2>
                <div className="title-underline"></div>
            </div>
            <div className="projects-center">
                {project.map(ele=>{
                    return(
                        <a key={ele.id} target="_blank" rel="noreferrer"  className="project" href={ele.url}>
                            <img src={ele.img} alt={ele.title} className="img" />
                            <h5>{ele.title}</h5>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}

export default Project