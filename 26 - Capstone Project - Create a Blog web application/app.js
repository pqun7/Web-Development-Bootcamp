import express from "express"
import { dirname, join } from "path";
import { title } from "process";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use('/src', express.static(join(__dirname, 'src')));

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) =>{
    res.render("index.ejs");
})

const posts = {}
function addPost(req, res, next, postNumber) {
    const { article_title, article_content } = req.body;

    if (!article_title || !article_content) {
        return next(new Error('Title and content are required'));
    }
    
    try {
        const postKey = `post${postNumber}`;
        posts[postKey] = {
            id: postKey,
            title: article_title,
            content: article_content
        };
        next(); 
    } catch (error) {
        next(error);
    }
}

function printPosts() {
    for (let key in posts) {
        if (posts.hasOwnProperty(key)) { 
            console.log(`Post ID: ${posts[key].id}`);
            console.log(`Title: ${posts[key].title}`);
            console.log(`Content: ${posts[key].content}`);
            console.log('---');
        }
    }
}

app.get("/posts/new", (req, res) => {
    res.render("new.ejs"); 
});

app.post("/posts/new", (req, res, next) => {
    const postNumber = Object.keys(posts).length + 1;
    addPost(req, res, next, postNumber);
    printPosts()
    res.render("new.ejs"); 
});

app.get("/posts", (req, res) =>{
    res.render("posts.ejs", posts)
})


app.use((err, req, res, next) => {
    console.error(err.stack);
    if (err.message === 'Title and content are required') {
        res.status(400).render('new.ejs', { error: err.message });
    } else {
        res.status(500).send('Something went wrong!');
    }
});
app.listen(3000, () => console.log(`Server running on port 3000`));