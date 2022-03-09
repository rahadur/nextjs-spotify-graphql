import AlbumItem from "./albumItem";

const AlbumList = ({ albums }) => {
  if (!albums || !albums.length) return <div>No albums </div>;
  return (
    <div className="row">
      {albums.map((album) => (
        <AlbumItem key={album.id} album={album} />
      ))}
    </div>
  );
};

export default AlbumList;
