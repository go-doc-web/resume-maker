"use client";
import { useQuery } from "@apollo/client";
import { GetContentPagesDocument } from "@/graphql/operations";

import "./LandingPage.scss";

// Function to get the object with slug "starpi"
function getObjectWithSlug(data, slug) {
  return data?.contentPages.find((page) => page.slug === slug);
}

function HomePage() {
  const { loading, error, data } = useQuery(GetContentPagesDocument);

  console.log("data", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data || !data.contentPages || data.contentPages.length === 0)
    return <p>No landing page data found.</p>;

  const starpiObject = getObjectWithSlug(data, "home");
  console.log(starpiObject);
  console.log("contentPages", starpiObject?.title);
  return (
    <div>
      <h1>{starpiObject.title}</h1>
      <p>{starpiObject.description}</p>

      {/* Render sections */}
      {starpiObject.sections.map((section) => {
        switch (section.__typename) {
          case "ComponentSectionsPrising":
            return (
              <div key={section.id}>
                <h2>{section.heading}</h2>
                <p>{section.description}</p>
                {section.prisingCard.map((card) => (
                  <div key={card.id}>
                    {" "}
                    {/* Assuming each card needs an ID */}
                    <h3>
                      {card.planType} - ${card.planPrice}
                    </h3>
                    <p>{card.description}</p>{" "}
                    {/* If prisingCard has a description */}
                    <ul>
                      {card.services.map((service) => (
                        <li key={service.name}>
                          {" "}
                          {/* Assuming service name is unique */}
                          {service.name}: {service.description}
                        </li>
                      ))}
                    </ul>
                    {card.link && (
                      <a
                        href={card.link.link}
                        target={card.link.isExternal ? "_blank" : "_self"}
                      >
                        {card.link.title}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            );
          case "ComponentSectionsRow":
            return (
              <div key={section.id}>
                {section.card.map((card) => (
                  <div key={card.id}>
                    <h2>{card.heading}</h2>
                    <p>{card.description}</p>
                    {card.image && (
                      <img src={card.image.url} alt={card.image.name} />
                    )}
                  </div>
                ))}
              </div>
            );
          case "ComponentSectionsHero":
            return (
              <div className="container container--fullscreen">
                <div key={section.id}>
                  <h1 className="title-hero">{section.heading}</h1>
                  {section.image && (
                    <img
                      // src={section.image.url}
                      alt={`http://localhost:3000/${section?.image?.alternativeText}`}
                      src={`http://localhost:1337${section?.image?.url}`}
                      width={250}
                    />
                  )}
                  {section.link && (
                    <a
                      href={section.link.link}
                      target={section.link.isExternal ? "_blank" : "_self"}
                    >
                      {section.link.title}
                    </a>
                  )}
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default HomePage;
