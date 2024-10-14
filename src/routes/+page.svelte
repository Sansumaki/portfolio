<style lang="scss">
h1 {
    font-size: 2em;
    text-align: center;
    line-height: 10em;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        display: grid;
        width: 300px;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;

        > div {
            background: linear-gradient(10deg, black, red);
        }
    }
}


section {
    padding: 40px 20px;
    text-align: center;
}

.project {
    margin: 20px 0;
}

.project h3 {
    margin: 10px 0;
}

.project a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
}

form {
    max-width: 400px;
    margin: 0 auto;
}

form input,
form textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

form button {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

form button:hover {
    background-color: #555;
}

.desk {
    width: 50%;
    
}

</style>


<section id="home">
    <h2>Home</h2>

    <img src="desktop.webp" alt="desk" class="desk" />

    <p>Hello, I am <strong>Your Name</strong>. I am a web developer, designer, and creative professional.</p>
</section>

<section id="about">
    <h2>About Me</h2>
    <p>Brief introduction about your background, education, and skills.</p>
</section>

<section id="projects">
    <h2>Projects</h2>
    <div class="project">
        <h3>Project Title 1</h3>
        <p>Short description of the project.</p>
        <a href="#">View Project</a>
    </div>
    <div class="project">
        <h3>Project Title 2</h3>
        <p>Short description of the project.</p>
        <a href="#">View Project</a>
    </div>
</section>

<section id="contact">
    <h2>Contact Me</h2>
    <form>
        <input type="text" placeholder="Your Name" required>
        <input type="email" placeholder="Your Email" required>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
    </form>
</section>


<h1>libberflabber Wobblewob</h1>

<div class="container">
    <div class="panel">
        <div>
            <span>Coding</span>
        </div>
        <div>
            <span>Coding</span>
        </div>
        <div>
            <span>Coding</span>
        </div>
        <div>
            <span>Coding</span>
        </div>
        <div>
            <span>Coding</span>
        </div>
    </div>
</div>
