export default function SideBar(props) {
  const { handleToggleModal } = props;
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>The Brutal Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p>
            asdafgad awfjadj wkD QKJEF wjaf wqrk fjkaeg jka dfjks djkbf khw FKJE
            ASlf jaf vjkad fjkv ajfd bvkja dKFLV AJKEF DBN VJKAS DVKJA SVK wjksd
          </p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>{" "}
        </button>
      </div>
    </div>
  );
}
