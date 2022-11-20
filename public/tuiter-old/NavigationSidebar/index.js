const NavigationSidebar = () => {

    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
      <a class="list-group-item" href="/">
       <i class="fa-solid fa-house-chimney m-1"></i>
       <span class="d-none d-xl-inline d-xxl-inline">Home</span></a>
       <a class="list-group-item" href="/">
       <i class="fa-solid fa-hashtag m-1"></i>
       <span class="d-none d-xl-inline d-xxl-inline">Explore</span></a>
       <a class="list-group-item" href="/">
      <i class="fa-solid fa-bell m-1"></i>
      <span class="d-none d-xl-inline d-xxl-inline">Notifications</span></a>
       <a class="list-group-item" href="/">
       <i class="fa-solid fa-envelope m-1"></i>
       <span class="d-none d-xl-inline d-xxl-inline">Messages</span></a>
       <a class="list-group-item" href="/">
       <i class="fa-solid fa-bookmark m-1"></i>
       <span class="d-none d-xl-inline d-xxl-inline">Lists</span></a>
       <a class="list-group-item" href="/">
       <i class="fa-solid fa-list-ul m-1"></i>
       <span class="d-none d-xl-inline d-xxl-inline">Profile</span></a>
       <a class="list-group-item" href="/">
       <i class="fa-solid fa-circle-info m-1"></i>
       <span class="d-none d-xl-inline d-xxl-inline">More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

// document.getElementById('test').innerHTML = NavigationSidebar();
export default NavigationSidebar;