import AppImage from './image'

const AlbumItem = ({ album }) => {
  return (
    <div className="col-3 mt-3">
      <div className="card" role="card">
        <AppImage src={album.image} alt={album.name} width='200' height='140' />
        <div className="card-body">
          <p className="card-title" data-testid="album-name">{album.name}</p>
        </div>
      </div>
    </div>
  );
};

export default AlbumItem;
