<script>
 import '../app.scss';

 const currentYear = new Date().getFullYear();
</script>

<header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">Abowewwut</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>

<main>
    <slot />
</main>

<footer>
    <p>&copy; {currentYear} S.Schmerek</p>
</footer>