function BlogCard(props) {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <h4>{props.category}</h4>
            <p>{props.description}</p>
        </div>
    );
}

export default BlogCard;