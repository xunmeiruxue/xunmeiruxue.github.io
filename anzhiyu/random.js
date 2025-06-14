var posts=["2025/06/14/hello-world/","2025/05/24/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };