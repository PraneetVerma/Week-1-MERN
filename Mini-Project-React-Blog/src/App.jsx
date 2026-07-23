import { useState } from "react";
import BlogCard from "./components/BlogCard";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import posts from "./data/posts";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <h1>React Blog UI</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <br />
      <br />

      <Filter
        category={category}
        setCategory={setCategory}
      />

      <br />
      <br />

      {filteredPosts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          category={post.category}
          description={post.description}
        />
      ))}
    </div>
  );
}

export default App;