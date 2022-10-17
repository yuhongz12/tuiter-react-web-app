const WhoToFollowListItem = (who) => {
    return(`
                <li class="list-group-item">
                    <div class="float-end">
                        <button class="btn btn-primary rounded-pill">Follow</button>
                    </div>
                    <div class="row d-flex">
                        <div class="col-2 p-0">
                            <img class="w-100 rounded-circle"
                                 src="${who.avatarIcon}" alt="avatar">
                        </div>
                        <div class="col-auto p-0 ms-1 me-1">
                            <a href="#" class="text-decoration-none text-white fw-bold m-1">${who.userName}</a><i
                                class="fa-solid fa-check-circle"></i>

                            <p class="m-0">@${who.handle}</p>
                        </div>

                    </div>
                </li>
    `);
}

export default WhoToFollowListItem;