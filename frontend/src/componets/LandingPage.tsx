"use client";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_LANDING_PAGE_DATA = gql`
  query ExampleQuery {
    landingPages {
      title
      description
      slug
      metadata {
        metaDescription
        metaTitle
        metaImage {
          name
          url
        }
      }
      sections {
        ... on ComponentSectionsPrising {
          heading
          description
          id
          prisingCard {
            isFeatured
            link {
              isExternal
              link
              title
              type
              id
            }
            planPrice
            planType
            services {
              name
              description
            }
          }
        }
        ... on ComponentSectionsRow {
          card {
            id
            heading
            description
            image {
              name
              url
            }
          }
          id
        }
        ... on ComponentSectionsHero {
          heading
          id
          image {
            alternativeText
            url
          }
          link {
            id
            isExternal
            link
            title
          }
        }
      }
    }
  }
`;

function LandingPage() {
  const { loading, error, data } = useQuery(GET_LANDING_PAGE_DATA);
  console.log("data", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data || !data.landingPages || data.landingPages.length === 0)
    return <p>No landing page data found.</p>;

  const landingPage = data?.landingPages[0]; // Assuming you only have one landing page.  Adjust as needed.

  return (
    <div>
      <h1>{landingPage.title}</h1>
      <p>{landingPage.description}</p>

      {/* Render sections */}
      {landingPage.sections.map((section) => {
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
              <div key={section.id}>
                <h1>{section.heading}</h1>
                {section.image && (
                  <img
                    src={section.image.url}
                    alt={section.image.alternativeText}
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
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default LandingPage;
