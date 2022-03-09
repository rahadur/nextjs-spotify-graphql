import Image from "next/image";

const AlbumItem = ({ album }) => {
  return (
    <div className="col-3 mt-3">
      <div className="card" role="card">
        {album.image ?
          <Image src={album.image} width="200" height="140" /> :
          <Image src={"/placeholder.png"} width="200" height="140" />
        }
        <div className="card-body">
          <p className="card-title">{album.name}</p>
        </div>
      </div>
    </div>
  );
};

export default AlbumItem;
