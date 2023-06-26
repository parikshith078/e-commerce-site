function HeroSection() {
  return (
    <div className="hero min-h-[60vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* TODO: ADD a imge here */}
        <img
          src="https://images.unsplash.com/photo-1622010652810-eba11f92f90f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1012&q=80"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Bookshelf</h1>
          <p className="py-6">
            Shop the Best Selection of Books Online: From New Releases to Rare
            Finds, We Have It All
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
