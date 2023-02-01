// image in About arguments is a placeholder

function About({image, about}) {
    return (
        <aside>
            <img src={image===undefined ? "//via.placeholder.com/215" : image} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default About