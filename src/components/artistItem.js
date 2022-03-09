import Image from "next/image";
import Link from "next/link";

const ArtistItem = ({ artist }) => {
  return (
    <Link href={`/artists/${encodeURIComponent(artist.id)}`}>
      <div className="col-3">
        <div className="card" role="card">
          {artist.image ?
            <Image src={artist.image} width="200" height="140" /> :
            <Image src={"/placeholder.png"} width="200" height="140" />
          }
          <div className="card-body">
            <p className="card-title">{artist.name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArtistItem;
