import HeroImage from "../assets/hero-img.svg";

function HeroSection() {
  const handleScroll = () => {
    const halfPageHeight = window.innerHeight / 2;
    document.documentElement.scrollTop = halfPageHeight;
  };
  return (
    <div className="hero min-h-[60vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={HeroImage} className="max-w-2xl rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold">SaleSparks</h1>
          <p className="py-6">
            SaleSparks - Your go-to destination for trendy fashion, elegant
            jewelry, and cutting-edge electronics. Shop with ease and confidence
            on our secure platform with fast shipping and easy returns.
          </p>
          <button onClick={handleScroll} className="btn btn-primary">
            Show Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
