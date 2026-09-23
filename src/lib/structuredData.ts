import { property } from "@/content/property";
import { amenityCategories } from "@/content/amenities";

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://wrightbythebeach.com${item.path}`,
    })),
  };
}

function to24Hour(time: string): string {
  const [, hourStr, minute, meridiem] = time.match(/(\d+):(\d+)\s*(AM|PM)/i)!;
  let hour = Number(hourStr) % 12;
  if (meridiem.toUpperCase() === "PM") hour += 12;
  return `${String(hour).padStart(2, "0")}:${minute}`;
}

export function lodgingBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://wrightbythebeach.com/#property",
    name: property.name,
    description: property.headline,
    url: "https://wrightbythebeach.com",
    telephone: property.managerPhone,
    image: "https://wrightbythebeach.com/images/site/exterior-front.jpg",
    checkinTime: to24Hour(property.checkIn),
    checkoutTime: to24Hour(property.checkOut),
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
