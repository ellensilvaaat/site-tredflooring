import './UploadRoom.css';

export default function UploadRoom() {
  return (
    <section className="upload-room">
      <div className="upload-room__image">
        <img src="https://site-tredflooring-assets.s3.amazonaws.com/room-left.png" alt="Room left" />
      </div>

      <div className="upload-room__text">
        <h2>Check out our products in your room!</h2>
        <p>
          Add a photo, select a product from the catalog, <span className="mobile-hide-br"><br /></span>
          and see how it will look in your room!
        </p>
      </div>

      <div className="upload-room__image upload-room__image--right">
        <div className="upload-box">
          <p>Drag and drop a photo in PNG<br />or JPG format.</p>
          <button>Upload photo</button>
        </div>
      </div>
    </section>
  );
}
