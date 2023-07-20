class BlogsDetailsDto{
    constructor(blog){
        this.id=blog.id;
        this.title=blog.title;
        this.content=blog.content;
        this.author=blog.author;
        this.photo=blog.photo;
        this.authorName=blog.author.name;
        this.username=blog.author.username;
    }
}
module.exports=BlogsDetailsDto;