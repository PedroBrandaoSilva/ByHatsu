import { useState } from "react";

function Carousel({ images = [] }) {
  const [index, setIndex] = useState(0);

  if (!images.length) return null;

  const next = () => setIndex(i => (i + 1) % images.length);
  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);

  return (
    <div>
      <button onClick={prev}>◀</button>

      <img
        src={images[index]}
        alt=""
        style={{ maxWidth: "400px", borderRadius: 10 }}
      />

      <button onClick={next}>▶</button>

      
      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            width={60}
            onClick={() => setIndex(i)}
            style={{
              cursor: "pointer",
              border: index === i ? "2px solid purple" : "2px solid transparent",
              borderRadius: 6
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;