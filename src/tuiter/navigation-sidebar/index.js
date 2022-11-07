import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = () => {
    const active = useLocation().pathname.split("/");
    console.log(active)
    return (
        <div className="list-group">
            <Link to="/tuiter" className="list-group-item">Tuiter</Link>

            <Link to="/tuiter" className={`list-group-item
                    ${active.length === 2 ?'active':''}`}>
                Home
            </Link>
            <Link to={"/tuiter/explore"} className={`list-group-item
                    ${active[2] === 'explore'?'active':''}`}>
                Explore
            </Link>
            <Link to={"/tuiter/notifications"} className={`list-group-item
                    ${active[2] === 'notifications'?'active':''}`}>
                Notifications
            </Link>
            <Link to={"/tuiter/messages"} className={`list-group-item
                    ${active[2] === 'messages'?'active':''}`}>
                Messages
            </Link>
            <Link to={"/tuiter/bookmarks"} className={`list-group-item
                    ${active[2] === 'bookmarks'?'active':''}`}>
                Bookmarks
            </Link>
            <Link to={"/tuiter/lists"} className={`list-group-item
                    ${active[2] === 'lists'?'active':''}`}>
                Lists
            </Link>
            <Link to={"/tuiter/profile"} className={`list-group-item
                    ${active[2] === 'profile'?'active':''}`}>
                Profile
            </Link>
            <Link to={"/tuiter/more"} className={`list-group-item
                    ${active[2] === 'more'?'active':''}`}>
                More
            </Link>
        </div>

    );
};
export default NavigationSidebar;