
const Empty = () => {
    const handleUpdateState = () => {
        window.location.reload();
    };
    return ( 
        <div className="empty">
            <p className="empty-text">No Tours Left</p>
            <button className="empty-btn" onClick={()=>handleUpdateState()}> Refresh </button> 
        </div>
     );
}
 
export default Empty;