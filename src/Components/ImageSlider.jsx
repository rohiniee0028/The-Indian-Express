import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://tpc.googlesyndication.com/simgad/12692791964622314734" },
  { url: "https://tpc.googlesyndication.com/simgad/12692791964622314734" },
  { url: "images/3.jpg" },
];

const Image = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}