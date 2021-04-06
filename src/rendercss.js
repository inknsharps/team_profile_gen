const cssStyling = `
main {
    display: flex;
    justify-content: center;
}

.main-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}

.navbar {
    justify-content: center;
    background-color: var(--bs-red);
    color: white;
}

.card {
    box-shadow: 1vh 1vh 1vh grey;
    margin: 2vh;
}

.card-body {
    color: white;
    background-color: var(--bs-blue);
}
`

module.exports = {
    cssStyling
}