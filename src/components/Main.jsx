export default function Main(props) {
  const { data } = props;

  return (
    <div className="imgContainer">
      {data.media_type === "video" ? (
        <iframe
          src={data.url}
          title={data.title || "APOD video"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="bgVideo"
        ></iframe>
      ) : (
        <img
          src={data.hdurl}
          alt={data.title || "bg-img"}
          className="bgImage"
        />
      )}
    </div>
  );
}
