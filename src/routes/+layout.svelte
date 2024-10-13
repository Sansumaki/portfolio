<script>
 import '../app.scss';

 const currentYear = new Date().getFullYear();
</script>

<main>
    <slot />
</main>

<footer>
    <p>&copy; {currentYear} S.Schmerek</p>
</footer>