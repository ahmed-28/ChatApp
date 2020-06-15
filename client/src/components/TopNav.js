const TopNav = ({room}) => {
    return(
        <div className="flex bg-purple-500">
            <div className="flex-grow pl-2">{room}</div>
            <div className="flex-grow"><div className="float-right pr-2">close</div></div>
        </div>
    )
};

export default TopNav;