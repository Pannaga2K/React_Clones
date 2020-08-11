import React from 'react';
import "./Sidebar.css";
import "./SidebarOption.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from "../../DataLayer";

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();
    
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SidebarOption Icon={HomeIcon} title={"HOME"} />
            <SidebarOption Icon={SearchIcon} title={"SEARCH"} />
            <SidebarOption Icon={LibraryMusicIcon} title={"YOUR LIBRARY"} />
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />    
            ))}
            {/* <SidebarOption title="HIP HOP" />
            <SidebarOption title="ROCK" />
            <SidebarOption title="RNB" /> */}
        </div>
    )
}

export default Sidebar
