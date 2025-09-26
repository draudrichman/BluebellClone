import ServiceCard from '../ServiceCard'
import lawnCareImage from "@assets/generated_images/Lawn_care_service_image_6cca5b63.webp";

export default function ServiceCardExample() {
  return (
    <div className="max-w-sm">
      <ServiceCard
        title="Lawn Care"
        description="From simple grass cuts to expertly trimming trees and shrubs – everything for your curb appeal!"
        image={lawnCareImage}
        onClick={() => console.log('Lawn care clicked')}
      />
    </div>
  )
}