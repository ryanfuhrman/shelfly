export default function SearchResults(results) {
  console.log(results);
  const { title, author, description, image, publishedDate } = { ...results };

  return (
    <>
      <h1>{title}</h1>
      <h2>by {author}</h2>
      <p>Description: {description}</p>
      <img src={image} alt={`Book cover of ${title} by ${author}`}></img>
      <p>published in {publishedDate}</p>
    </>
  );
}
