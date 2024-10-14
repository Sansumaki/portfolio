<script>
 import '../app.scss';

 const currentYear = new Date().getFullYear();
</script>

<style lang="scss">
header {
    background-color: black;
    color: white;
    padding: 20px 0;
    text-align: center;
}

nav ul {
    list-style-type: none;
    padding: 0;
    text-align: center;
}

nav ul li {
    display: inline;
    margin: 0 20px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

footer {
    text-align: center;
    padding: 20px 0;
    background-color: #333;
    color: #fff;
}

.logo {
    color: white;
    height: 80px;
    margin-top: 2em;
}
</style>
<header class="header">
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <img src="/SanLogo.svg" alt="Logo" class="logo" />
</header>

<main>
    <slot />
</main>

<footer>
    <p>&copy; {currentYear} S.Schmerek</p>
</footer>