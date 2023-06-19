const express = require(`express`);
const path = require(`path`);
const app = express();
const usersRoute = require(`./routes/users`)
const marketsRoute = require(`./routes/market`)
const customRoute = require(`./routes/router`)

const PORT = 8080;

app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname + `/public/index.html`));
});

app.use(`/users`, usersRoute)
app.use(`/markets`, marketsRoute)
app.use(`/custom`, customRoute)

app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname + `/public/index.html`))
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
