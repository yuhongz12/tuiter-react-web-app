const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
                        <div class="row">
                            <div class="col-9 col-xxl-10 col-md-10 col-sm-9">
                                <div>
                                    <span class="text-muted">${post.topic}</span>
                                </div>
                                <div>
                                    <span class="fw-bold">${post.userName}</span>
                                    <span class="fa-solid fa-check-circle"></span>
                                    <span>&middot;</span>
                                    <span class="text-muted">${post.time}</span>
                                </div>
                                <span class="fw-bold">${post.title}</span>
                                <div>
                                    <span class="text-muted m-0">${post.tweets}</span>
                                </div>
                            </div>
                            <div class="col-3 col-xxl-2 col-md-2 col-sm-3 ps-0">
                                <img class="rounded-4 w-100" src="${post.image}">
                            </div>
                        </div>
                    </li>
    `)}

export default PostSummaryItem;