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
</style>
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
