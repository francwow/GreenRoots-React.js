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
          <h2 className="desc-heading">¿Qué es el CBD?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            viverra posuere nisl nec rhoncus. Duis eu enim eu dolor aliquam
            accumsan sed ut est. In eget urna congue, commodo nisi nec,
            ultricies nisi. Etiam rutrum magna diam, non ornare leo congue eu.
            Nullam nec urna ante. Nam venenatis enim mauris, quis gravida felis
            iaculis eu. Curabitur mattis sem ac ipsum placerat mollis. Phasellus
            sit amet blandit nibh. Suspendisse potenti. Sed mattis odio nec
            purus blandit faucibus. In dignissim vel risus eu semper. Proin
            porta, orci sit amet finibus vulputate, odio nisl rhoncus ipsum, ac
            porta tortor nisl id massa. Nam fringilla, nisi nec hendrerit
            ultricies, ipsum magna cursus dolor, eu posuere metus ipsum eget
            neque. Nam ac vehicula enim, eget accumsan tellus. Donec dictum,
            magna eu condimentum volutpat, enim erat ultrices tellus, sed congue
            mauris nisi ut tortor. Integer non rhoncus ante, quis cursus justo.
            Aenean dolor ipsum, eleifend ut.
          </p>
        </>
      ) : (
        <>
          <h2 className="desc-heading">¿What is CBD?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            viverra posuere nisl nec rhoncus. Duis eu enim eu dolor aliquam
            accumsan sed ut est. In eget urna congue, commodo nisi nec,
            ultricies nisi. Etiam rutrum magna diam, non ornare leo congue eu.
            Nullam nec urna ante. Nam venenatis enim mauris, quis gravida felis
            iaculis eu. Curabitur mattis sem ac ipsum placerat mollis. Phasellus
            sit amet blandit nibh. Suspendisse potenti. Sed mattis odio nec
            purus blandit faucibus. In dignissim vel risus eu semper. Proin
            porta, orci sit amet finibus vulputate, odio nisl rhoncus ipsum, ac
            porta tortor nisl id massa. Nam fringilla, nisi nec hendrerit
            ultricies, ipsum magna cursus dolor, eu posuere metus ipsum eget
            neque. Nam ac vehicula enim, eget accumsan tellus. Donec dictum,
            magna eu condimentum volutpat, enim erat ultrices tellus, sed congue
            mauris nisi ut tortor. Integer non rhoncus ante, quis cursus justo.
            Aenean dolor ipsum, eleifend ut.
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
          <h2 className="desc-heading">¿Por qué elegir Green Roots?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            viverra posuere nisl nec rhoncus. Duis eu enim eu dolor aliquam
            accumsan sed ut est. In eget urna congue, commodo nisi nec,
            ultricies nisi. Etiam rutrum magna diam, non ornare leo congue eu.
            Nullam nec urna ante. Nam venenatis enim mauris, quis gravida felis
            iaculis eu. Curabitur mattis sem ac ipsum placerat mollis. Phasellus
            sit amet blandit nibh. Suspendisse potenti. Sed mattis odio nec
            purus blandit faucibus. In dignissim vel risus eu semper. Proin
            porta, orci sit amet finibus vulputate, odio nisl rhoncus ipsum, ac
            porta tortor nisl id massa. Nam fringilla, nisi nec hendrerit
            ultricies, ipsum magna cursus dolor, eu posuere metus ipsum eget
            neque. Nam ac vehicula enim, eget accumsan tellus. Donec dictum,
            magna eu condimentum volutpat, enim erat ultrices tellus, sed congue
            mauris nisi ut tortor. Integer non rhoncus ante, quis cursus justo.
            Aenean dolor ipsum, eleifend ut.
          </p>
        </>
      ) : (
        <>
          <h2 className="desc-heading">Why choose Green Roots?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            viverra posuere nisl nec rhoncus. Duis eu enim eu dolor aliquam
            accumsan sed ut est. In eget urna congue, commodo nisi nec,
            ultricies nisi. Etiam rutrum magna diam, non ornare leo congue eu.
            Nullam nec urna ante. Nam venenatis enim mauris, quis gravida felis
            iaculis eu. Curabitur mattis sem ac ipsum placerat mollis. Phasellus
            sit amet blandit nibh. Suspendisse potenti. Sed mattis odio nec
            purus blandit faucibus. In dignissim vel risus eu semper. Proin
            porta, orci sit amet finibus vulputate, odio nisl rhoncus ipsum, ac
            porta tortor nisl id massa. Nam fringilla, nisi nec hendrerit
            ultricies, ipsum magna cursus dolor, eu posuere metus ipsum eget
            neque. Nam ac vehicula enim, eget accumsan tellus. Donec dictum,
            magna eu condimentum volutpat, enim erat ultrices tellus, sed congue
            mauris nisi ut tortor. Integer non rhoncus ante, quis cursus justo.
            Aenean dolor ipsum, eleifend ut.
          </p>
        </>
      )}
    </div>
  );
};
