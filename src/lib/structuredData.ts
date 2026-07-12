import { property } from "@/content/property";
import { amenityCategories } from "@/content/amenities";

export function lodgingBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://wrightbythebeach.com/#property",
    name: property.name,
    description: property.headline,
    url: "https://wrightbythebeach.com",
    telephone: property.managerPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address.street,
      addressLocality: property.address.city,
      addressRegion: property.address.state,
      postalCode: property.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: property.geo.latitude,
      longitude: property.geo.longitude,
    },
    numberOfRooms: property.stats.bedrooms,
    petsAllowed: true,
    amenityFeature: amenityCategories.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "LocationFeatureSpecification",
        name: item.name,
        value: true,
      }))
    ),
    containsPlace: {
      "@type": "Accommodation",
      numberOfBedrooms: property.stats.bedrooms,
      numberOfBathroomsTotal: property.stats.fullBaths + property.stats.halfBaths,
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: property.stats.sleeps,
      },
    },
  };
}
