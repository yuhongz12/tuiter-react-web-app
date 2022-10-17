import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <div class="position-relative col-11">
                        <label for="input-field" class="position-absolute  wd-search-move"><i class=" fa-solid fa-search"></i></label>
                        <input id="input-field" class="rounded-pill w-100 p-1 ps-5" type="text" placeholder="Search Tuiter">
                    </div>
                    <div class="col-1">
                        <a class="text-primary fs-4" href="explore-settings.html"><i class="fa-solid fa-gear"></i></a>
                    </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <ul class="nav nav-tabs mb-2">
                    <li class="nav-item"><a href="for-you.html" class="nav-link active fw-semibold">For you</a></li>
                    <li class="nav-item"><a href="trending.html" class="nav-link fw-semibold">Trending</a></li>
                    <li class="nav-item"><a href="news.html" class="nav-link fw-semibold">News</a></li>
                    <li class="nav-item"><a href="sports.html" class="nav-link fw-semibold">Sports</a></li>
                    <li class="nav-item"><a href="entertainment.html" class="nav-link fw-semibold d-none d-md-block d-lg-block d-xl-block d-xxl-block">Entertainment</a></li>
                </ul>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative mb-2">
                    <span class="position-absolute m-2 text-white h2 fw-bold bottom-0">SpaceX's Starship</span>
                    <img class="w-100" src="../../images/sharship.webp">

           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
