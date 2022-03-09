import ArtistItem from "./artistItem";

const ArtistsList = ({ artists }) => {
  if (!artists || !artists.length) return <div>No artist found. </div>;
  return (
    <div>
      <h1>Artists</h1>
      <div className="row mt-4">
        {artists.map((artist) => (
          <ArtistItem key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default ArtistsList;
