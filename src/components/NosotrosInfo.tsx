import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import LanguageContext from "../context/EnglishContext";

export const DescOne = () => {
  const language = useContext(LanguageContext);
  const { ref: descInfo, inView: infoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={descInfo}
      className={infoInView ? "desc-info in-view" : "desc-info"}
    >
      {language === "ES" ? (
        <>
          <h2 className="desc-heading">¿Quiénes somos?</h2>
          <p>
            Green Roots es una marca que nace en el año 2021 como una propuesta
            disruptiva en la industria de productos con cannabis (CBD)
            proponiendo un estilo de vida saludable, sustentable y que genere
            una conciencia ambiental en toda la cadena de producción y en los
            consumidores. Somos una marca 100% colombiana que se interesa en
            generar un cambio en la relación de consumo y el impacto que éste
            tiene en el medio ambiente. <br></br>
            <br></br> Nuestra propuesta se basa en reformular las practicas
            industriales que causan daño en animales, fuentes hidricas y que
            generan una huella de carbono, ofreciendo productos orgánicos de
            calidad que provengan de organizaciones que generan empleo a
            comunidades vulnerables y/o que sean de KM0, es decir, que aplican
            prácticas para disminuir la huella de CO2.
          </p>
        </>
      ) : (
        <>
          <h2 className="desc-heading">¿Who are we?</h2>
          <p>
            Green Roots was born in 2021 as a disruptive approach in the CBD
            industry, proposing a healthy and sustainable lifestyle, that can
            generate environmental awareness in the production chain and the
            final consumers. We are a 100% colombian brand that is interested in
            generating a significant change in people&apos;s relationship
            towards consumerism and it&apos;s impact on the environment.
            <br></br>
            <br></br>
            Our proposal is based on reformulating industrial practices that can
            cause damage to animals, water sources and have a high carbon
            footprint. We offer high quality organic products made with the help
            of organizations that generate employment in vulnerable communities
            and apply low CO2 footprint practices.
          </p>
        </>
      )}
    </div>
  );
};

export const DescTwo = () => {
  const language = useContext(LanguageContext);
  const { ref: descInfo, inView: infoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={descInfo}
      className={infoInView ? "desc-info in-view" : "desc-info"}
    >
      {language === "ES" ? (
        <>
          <h2 className="desc-heading">Misión</h2>
          <p>
            En Green Roots Colombia nos comprometemos a ofrecer productos de
            alta calidad, creados a partir de fuentes naturales y sostenibles
            con un enfoque de reducción del impacto ambiental en el mediano
            plazo. Nuestra prioridad es ofrecer soluciones amigables con el
            planeta que esten libres de maltrato animal, brindando una
            experiencia de compra responsable, consciente y con la certeza de
            que los productos no han sido tratados con ningún tipo de pesticida,
            parabenos o producto químico.{" "}
          </p>
        </>
      ) : (
        <>
          <h2 className="desc-heading">Mision</h2>
          <p>
            Green Roots is commited to offering products of the highest quality,
            made from natural and sustainable sources. We focus on delivering
            cruelty-free, paraben-free products that can have a positive impact
            on the environment and give our clients tranquility.
          </p>
        </>
      )}
    </div>
  );
};

export const DescThree = () => {
  const language = useContext(LanguageContext);
  const { ref: descInfo, inView: infoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={descInfo}
      className={infoInView ? "desc-info in-view" : "desc-info"}
    >
      {language === "ES" ? (
        <>
          <h2 className="desc-heading">Visión</h2>
          <p>
            Green Roots Colombia se proyecta, para el año 2030, a ser la empresa
            líder en la industria de productos artesanales con cannabis (CBD),
            hechos a mano y libres de crueldad animal, inspirando a otros a
            adoptar un enfoque sostenible y responsable en la producción,
            consumo y disposición final de los productos. Buscamos innovar y
            desarrollar productos que han sido cultivados respetando los ritmos
            de la naturaleza sin manipulación genética y proporcionando
            beneficios para el medio ambiente y la comunidad.
          </p>
        </>
      ) : (
        <>
          <h2 className="desc-heading">Vision</h2>
          <p>
            Green Roots aims to be the leader in the industry of handmade,
            cruelty-free CBD products in Colombia by the year 2030. We wish to
            inspire others to adopt a more sustainable and responsible approach
            in the production, consumption and final disposal of these products.
            We want to innovate and develop products that have been cultivated
            respecting the rythms of nature without genetic manipulation and
            that can have meaningful positive impact on the community and the
            environment.
          </p>
        </>
      )}
    </div>
  );
};
