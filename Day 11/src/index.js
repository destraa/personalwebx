const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.set("view engine", "hbs");
app.set('views', path.join(__dirname, 'src/views'));

app.use("/assets", express.static('src/assets'));
app.use(express.urlencoded({ extended: false }));

app.get('/', home);
app.get('/contactme', contactme);
app.get('/blog', blog);
app.get('/add-blog', addBlogView);
app.post('/add-blog', addBlog);
app.get('/blog-detail/:id', blogDetail);
app.get('/testimonials', testimonial);

function home(req, res) {
    res.render('index');
}

function contactme(req, res) {
    res.render('contactme');
}

function blog(req, res) {
    const data = [
        {
            title: "Title 1",
            content: "Content 1"
        },
        {
            title: "Title 2",
            content: "Content 2"
        },
        {
            title: "Title 3",
            content: "Content 3"
        }
    ];

    res.render('blog', { data });
}

function addBlogView(req, res) {
    res.render('add-blog');
}

function addBlog(req, res) {
    const { title, content } = req.body;

    console.log("Title:", title);
    console.log("Content:", content);

    // Redirect to the blog page after adding a blog
    res.redirect('/blog');
}

function blogDetail(req, res) {
    const id = req.params.id;
    const title = "Title 1";
    const content = "Content 1";
    const data = {
        id,
        title,
        content
    };

    res.render('blog-detail', { data });
}

function testimonial(req, res) {
    res.render('testimonial');
}

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});
