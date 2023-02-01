const About = () => {
    return (
        <div>
            <h2 className=" font-medium text-3xl mx-2 px-10 lg:mx-16">About Us</h2>
            <div className="w-auto lg:flex gap-10 mx-2 p-10 lg:mx-16">
                <p className=" text-lg mb-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis sapiente sunt suscipit illum impedit voluptates ratione recusandae perspiciatis adipisci enim, quia, provident odio reiciendis iusto, libero maxime accusantium maiores.
                </p>
            </div>
            <div className="w-auto lg:flex gap-10 mx-2 p-10 lg:mx-16">
                <div className="mission">
                    <h2 className=" font-medium text-3xl mb-5">Mission</h2>
                    <p className=" text-lg mb-3">
                    <span className=" font-bold">1) Purpose:</span> The mission of the Seneca Software Developers Club is to provide an inclusive, collaborative and educational environment for students to explore and develop their software development skills. We aim to foster an environment of creativity, learning, and problem-solving where members can grow both professionally and personally.
                    </p>
                    <p className=" text-lg mb-3">
                    <span className=" font-bold">2) Goals:</span> The goals of the Seneca Software Developers Club are to create opportunities for students to collaborate on projects, attend workshops and events, and build a strong network within the tech community. Our aim is to provide access to resources and mentorship opportunities that will help members achieve their full potential in the field of software development. Additionally, we aim to provide a space for members to learn about new technologies, discuss current industry trends, and connect with industry professionals.
                    </p>
                    <p className=" text-lg mb-3">
                    <span className=" font-bold">3) Community Engagement:</span> The Seneca Software Developers Club is dedicated to creating a vibrant and diverse community of software developers. We believe that community engagement is a critical part of our mission, and we strive to create opportunities for members to give back through volunteer and outreach programs. By creating a welcoming and inclusive environment for all members, we hope to inspire and empower the next generation of software developers, and build a strong and sustainable community that supports the growth and success of its members.
                    </p>
                </div>
                {/* <div className=" lg:m-16 object-cover h-48 w-96"> */}

                    <img className=" lg:ml-36 shadow-2xl rounded-lg" src="https://fastly.4sqi.net/img/general/600x600/88299082_F-zJRSfK1RYl8okGBpIg-tGzdv35KEeq8aTa1bMCQHw.jpg" alt="" />
                {/* </div> */}
            </div>

            <div className="w-auto lg:flex gap-10 mx-2 p-10 lg:mx-16">
                {/* <div> */}
                    <img className="mr-36 shadow-2xl rounded-lg" src="https://www.senecacollege.ca/content/dam/projects/seneca/campus-photos/case-study-classroom_tile.jpg" alt="campus" />
                {/* </div> */}
                <div className="vision">
                    <h3 className=" font-medium text-3xl mb-5">Vision</h3>
                    <p className=" text-lg mb-3">
                    As a software developer student club at Seneca College, our vision is to provide a supportive and innovative environment for students to explore their passions in the field of software development. We aim to bring together students with a common interest in technology, programming, and software engineering to collaborate, learn and grow their skills. Our club serves as a hub for students to connect with each other, industry professionals and to develop real-world projects that can demonstrate their abilities.
                    </p>
                    <p className=" text-lg mb-3">
                    Our goal is to provide students with the tools, resources and opportunities necessary to help them excel in their careers as software developers. We plan to achieve this through weekly meetings, hackathons, workshops, guest speakers and mentorship programs. Our members will have access to cutting-edge technology and industry-standard software development tools to work on their projects. We also aim to collaborate with local companies and organizations to provide our members with internships, co-op placements, and job opportunities.
                    </p>
                    <p className=" text-lg mb-3">
                    Finally, we believe that the success of our club is dependent on the contributions of our members. We encourage students to participate in club activities, volunteer for leadership positions and contribute their skills and expertise to help drive the club forward. Whether you're a beginner or an experienced software developer, we welcome you to join our club and become a part of a dynamic community of students who are passionate about software development. Let's work together to shape the future of technology and software development at Seneca College!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;