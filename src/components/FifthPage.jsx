import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";

const projects = [
  { src: web1, alt: "NikeRedesigned" },
  { src: web2, alt: "Elegant" },
  { src: web3, alt: "Dropnow" },
  { src: web4, alt: "Gandy" },
  { src: web5, alt: "Aimm" },
  { src: web6, alt: "Nunito" },
];

const FifthPage = () => {
  return (
    <section id="proj">
      <section className="container mx-auto px-4 bg-slate-950 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4 text-white josefin-sans font-monsterrat">
            Projects
          </h3>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.src}
                  alt={project.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <p className="text-white text-lg font-semibold font-quicksand">
                  {project.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default FifthPage;
