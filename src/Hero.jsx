import HeroImg from  "./assets/hero.svg"

const Hero = ()=>{
    return(
       <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Richard Osuya</h1>
                <p>
                    A FrontEnd Developer Highly effective at developing and standardizing designs according to company brand and objectives. Ready to bring my all to a growth-oriented team.
                </p>
            </div>
            <div className="img-container">
                <img src={HeroImg} alt="Hero Image" className="img"/>
            </div>

        </div>
       </section>
    )
}

export default Hero