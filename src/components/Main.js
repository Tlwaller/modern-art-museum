import museum2 from "assets/desktop/image-grid-1@2x.jpg";

const Main = () => {
  return (
    <main className="px-4 flex flex-col gap-6 md:max-w-6xl mx-auto">
      <section className="flex flex-col-reverse gap-6 md:flex-row md:justify-between">
        <div className="h-full md:w-4/12 md:pr-11 md:my-auto">
          <h3 className="pb-5">YOUR DAY AT THE GALLERY</h3>
          <p className="max-md:text-lg">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${museum2})` }}
          className="h-80 bg-cover bg-left md:w-7/12"
        />
      </section>
    </main>
  );
};

export default Main;
