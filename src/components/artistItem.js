import Link from "next/link";
import AppImage from './image'

const ArtistItem = ({ artist }) => {
  return (
    <Link  href={`/artists/${encodeURIComponent(artist.id)}`}>
      <div className="col-3">
        <a data-testid="artist-href">
          <div className="card" role="card">
            <AppImage src={artist.image} alt={artist.name} width='200' height='140' />
            <div className="card-body">
              <p className="card-title" data-testid="artist-name">{artist.name}</p>
            </div>
          </div>
        </a>
      </div>
    </Link>
  );
};

export default ArtistItem;
