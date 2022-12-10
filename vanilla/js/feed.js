const dropdown = document.querySelector(".post-type");
const container = document.querySelector(".post-container");

const renderPosts = (postType) => {
  // Our proxy that makes cross origin fetching possible
  const proxy = "https://cors-anywhere.herokuapp.com/";

  fetch(`${proxy}https://www.reddit.com/r/javascript/${postType}.json`)
    .then(function(res) {
      // Return the response in JSON format
      return res.json();
    })
    .then(function(res) {
      // We render our posts to the UI in this block
      let currPost, markup = ``;

      // The array that contains our posts
      const postsArr = res.data.children;

      // Add a title based on post type
      markup = `<h3>${postType} posts from r/JavaScript</h3>`;

      // Iterate through our posts array and chain
      // the markup based on our HTML structure
      for (let i = 0; i < postsArr.length; i++) {
        currPost = postsArr[i].data; // a single post object
        markup += `
          <a class="post" href="https://www.reddit.com/${currPost.permalink}">
            <div class="title"> ${currPost.title} </div>
            <div class="content"> 
              ${currPost.selftext} 
              </br></br>
              <span>${currPost.url}</span>
            </div>
            <div class="author"> Posted by ${currPost.author} </div>
          </a>`;
      }
      // Insert the markup HTML to our container
      container.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(function(err) {
      console.log(err); // Log error if any
    });
};


dropdown.addEventListener("change", () => {
  // Gets the currently selected option index
  let index = dropdown.selectedIndex;
  // Gets the currently selected option value
  let value = dropdown.options[index].value;

  renderPosts(value);
});

// Load hot posts on page load
renderPosts("hot");
